import { motion } from "framer-motion";
import { ArrowRight, Compass, BookOpen, Users } from "lucide-react";
import ParticleField from "./ParticleField";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      <ParticleField />

      {/* Sanskrit pattern overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Sanskrit Shlok */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="sanskrit-text text-primary/70 text-lg md:text-xl mb-6"
        >
          "विद्या ददाति विनयं, विनयाद् याति पात्रताम्"
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="gradient-text">Anveshika</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto"
        >
          Exploring Ancient Wisdom to Engineer the Future
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A student-driven innovation ecosystem integrating Indian Knowledge Systems
          with Artificial Intelligence, Data Science, and Modern Engineering.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#iks-domains"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 4.5 }}
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium bg-primary text-primary-foreground overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsla(30,90%,55%,0.4)] will-change-transform"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Compass className="w-5 h-5" />
              Explore Knowledge
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 4.7, delay: 0.2 }}
            className="group inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium glass-card text-foreground hover:border-primary/30 transition-all duration-300 will-change-transform"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Discover IKS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 4.9, delay: 0.4 }}
            className="group inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 will-change-transform"
          >
            <span className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Join Anveshika
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 rounded-full bg-primary/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
