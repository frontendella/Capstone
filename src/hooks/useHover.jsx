import { useState, useEffect, useRef } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    let refValue = null;
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);

    if (ref.current) {
      refValue = ref.current;
    }

    return () => {
      refValue.removeEventListener("mouseenter", enter);
      refValue.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [hovered, ref];
}

export default useHover;
