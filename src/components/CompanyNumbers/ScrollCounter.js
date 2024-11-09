import React, { useEffect, useState, useRef } from "react";

const ScrollCounter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);
  const ref = useRef();

  useEffect(() => {
    let observer;
    const observerOptions = {
      root: null, // Observe the element relative to the viewport
      rootMargin: "0px",
      threshold: 0.1, // 10% of the element should be visible to trigger the counter
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start the counter once the element is visible
          let startTime = null;
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const current = Math.min(
              start + (progress / duration) * (end - start),
              end
            );
            setCount(Math.floor(current));

            if (current < end) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      });
    };

    observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up observer when component unmounts
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [start, end, duration]);

  return (
    <div ref={ref}>
      <h2>{count}</h2>
    </div>
  );
};

export default ScrollCounter;
