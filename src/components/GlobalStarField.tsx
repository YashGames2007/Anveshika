import { useEffect, useState } from "react";
import { useTheme } from "@/theme/ThemeContext";
import ParticleFieldLocal from "@/components/ParticleFieldLocal";

const GlobalStarField = () => {
  const { isDark } = useTheme();
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Stars should show on all pages, but use different palettes for light/dark.
  const starColors = isDark
    ? ["#ffffff", "#ffd57f"]
    : ["#5a121d", "#d0bda4"];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {size.width > 0 && size.height > 0 && (
        <ParticleFieldLocal
          width={size.width}
          height={size.height}
          particleCount={70}
          starColors={starColors}
          starWeights={[0.7, 0.3]}
        />
      )}
    </div>
  );
};

export default GlobalStarField;
