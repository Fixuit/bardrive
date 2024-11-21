import { motion } from "framer-motion";
import { FormField } from "./form/FormField";
import { useQuoteForm } from "./form/useQuoteForm";
import { eventTypes } from "./form/EventTypes";

export const QuoteForm = () => {
  const { formData, setFormData, handleSubmit } = useQuoteForm();

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
              <FormField label="Name">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-charcoal border border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </FormField>
              <FormField label="Email">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-charcoal border border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </FormField>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="Phone Number">
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-charcoal border border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </FormField>
              <FormField label="Event Date">
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-charcoal border border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </FormField>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="Type of Event">
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
              </FormField>
              <FormField label="Duration (hours)">
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
              </FormField>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="Number of Guests">
                <input
                  type="number"
                  required
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-charcoal border border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </FormField>
            </div>
            <FormField label="Tell us about your Event">
              <textarea
                required
                value={formData.details}
                onChange={(e) =>
                  setFormData({ ...formData, details: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-charcoal border border-gold focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </FormField>
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