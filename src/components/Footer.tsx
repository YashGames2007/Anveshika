import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { useTheme } from "@/theme/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();
  const logoSrc = isDark ? "/logo-dark.jpeg" : "/logo-light.jpeg";

  return (
    <footer className="py-16 border-t border-border pattern-overlay">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoSrc}
                alt="Anveshika"
                className="h-10 w-10 rounded-full object-cover border border-primary/30"
              />
              <span className="font-display text-xl font-bold gradient-text">Anveshika</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-4">
              IKS Engineering Integration Club — Bridging ancient Indian Knowledge Systems with modern engineering
              and technology at DYPCOE.
            </p>
            <p className="sanskrit-text text-primary/50 text-sm">
              "अन्वेषिका — जिज्ञासा, अन्वेषण, अभियान"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "IKS Domains", "Innovation", "Activities", "Impact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Anveshika — DYPCOE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
