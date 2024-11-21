import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { QuoteForm } from "@/components/QuoteForm";
import { SocialLinks } from "@/components/SocialLinks";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full py-8 bg-black"
      >
        <div className="container mx-auto px-4">
          <img
            src="/lovable-uploads/61c1a51b-9449-41b4-a20c-bc96938e97b5.png"
            alt="BarDrive Logo"
            className="h-24 md:h-32 mx-auto"
          />
          <SocialLinks />
        </div>
      </motion.div>
      
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
      
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-12 bg-black"
      >
        <div className="container mx-auto px-4">
          <img
            src="/lovable-uploads/ee5a3944-e285-4857-ace9-29d490135270.png"
            alt="BarDrive Full Logo"
            className="max-w-md mx-auto"
          />
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;