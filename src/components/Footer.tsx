import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { useTheme } from "@/theme/ThemeContext";
import { useWelcomeDialog } from "@/components/WelcomeDialog";

const Footer = () => {
  const { isDark } = useTheme();
  const { openDialog } = useWelcomeDialog();
  const logoSrc = isDark ? "/logo-dark.jpeg" : "/logo-light.jpeg";

  return (
    <footer className="py-16 bg-[hsl(348,40%,20%)] text-[hsl(38,80%,92%)]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <button
              type="button"
              onClick={openDialog}
              className="flex items-center gap-3 mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              <img
                src={logoSrc}
                alt="Anveshika"
                className="h-12 w-12 rounded-full object-cover border border-[hsla(30,90%,55%,0.45)]"
              />
              <span className="font-display text-2xl md:text-3xl font-bold tracking-wide">
                Anveshika
              </span>
            </button>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-4">
              IKS Engineering Integration Club — Bridging ancient Indian Knowledge Systems with modern engineering
              and technology at DYPCOE.
            </p>
            <p className="sanskrit-text text-[hsla(30,90%,55%,0.7)] text-base">
              "अन्वेषिका — जिज्ञासा, अन्वेषण, अभियान"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base md:text-lg font-semibold text-[hsl(38,80%,90%)] mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "IKS Domains", "Innovation", "Activities", "Impact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-base text-[hsla(38,80%,90%,0.9)] hover:text-[hsla(30,90%,55%,0.9)] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-base md:text-lg font-semibold text-[hsl(38,80%,90%)] mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-[hsla(30,90%,55%,0.9)] hover:text-[hsla(30,90%,55%,1)] hover:border-[hsla(30,90%,55%,0.9)] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 text-center">
          <p className="text-sm text-[hsla(38,80%,90%,0.85)]">
            © {new Date().getFullYear()} Anveshika — DYPCOE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
