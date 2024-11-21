import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { QuoteForm } from "@/components/QuoteForm";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      <Hero />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Crafting Unforgettable Experiences
            </h2>
            <p className="text-lg text-cream/80 mb-12">
              Our expert mixologists bring sophistication and style to your events,
              creating custom cocktail experiences that will leave your guests
              impressed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Corporate Events",
                "Private Parties",
                "Wedding Receptions",
              ].map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-lg glass hover-scale"
                >
                  <h3 className="text-xl font-semibold mb-4">{service}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      <Gallery />
      <QuoteForm />
    </div>
  );
};

export default Index;