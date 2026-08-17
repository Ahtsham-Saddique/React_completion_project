import { useEffect, useRef } from "react";
import "./CustomCursor.css";

/**
 * CustomCursor — a single white-bordered circle filled with a red dot.
 * Only enabled for fine (mouse) pointers and when the user does NOT prefer
 * reduced motion.
 */
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    ).matches;

    if (!finePointer || !reduceMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let visible = false;
    let rafId = null;

    const EASE = 0.16;

    const positionRing = () => {
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    };

    // Show the cursor immediately at the center of the screen so it is
    // visible even before the first mouse movement.
    dot.style.opacity = "1";
    ring.style.opacity = "1";
    positionRing();

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        visible = true;
        ringX = mouseX;
        ringY = mouseY;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        if (!rafId) rafId = requestAnimationFrame(tick);
      }
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onEnter = () => {
      // When the mouse re-enters the document, show the cursor again.
      visible = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    const onOver = (e) => {
      const target = e.target;
      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], [class*="Button"], .navItem, [data-hover]'
      );
      ring.classList.toggle("customCursor--active", !!interactive);
    };

    const onDown = () => ring.classList.add("customCursor--pressed");
    const onUp = () => ring.classList.remove("customCursor--pressed");

    function tick() {
      ringX += (mouseX - ringX) * EASE;
      ringY += (mouseY - ringY) * EASE;

      // Only the ring moves in JS; the red dot is nested inside the ring and
      // stays centered, so the white circle + red dot move as one unit.
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

      if (visible) rafId = requestAnimationFrame(tick);
      else rafId = null;
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp); 

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="customCursor" aria-hidden="true">
      <div ref={ringRef} className="customCursor__ring">
        <div ref={dotRef} className="customCursor__dot"></div>
      </div>
    </div>
  );
}

export default CustomCursor;

