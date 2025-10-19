import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export default function TestimonialSlider({ items }: { items: Array<{ quote: string; name: string; city?: string }> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const offsetWidth = containerRef.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden bg-white p-6 rounded shadow">
      <motion.div
        ref={containerRef}
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: [0, -width - 50, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      >
        {items.concat(items).map((item, i) => (
          <div
            key={i}
            className="min-w-[300px] max-w-sm flex-shrink-0 text-center border border-gray-100 rounded-lg p-4 shadow-sm bg-white"
          >
            <blockquote className="text-gray-800 text-lg italic">“{item.quote}”</blockquote>
            <div className="mt-3 text-sm text-gray-600">— {item.name}{item.city ? `, ${item.city}` : ''}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
