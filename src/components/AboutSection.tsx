import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Cpu, Compass } from "lucide-react";
import { useTheme } from "@/theme/ThemeContext";
import ParticleFieldLocal from "@/components/ParticleFieldLocal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const highlights = [
  {
    icon: BookOpen,
    title: "Ancient Wisdom",
    description: "Studying the vast ocean of Indian Knowledge Systems across millennia.",
  },
  {
    icon: Cpu,
    title: "Modern Engineering",
    description: "Applying cutting-edge technology to reimagine and extend traditional frameworks.",
  },
  {
    icon: Compass,
    title: "Future Innovation",
    description: "Designing sustainable, human‑centric solutions for tomorrow’s challenges.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const { isDark } = useTheme();
  const [logoModalOpen, setLogoModalOpen] = useState(false);

  const logoSrc = isDark ? "/logo-dark.jpeg" : "/logo-light.jpeg";

  return (
    <section id="about" className="py-24 relative pattern-overlay">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-3 text-xs md:text-sm tracking-[0.3em] uppercase text-center text-muted-foreground"
        >
          About Us
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-12"
        >
          What is <span className="gradient-text">Anveshika</span>?
        </motion.h2>

        {/* Main content: text + logo medallion */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.05fr)] gap-10 items-center mb-16">
          {/* Text + vision card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-7"
          >
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              <span className="font-display tracking-wide text-foreground">
                ANVESHIKA
              </span>{" "}
              — derived from Sanskrit — embodies the spirit of curiosity, inquiry, exploration, and discovery. These
              ideals represent India&apos;s ancient tradition of knowledge seeking through observation and experience.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Our club focuses on integrating modern engineering with ancient Indian Knowledge Systems. We promote
              research, innovation, technical projects, cultural awareness, field studies, and technology‑driven social
              solutions.
            </p>

            {/* Vision quote card */}
            <div className="mt-6">
              <div className="rounded-2xl bg-deep-blue-dark/95 text-white px-7 py-7 shadow-lg shadow-black/40 border border-saffron/30 max-w-xl">
                <p className="text-base md:text-lg leading-relaxed font-display">
                  To build a student‑driven innovation ecosystem that integrates Indian knowledge systems with modern
                  technology to develop sustainable, ethical, and socially impactful advances.
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-gold-light/80">
                  Our Vision
                </p>
              </div>
            </div>
          </motion.div>

          {/* Logo medallion with optional star field (dark mode) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] flex items-center justify-center">
              {/* Stars in motion around logo (dark mode only) */}
              {isDark && (
                <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                  <ParticleFieldLocal
                    width={320}
                    height={320}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    particleCount={45}
                  />
                </div>
              )}

              {/* Soft outer glow ring */}
              <div className="absolute inset-0 translate-y-4 blur-2xl rounded-full bg-gradient-to-tr from-saffron/35 via-gold/30 to-deep-blue/40 opacity-70 pointer-events-none" />

              {/* Clickable medallion with up-down motion */}
              <motion.button
                type="button"
                onClick={() => setLogoModalOpen(true)}
                className="relative rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
                aria-label="Open Anveshika logo and welcome"
              >
                <motion.div
                  className="glass-card rounded-full p-4 md:p-5 shadow-[0_18px_45px_rgba(0,0,0,0.45)] border border-saffron/40"
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 5,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={logoSrc}
                      alt="Anveshika emblem"
                      className="w-[92%] h-[92%] object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.3)]"
                    />
                  </div>
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom highlight cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-7"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="glass-card rounded-2xl px-5 py-6 md:px-6 md:py-7 text-center border border-border/60 shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Welcome popup when logo is clicked */}
      <Dialog open={logoModalOpen} onOpenChange={setLogoModalOpen}>
        <DialogContent className="max-w-md overflow-hidden border-primary/30 bg-card shadow-2xl sm:rounded-2xl p-0 gap-0">
          <div className="relative bg-gradient-to-b from-card to-muted/30 pt-8 pb-8 px-6 text-center">
            <div className="mx-auto mb-6 w-36 h-36 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-primary/40 shadow-lg">
              <img
                src={logoSrc}
                alt="Anveshika"
                className="w-[90%] h-[90%] object-contain"
              />
            </div>
            <p className="sanskrit-text text-primary/80 text-sm mb-2">
              अन्वेषिका — जिज्ञासा, अन्वेषण, अभियान
            </p>
            <DialogTitle className="font-display text-2xl md:text-3xl font-bold gradient-text">
              Welcome to Anveshika
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-2 text-sm md:text-base font-display">
              Where ancient wisdom meets modern innovation.
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutSection;
