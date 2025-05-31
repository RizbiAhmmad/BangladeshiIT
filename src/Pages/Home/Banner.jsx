import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

        {/* Left: Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-black leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome to{" "}
            <span className="text-green-600">Bangla</span>
            <span className="text-red-600">deshi</span>
            <span className="text-green-600"> IT</span>
          </motion.h1>

          <motion.p
            className="text-green-600 text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            স্বপ্নের পথে,{" "}
            <span className="text-red-600 text-2xl">প্রযুক্তির সঙ্গী</span>
          </motion.p>

          <motion.a
            href="#contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get Started
          </motion.a>
        </motion.div>

        {/* Right: Video Frame */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="rounded-2xl shadow-lg overflow-hidden border-4 border-green-600">
            <video
              src=""
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
