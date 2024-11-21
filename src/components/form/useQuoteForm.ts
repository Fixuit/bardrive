import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Airtable from "airtable";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  guests: string;
  eventType: string;
  duration: string;
  details: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  guests: "",
  eventType: "",
  duration: "",
  details: "",
};

export const useQuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const base = new Airtable({
      apiKey: "pat9h8Fg7liLyUekd.b6b6181e4af0af30b8c26f69722fdfe5e31485acb1bbf94ffbaa33186162aa41"
    }).base("app0iL7tPqio3InM8");
    
    try {
      // Create a record object with the correct structure
      const record = {
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
      };

      await base('Quote Requests').create([record]);

      toast({
        title: "Quote Request Received",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData(initialFormData);
    } catch (error) {
      toast({
        title: "Error Submitting Form",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
      console.error('Error submitting to Airtable:', error);
    }
  };

  return {
    formData,
    setFormData,
    handleSubmit,
  };
};