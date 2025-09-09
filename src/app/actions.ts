'use server';

import { z } from 'zod';
import { analyzeContactFormMessage } from '@/ai/flows/analyze-contact-form-messages';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères.' }),
  email: z.string().email({ message: 'Veuillez saisir une adresse e-mail valide.' }),
  message: z.string().min(10, { message: 'Le message doit contenir au moins 10 caractères.' }),
});

export type ContactFormState = {
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
    success: boolean;
};

export async function submitContactForm(formData: FormData): Promise<ContactFormState> {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = contactFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Veuillez corriger les erreurs dans le formulaire.',
      success: false,
    };
  }
  
  const { name, email, message } = validatedFields.data;

  try {
    const analysis = await analyzeContactFormMessage({ message });
    
    // The analysis can be logged, sent to a CRM, or used for other internal business logic.
    console.log('Contact Form Analysis:', { 
      name, 
      email, 
      isHighValue: analysis.isHighValue,
      sentiment: analysis.sentiment,
      reason: analysis.reason
    });

    return {
      success: true,
      message: 'Merci pour votre message ! Nous vous recontacterons bientôt.',
    };
  } catch (error) {
    console.error('Error in AI analysis or form submission:', error);
    return {
      success: false,
      message: 'Une erreur inattendue est survenue. Veuillez réessayer plus tard.',
    };
  }
}
