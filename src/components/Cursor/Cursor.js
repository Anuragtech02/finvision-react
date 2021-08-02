import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      <h3>WE VISUALIZE FINANCE</h3>
    </div>
  );
};

export default Cursor;
