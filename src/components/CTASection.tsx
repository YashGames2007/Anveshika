import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles, FlaskConical, Lightbulb } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Glow BG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="sanskrit-text text-primary/60 text-base mb-4"
        >
          "योगः कर्मसु कौशलम्" — Excellence in action is Yoga
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-6xl font-bold mb-6"
        >
          Join the <span className="gradient-text">Exploration</span> of Knowledge
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
        >
          Be part of a movement that bridges ancient wisdom with modern innovation.
          Together, we explore, research, and build the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#" className="group px-8 py-4 rounded-xl font-medium bg-primary text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsla(30,90%,55%,0.4)] animate-glow-pulse">
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Join Anveshika
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a href="#" className="group px-8 py-4 rounded-xl font-medium glass-card text-foreground hover:border-primary/30 transition-all duration-300">
            <span className="flex items-center gap-2">
              <FlaskConical className="w-5 h-5" />
              Start Research
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a href="#" className="group px-8 py-4 rounded-xl font-medium border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300">
            <span className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Explore Innovation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
