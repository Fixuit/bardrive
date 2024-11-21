import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const posts = [
  {
    url: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80",
    title: "Mixing up something special for tonight's corporate event! 🍸 #BarDrive",
    likes: 234,
    date: "2h ago"
  },
  {
    url: "https://images.unsplash.com/photo-1575037614876-c38a4d44f5ed?q=80",
    title: "Wedding season is in full swing! Congratulations to the happy couple 💑 #WeddingBar",
    likes: 456,
    date: "1d ago"
  },
  {
    url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80",
    title: "Private party vibes are always the best! 🎉 #PrivateEvent",
    likes: 789,
    date: "2d ago"
  },
  {
    url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80",
    title: "Learn the art of mixology with our workshop series! 📚 #CocktailClass",
    likes: 321,
    date: "3d ago"
  },
];

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
            href="https://instagram.com/bardrive"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neonPink hover:text-neonBlue transition-colors"
          >
            <Instagram size={20} />
            <span>Follow us on Instagram</span>
          </a>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-black rounded-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.url}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <p className="text-cream mb-2">{post.title}</p>
                <div className="flex justify-between items-center text-sm text-cream/60">
                  <span>{post.likes} likes</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};