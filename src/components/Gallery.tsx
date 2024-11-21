import { motion } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80",
    title: "Corporate Event",
  },
  {
    url: "https://images.unsplash.com/photo-1575037614876-c38a4d44f5ed?q=80",
    title: "Wedding Reception",
  },
  {
    url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80",
    title: "Private Party",
  },
  {
    url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80",
    title: "Cocktail Workshop",
  },
];

export const Gallery = () => {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Our Events
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.url}
                  alt={image.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-white text-shadow">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};