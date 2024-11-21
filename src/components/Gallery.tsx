import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export const Gallery = () => {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">What we've been up to</h2>
          <a
            href="https://instagram.com/BarDriveATL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neonPink hover:text-neonBlue transition-colors"
          >
            <Instagram size={20} />
            <span>Follow us on Instagram</span>
          </a>
        </motion.div>
        <div className="w-full aspect-square max-w-3xl mx-auto">
          <iframe
            src="https://www.instagram.com/BarDriveATL/embed"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};