import { useEffect, useRef, useState, useLayoutEffect } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "motion/react";
import "./RollingGallery.css";

export default function TestimonialSlider({
  items = [],
  autoplay = false,
  pauseOnHover = false,
}: {
  items?: Array<{ quote: string; name: string; city?: string }>;
  autoplay: boolean;
  pauseOnHover: boolean;
}) {
  // Fallback items when none provided
  const defaultItems =
    items.length > 0
      ? items
      : [
          {
            quote: "Bridgeforth saved our family weeks of paperwork.",
            name: "A. Smith",
            city: "Atlanta",
          },
          {
            quote: "Clear guidance and steady follow-up.",
            name: "J. Lee",
            city: "McDonough",
          },
          {
            quote: "They coordinated everything and reduced stress.",
            name: "M. Patel",
            city: "Savannah",
          },
        ];

        const isClient = typeof window !== "undefined";
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    isClient?window.innerWidth <= 640:false
  );

  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = defaultItems.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const dragFactor = 0.05;
  const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleDrag = (_: any, info: { offset: { x: number } }) => {
    //  rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: any, info: { velocity: { x: number } }) => {
    //  controls.start({
    //    rotateY: rotation.get() + info.velocity.x * dragFactor,
    //    transition: { type: 'spring', stiffness: 60, damping: 20, mass: 0.1, ease: 'easeOut' }
    //  });
  };

  const transform = useTransform(rotation, (value) => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 2, ease: "linear" },
        });
        rotation.set(rotation.get() - 360 / faceCount);
      }, 2000);

      return () => clearInterval(autoplayRef.current);
    }
  }, [autoplay, rotation, controls, faceCount]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Measure the maximum height of child cards and set container height
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const items = Array.from(
        el.querySelectorAll<HTMLElement>(".gallery-item > div")
      );
      let max = 0;
      items.forEach((it) => {
        const h = it.offsetHeight;
        if (h > max) max = h;
      });
      if (max > 0) {
        el.style.height = `${max + 48}px`; // buffer for padding
      } else {
        el.style.height = "";
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [defaultItems, isScreenSizeSm]);

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      controls.start({
        rotateY: rotation.get() - 360 / faceCount,
        transition: { duration: 2, ease: "linear" },
      });
      rotation.set(rotation.get() - 360 / faceCount);

      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 2, ease: "linear" },
        });
        rotation.set(rotation.get() - 360 / faceCount);
      }, 2000);
    }
  };

  return (
    <div className="gallery-container py-10">
      {/* <div className="gallery-gradient gallery-gradient-left"></div>
       <div className="gallery-gradient gallery-gradient-right"></div> */}
      <div className="gallery-content" ref={containerRef}>
        <motion.div
          // drag="x"
          className="gallery-track"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          // onDrag={handleDrag}
          // onDragEnd={handleDragEnd}
          animate={controls}
        >
          {defaultItems.map((s, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
            >
              <div className="max-w-[70vw] sm:min-w-[260px] sm:max-w-sm flex-shrink-0 text-left border border-gray-100 rounded-lg p-6 shadow-sm bg-white">
                <blockquote className="text-gray-800 text-base italic">
                  “{s.quote}”
                </blockquote>
                <div className="mt-3 text-xs text-gray-600">
                  — {s.name}
                  {s.city ? `, ${s.city}` : ""}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
