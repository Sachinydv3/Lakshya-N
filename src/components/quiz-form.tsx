'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  aiCourseSuggestion,
  AiCourseSuggestionOutput,
} from '@/ai/flows/ai-course-suggestion';
import { Loader2 } from 'lucide-react';
import { Progress } from './ui/progress';

const interests = [
  'Solving complex problems',
  'Creative writing and storytelling',
  'Working with numbers and data',
  'Understanding how things work (Science)',
  'Art, music, or design',
  'Business and entrepreneurship',
  'Helping and interacting with people',
  'Technology and computers',
] as const;

const strengths = [
  'Logical and analytical thinking',
  'Creativity and imagination',
  'Leadership and management',
  'Empathy and communication',
  'Hands-on building and crafting',
] as const;

const schema = z.object({
  interests: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one interest.',
  }),
  strengths: z.enum(strengths),
  hobbies: z.string().min(10, 'Please tell us a bit more about your hobbies.'),
});

type FormData = z.infer<typeof schema>;

export function QuizForm() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AiCourseSuggestionOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      interests: [],
      hobbies: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setResult(null);

    const input = {
      interests: data.interests.join(', ') + '. Hobbies include: ' + data.hobbies,
      strengths: data.strengths,
    };

    try {
      const suggestion = await aiCourseSuggestion(input);
      setResult(suggestion);
    } catch (error) {
      console.error('AI course suggestion failed:', error);
      toast({
        title: 'Error',
        description: 'Failed to get suggestions. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
      setStep(4);
    }
  };

  const nextStep = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await form.trigger('interests');
    } else if (step === 2) {
      isValid = await form.trigger('strengths');
    }
    if (isValid) {
      setStep((s) => s + 1);
    }
  };

  const prevStep = () => {
    setStep((s) => s - 1);
  };
  
  const progress = (step-1)/3 * 100;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-headline">Aptitude Quiz</CardTitle>
        <CardDescription>
          {step < 4 ? `Step ${step} of 3` : 'Your Results'}
        </CardDescription>
        {step < 4 && <Progress value={progress} className="mt-2" />}
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            {step === 1 && (
              <FormField
                control={form.control}
                name="interests"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-lg">
                      Which subjects or activities do you enjoy most?
                    </FormLabel>
                    <div className="space-y-2">
                      {interests.map((interest) => (
                        <FormField
                          key={interest}
                          control={form.control}
                          name="interests"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={interest}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(interest)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            interest,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== interest
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {interest}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {step === 2 && (
              <FormField
                control={form.control}
                name="strengths"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-lg">
                      What is your key strength?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        {strengths.map((strength) => (
                          <FormItem
                            key={strength}
                            className="flex items-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <RadioGroupItem value={strength} />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {strength}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {step === 3 && (
              <FormField
                control={form.control}
                name="hobbies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">
                      What are your hobbies and passions outside of school?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., playing guitar, coding personal projects, reading fiction novels..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {step === 4 && (
              <div>
                {isLoading && (
                  <div className="flex flex-col items-center justify-center space-y-4 h-40">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    <p className="text-muted-foreground">
                      Our AI is analyzing your answers...
                    </p>
                  </div>
                )}
                {result && (
                  <div className="space-y-4">
                    <h3 className="font-headline text-2xl font-bold">
                      Personalized Suggestions
                    </h3>
                    <div className="text-sm text-foreground whitespace-pre-wrap font-body">
                      {result.suggestedCourses.split('\n').map((line, index) => (
                          <p key={index} className="mb-2">{line}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 && step < 4 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
            )}
            {step < 3 && (
              <Button type="button" onClick={nextStep} className="ml-auto">
                Next
              </Button>
            )}
            {step === 3 && (
              <Button type="submit" disabled={isLoading} className="ml-auto">
                Get Suggestions
              </Button>
            )}
             {step === 4 && (
              <Button type="button" onClick={() => { setStep(1); setResult(null); form.reset(); }} className="ml-auto">
                Start Over
              </Button>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
