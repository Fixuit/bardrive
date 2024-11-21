import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import Airtable from "airtable";

export const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    eventType: "",
    duration: "",
    details: "",
  });

  const eventTypes = [
    "Birthday Party",
    "Cocktail Party",
    "Wedding",
    "Corporate Event",
    "Theme Party",
    "Just Because",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const base = new Airtable({
        apiKey: import.meta.env.VITE_AIRTABLE_API_KEY
      }).base(import.meta.env.VITE_AIRTABLE_BASE_ID);

      await base('Quote Requests').create([
        {
          fields: {
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone,
            "Event Date": formData.date,
            "Number of Guests": parseInt(formData.guests),
            "Event Type": formData.eventType,
            "Duration (hours)": parseInt(formData.duration),
            "Event Details": formData.details,
            "Submission Date": new Date().toISOString()
          }
        }
      ]);

      toast({
        title: "Quote Request Received",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        guests: "",
        eventType: "",
        duration: "",
        details: "",
      });
    } catch (error) {
      toast({
        title: "Error Submitting Form",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
      console.error('Error submitting to Airtable:', error);
    }
  };

  return (
    <section id="quote-form" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center neon-gradient">
            Reserve your date and Get a Quote
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-charcoal border border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-charcoal border border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-charcoal border border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Event Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-charcoal border border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Type of Event</label>
                <select
                  required
                  value={formData.eventType}
                  onChange={(e) =>
                    setFormData({ ...formData, eventType: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-charcoal border border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <option value="">Select Event Type</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Duration (hours)</label>
                <input
                  type="number"
                  required
                  min="2"
                  value={formData.duration}
                  onChange={(e) =>
                    setFormData({ ...formData, duration: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-charcoal border border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Number of Guests</label>
                <input
                  type="number"
                  required
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-charcoal border border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Tell us about your Event
              </label>
              <textarea
                required
                value={formData.details}
                onChange={(e) =>
                  setFormData({ ...formData, details: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-charcoal border border-gold focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-neonPink to-neonBlue text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Submit Request
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};