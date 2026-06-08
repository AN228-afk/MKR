import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

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
    console.log("Inquiry submitted:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <CheckCircle className="w-12 h-12 text-green-500" />
        <div>
          <h3 className="text-lg font-semibold text-foreground">Thank you! We'll contact you soon.</h3>
          <p className="text-muted-foreground text-sm mt-1">Our team will call or WhatsApp you within 2 hours to schedule your free site visit.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {title && <h2 className="text-xl font-bold text-foreground mb-6">{title}</h2>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-4 ${compact ? "" : ""}`}>
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
                  <Input placeholder="+91 98765 43210" type="tel" data-testid="input-phone" {...field} />
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
            className="w-full py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Get Free Quote & Site Visit
          </button>
          <p className="text-xs text-muted-foreground text-center">Free site visit. No obligation. Response within 2 hours.</p>
        </form>
      </Form>
    </div>
  );
}
