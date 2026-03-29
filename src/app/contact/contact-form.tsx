'use client';

import { useState, useRef, FormEvent } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';
import { submitContactForm } from '@/app/actions/submit-contact-form';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits.'),
  preferredContactMethod: z.string().min(1, 'Please select a preferred contact method.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type FormErrors = {
  name?: string[];
  email?: string[];
  phoneNumber?: string[];
  preferredContactMethod?: string[];
  message?: string[];
} | null;

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<FormErrors>(null);
  const [preferredContactMethod, setPreferredContactMethod] = useState('');
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setErrors(null);

    const formData = new FormData(e.currentTarget);
    const validatedFields = contactSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
      preferredContactMethod: preferredContactMethod,
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      setErrors(validatedFields.error.flatten().fieldErrors);
      setPending(false);
      return;
    }

    try {
      const { name, email, phoneNumber, preferredContactMethod, message } = validatedFields.data;

      // Call Server Action
      const result = await submitContactForm({ name, email, phoneNumber, preferredContactMethod, message });

      if (result.success) {
        toast({
          title: 'Success!',
          description: result.message,
        });
        formRef.current?.reset();
        setPreferredContactMethod('');
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.message,
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
      });
    }

    setPending(false);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" placeholder="Jane Doe" />
        {errors?.name && (
          <p className="text-sm font-medium text-destructive">
            {errors.name[0]}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="jane.doe@example.com"
        />
         {errors?.email && (
          <p className="text-sm font-medium text-destructive">
            {errors.email[0]}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          placeholder="(123) 456-7890"
        />
         {errors?.phoneNumber && (
          <p className="text-sm font-medium text-destructive">
            {errors.phoneNumber[0]}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="preferredContactMethod">Preferred Contact Method</Label>
        <Select name="preferredContactMethod" value={preferredContactMethod} onValueChange={setPreferredContactMethod}>
          <SelectTrigger>
            <SelectValue placeholder="Select your preference" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Email">Email</SelectItem>
            <SelectItem value="Phone">Phone</SelectItem>
            <SelectItem value="Text">Text</SelectItem>
            <SelectItem value="No Preference">No Preference</SelectItem>
          </SelectContent>
        </Select>
         {errors?.preferredContactMethod && (
          <p className="text-sm font-medium text-destructive">
            {errors.preferredContactMethod[0]}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me a little bit about what you're looking to achieve..."
          className="min-h-[120px]"
        />
         {errors?.message && (
          <p className="text-sm font-medium text-destructive">
            {errors.message[0]}
          </p>
        )}
      </div>
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}
