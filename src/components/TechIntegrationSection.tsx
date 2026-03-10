import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Droplets, BarChart3, Cog, Shield } from "lucide-react";

const integrations = [
  { icon: Brain, title: "AI + Ayurveda", desc: "Leveraging artificial intelligence for personalized Ayurvedic diagnosis and treatment recommendations." },
  { icon: Droplets, title: "IoT + Water Conservation", desc: "Smart sensor networks inspired by ancient water harvesting systems like stepwells and tanks." },
  { icon: BarChart3, title: "Data Science + Agriculture", desc: "Applying data analytics to traditional farming practices for sustainable crop management." },
  { icon: Cog, title: "Robotics + Ancient Mechanics", desc: "Studying ancient mechanical devices to inspire modern robotic engineering solutions." },
  { icon: Shield, title: "Blockchain + Knowledge Preservation", desc: "Decentralized systems for preserving and authenticating traditional knowledge manuscripts." },
];

const TechIntegrationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech-integration" className="py-24 relative bg-background text-foreground" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4"
        >
          IKS × <span className="gradient-text">Technology</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-16"
        >
          Where ancient systems meet modern innovation
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="glass-card rounded-2xl p-8 hover-lift group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(123,31,37,0.45)]">
                <item.icon className="w-7 h-7 text-primary transition-colors group-hover:text-[hsl(348,40%,20%)]" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechIntegrationSection;
