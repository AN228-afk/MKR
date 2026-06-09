import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

const WA_NUMBER = "917780114547";

const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  location: z.string().min(2, "Please enter your location"),
  message: z.string().optional(),
});

type InquiryForm = z.infer<typeof inquirySchema>;

const serviceOptions = [
  "Balcony Invisible Grills",
  "Window Invisible Grills",
  "Staircase Invisible Grills",
  "Terrace Invisible Grills",
  "Villa Invisible Grills",
  "Child Safety Grills",
  "School Safety Grills",
  "Other / Not Sure",
];

interface InquiryFormProps {
  title?: string;
  compact?: boolean;
}

export function InquiryForm({ title = "Get a Free Quote", compact = false }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", phone: "", email: "", service: "", location: "", message: "" },
  });

  function onSubmit(data: InquiryForm) {
    const lines = [
      `Hi, I need invisible grills in Bangalore.`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Service: ${data.service}`,
      `Location: ${data.location}`,
      data.message ? `Details: ${data.message}` : null,
      `Please share a free quote.`,
    ]
      .filter(Boolean)
      .join("\n");
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <CheckCircle className="w-12 h-12 text-green-500" />
        <div>
          <h3 className="text-lg font-semibold text-foreground">Opening WhatsApp…</h3>
          <p className="text-muted-foreground text-sm mt-1">Your enquiry details have been sent to our team on WhatsApp. We'll respond within 2 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {title && <h2 className="text-xl font-bold text-foreground mb-6">{title}</h2>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" data-testid="input-name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+91 77801 14547" type="tel" data-testid="input-phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" type="email" data-testid="input-email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="location" render={({ field }) => (
              <FormItem>
                <FormLabel>Your Location / Area</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Whitefield, Koramangala" data-testid="input-location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="service" render={({ field }) => (
            <FormItem>
              <FormLabel>Service Required</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger data-testid="select-service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {serviceOptions.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />

          {!compact && (
            <FormField control={form.control} name="message" render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Details (optional)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tell us about your project — floor, area size, any special requirements..." rows={3} data-testid="textarea-message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          )}

          <button
            type="submit"
            data-testid="button-submit-inquiry"
            className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors text-sm flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.11 1.522 5.836L.044 23.956l6.284-1.648A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.74-.52-5.29-1.43l-.38-.22-3.73.98.99-3.64-.25-.39A9.946 9.946 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Send via WhatsApp
          </button>
          <p className="text-xs text-muted-foreground text-center">Free site visit. No obligation. Response within 2 hours.</p>
        </form>
      </Form>
    </div>
  );
}
