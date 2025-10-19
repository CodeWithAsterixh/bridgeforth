import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useAnimation, useTransform } from 'motion/react';

export default function TestimonialSlider({ items = [], autoplay = false, pauseOnHover = false }: { items?: Array<{ quote: string; name: string; city?: string }>, autoplay:boolean, pauseOnHover:boolean }) {
  // Fallback items when none provided
  const defaultItems =items.length>0?items: [
    { quote: 'Bridgeforth saved our family weeks of paperwork.', name: 'A. Smith', city: 'Atlanta' },
    { quote: 'Clear guidance and steady follow-up.', name: 'J. Lee', city: 'McDonough' },
    { quote: 'They coordinated everything and reduced stress.', name: 'M. Patel', city: 'Savannah' },
  ];

   const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);
 
   const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
   const faceCount = defaultItems.length;
   const faceWidth = (cylinderWidth / faceCount) * 1.5;
   const dragFactor = 0.05;
   const radius = cylinderWidth / (2 * Math.PI);
 
   const rotation = useMotionValue(0);
   const controls = useAnimation();
   const autoplayRef = useRef<any>(null);
 
   const handleDrag = (_: any, info: { offset: { x: number; }; }) => {
     rotation.set(rotation.get() + info.offset.x * dragFactor);
   };
 
   const handleDragEnd = (_: any, info: { velocity: { x: number; }; }) => {
     controls.start({
       rotateY: rotation.get() + info.velocity.x * dragFactor,
       transition: { type: 'spring', stiffness: 60, damping: 20, mass: 0.1, ease: 'easeOut' }
     });
   };
 
   const transform = useTransform(rotation, value => {
     return `rotate3d(0, 1, 0, ${value}deg)`;
   });
 
   useEffect(() => {
     if (autoplay) {
       autoplayRef.current = setInterval(() => {
         controls.start({
           rotateY: rotation.get() - 360 / faceCount,
           transition: { duration: 2, ease: 'linear' }
         });
         rotation.set(rotation.get() - 360 / faceCount);
       }, 2000);
 
       return () => clearInterval(autoplayRef.current);
     }
   }, [autoplay, rotation, controls, faceCount]);
 
   useEffect(() => {
     const handleResize = () => {
       setIsScreenSizeSm(window.innerWidth <= 640);
     };
 
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
   }, []);
 
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
         transition: { duration: 2, ease: 'linear' }
       });
       rotation.set(rotation.get() - 360 / faceCount);
 
       autoplayRef.current = setInterval(() => {
         controls.start({
           rotateY: rotation.get() - 360 / faceCount,
           transition: { duration: 2, ease: 'linear' }
         });
         rotation.set(rotation.get() - 360 / faceCount);
       }, 2000);
     }
   };
 
   return (
     <div className="gallery-container">
       <div className="gallery-gradient gallery-gradient-left"></div>
       <div className="gallery-gradient gallery-gradient-right"></div>
       <div className="gallery-content">
         <motion.div
           drag="x"
           className="gallery-track"
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
           style={{
             transform: transform,
             rotateY: rotation,
             width: cylinderWidth,
             transformStyle: 'preserve-3d'
           }}
           onDrag={handleDrag}
           onDragEnd={handleDragEnd}
           animate={controls}
         >
           {defaultItems.map((s, i) => (
             <div
              key={i}
              className="gallery-item"
              style={{ width: `${faceWidth}px`, transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)` }}
            >
              <div className="min-w-[260px] max-w-sm flex-shrink-0 text-left border border-gray-100 rounded-lg p-6 shadow-sm bg-white">
                <blockquote className="text-gray-800 text-lg italic">“{s.quote}”</blockquote>
                <div className="mt-3 text-sm text-gray-600">— {s.name}{s.city ? `, ${s.city}` : ''}</div>
              </div>
            </div>
           ))}
         </motion.div>
       </div>
     </div>
   );
}
