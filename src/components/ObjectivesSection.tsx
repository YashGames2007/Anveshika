import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Rocket, Wrench, Heart } from "lucide-react";

const objectives = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    items: ["IKS research integration", "Interdisciplinary curriculum", "Publication & patents", "Faculty collaboration"],
  },
  {
    icon: Rocket,
    title: "Tech Innovation",
    items: ["AI-powered IKS tools", "IoT heritage systems", "Open-source projects", "Innovation challenges"],
  },
  {
    icon: Wrench,
    title: "Skill Development",
    items: ["Hands-on workshops", "Research methodology", "Technical training", "Leadership building"],
  },
  {
    icon: Heart,
    title: "Social Impact",
    items: ["Community outreach", "Heritage preservation", "Rural technology access", "Cultural documentation"],
  },
];

const ObjectivesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="objectives" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Our <span className="gradient-text">Objectives</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((obj, i) => (
            <motion.div
              key={obj.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="glass-card rounded-2xl p-6 hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <obj.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-4 text-foreground">{obj.title}</h3>
              <ul className="space-y-2">
                {obj.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
