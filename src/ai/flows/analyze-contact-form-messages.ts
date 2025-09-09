'use server';

/**
 * @fileOverview Analyzes contact form messages to identify potential high-value clients.
 *
 * - analyzeContactFormMessage - A function that analyzes the contact form message.
 * - AnalyzeContactFormMessageInput - The input type for the analyzeContactFormMessage function.
 * - AnalyzeContactFormMessageOutput - The return type for the analyzeContactFormMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeContactFormMessageInputSchema = z.object({
  message: z.string().describe('The message submitted through the contact form.'),
});
export type AnalyzeContactFormMessageInput = z.infer<typeof AnalyzeContactFormMessageInputSchema>;

const AnalyzeContactFormMessageOutputSchema = z.object({
  isHighValue: z.boolean().describe('Whether the message indicates a high-value client.'),
  sentiment: z.string().describe('The sentiment of the message (positive, negative, neutral).'),
  reason: z.string().describe('The reason for the high-value determination or sentiment.'),
});
export type AnalyzeContactFormMessageOutput = z.infer<typeof AnalyzeContactFormMessageOutputSchema>;

export async function analyzeContactFormMessage(
  input: AnalyzeContactFormMessageInput
): Promise<AnalyzeContactFormMessageOutput> {
  return analyzeContactFormMessageFlow(input);
}

const analyzeContactFormMessagePrompt = ai.definePrompt({
  name: 'analyzeContactFormMessagePrompt',
  input: {schema: AnalyzeContactFormMessageInputSchema},
  output: {schema: AnalyzeContactFormMessageOutputSchema},
  prompt: `You are an AI assistant tasked with analyzing contact form messages to identify potential high-value clients.

  Analyze the following message and determine if it indicates a high-value client. Consider factors such as the scope of the request, the potential budget, and the client's seriousness.

  Also, determine the sentiment of the message.

  Message: {{{message}}}

  Your response should include:
  - isHighValue: true if the message indicates a high-value client, false otherwise.
  - sentiment: The sentiment of the message (positive, negative, or neutral).
  - reason: A brief explanation for the high-value determination or the identified sentiment.
  `,
});

const analyzeContactFormMessageFlow = ai.defineFlow(
  {
    name: 'analyzeContactFormMessageFlow',
    inputSchema: AnalyzeContactFormMessageInputSchema,
    outputSchema: AnalyzeContactFormMessageOutputSchema,
  },
  async input => {
    const {output} = await analyzeContactFormMessagePrompt(input);
    return output!;
  }
);
