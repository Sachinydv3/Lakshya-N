'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting suitable subject streams and degree programs based on a student's interests and strengths.
 *
 * - aiCourseSuggestion - A function that takes student quiz results as input and returns a list of suggested courses.
 * - AiCourseSuggestionInput - The input type for the aiCourseSuggestion function.
 * - AiCourseSuggestionOutput - The return type for the aiCourseSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiCourseSuggestionInputSchema = z.object({
  interests: z
    .string()
    .describe('The student interests based on the quiz.'),
  strengths: z.string().describe('The student strengths based on the quiz.'),
});
export type AiCourseSuggestionInput = z.infer<typeof AiCourseSuggestionInputSchema>;

const AiCourseSuggestionOutputSchema = z.object({
  suggestedCourses: z
    .string()
    .describe('A list of suggested courses based on the student interests and strengths.'),
});
export type AiCourseSuggestionOutput = z.infer<typeof AiCourseSuggestionOutputSchema>;

export async function aiCourseSuggestion(input: AiCourseSuggestionInput): Promise<AiCourseSuggestionOutput> {
  return aiCourseSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiCourseSuggestionPrompt',
  input: {schema: AiCourseSuggestionInputSchema},
  output: {schema: AiCourseSuggestionOutputSchema},
  prompt: `You are an expert career counselor. Based on the student's interests and strengths, suggest suitable subject streams and degree programs.

  Interests: {{{interests}}}
  Strengths: {{{strengths}}}

  Suggest courses that align with their interests and strengths, and explain why each course is a good fit. List at least 3 suitable courses.
  Format the output as a JSON object with a single 'suggestedCourses' field containing a string with the courses.`,
});

const aiCourseSuggestionFlow = ai.defineFlow(
  {
    name: 'aiCourseSuggestionFlow',
    inputSchema: AiCourseSuggestionInputSchema,
    outputSchema: AiCourseSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
