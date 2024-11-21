import { Instagram, Music2 } from "lucide-react";
import { motion } from "framer-motion";

export const SocialLinks = () => {
  return (
    <div className="flex gap-4 justify-center mt-4">
      <motion.a
        href="https://instagram.com/BarDriveATL"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="text-cream hover:text-neonPink transition-colors"
      >
        <Instagram size={24} />
      </motion.a>
      <motion.a
        href="https://tiktok.com/@bardriveatl"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="text-cream hover:text-neonBlue transition-colors"
      >
        <Music2 size={24} />
      </motion.a>
    </div>
  );
};