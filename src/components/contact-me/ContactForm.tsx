
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import SafeIcon from '@/components/common/SafeIcon';
import { toast, Toaster } from 'sonner';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - in production, this would send to a backend service
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Create mailto link as fallback
      const mailtoLink = `mailto: haladaoudi22@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // In a real application, you would send this to a backend API
      // For now, we'll show success and open mailto
      setIsSuccess(true);
      toast.success('Message sent successfully! Opening your email client...');

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Open mailto link
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 1000);

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground font-medium">
            Full Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`bg-background border-border text-foreground placeholder:text-muted-foreground focus:ring-accent ${
              errors.name ? 'border-destructive' : ''
            }`}
          />
          {errors.name && (
            <p className="text-sm text-destructive flex items-center gap-1">
              <SafeIcon name="AlertCircle" size={14} />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-medium">
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`bg-background border-border text-foreground placeholder:text-muted-foreground focus:ring-accent ${
              errors.email ? 'border-destructive' : ''
            }`}
          />
          {errors.email && (
            <p className="text-sm text-destructive flex items-center gap-1">
              <SafeIcon name="AlertCircle" size={14} />
              {errors.email}
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-foreground font-medium">
            Subject *
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="What is this about?"
            value={formData.subject}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`bg-background border-border text-foreground placeholder:text-muted-foreground focus:ring-accent ${
              errors.subject ? 'border-destructive' : ''
            }`}
          />
          {errors.subject && (
            <p className="text-sm text-destructive flex items-center gap-1">
              <SafeIcon name="AlertCircle" size={14} />
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground font-medium">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message here... (minimum 10 characters)"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            rows={6}
            className={`bg-background border-border text-foreground placeholder:text-muted-foreground focus:ring-accent resize-none ${
              errors.message ? 'border-destructive' : ''
            }`}
          />
          {errors.message && (
            <p className="text-sm text-destructive flex items-center gap-1">
              <SafeIcon name="AlertCircle" size={14} />
              {errors.message}
            </p>
          )}
          <p className="text-xs text-muted-foreground">
            {formData.message.length} characters
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="w-full bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-background font-semibold py-6 text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </div>
            ) : isSuccess ? (
              <div className="flex items-center gap-2">
                <SafeIcon name="CheckCircle" size={20} />
                Message Sent!
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <SafeIcon name="Send" size={20} />
                Send Message
              </div>
            )}
          </Button>
        </div>

        {/* Required fields note */}
        <p className="text-xs text-muted-foreground text-center">
          * Required fields
        </p>
      </form>
    </>
  );
}
