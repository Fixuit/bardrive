import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToQuoteForm = () => {
    const quoteForm = document.querySelector('#quote-form');
    quoteForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-neon-pulse">
            Elevate Your Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-shadow">
            Professional bartending services for your most memorable occasions
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToQuoteForm}
            className="bg-gradient-to-r from-neonPink to-neonBlue text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Book Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};