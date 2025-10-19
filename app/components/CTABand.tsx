import { motion } from "motion/react";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden py-16 text-white">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-500 to-indigo-600" />

      {/* Blurred blobs */}
      <motion.div
        className="absolute top-0 left-1/3 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-25"
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-8 left-1/5 w-60 h-60 bg-blue-300 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Start with clarity today.
        </h3>
        <p className="mt-2 text-sm md:text-base text-blue-100">
          Book a free 15-minute call and get a clear next step.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-white text-blue-700 rounded-md font-medium shadow-md hover:shadow-lg transition">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}
