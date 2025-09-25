import { QuizForm } from '@/components/quiz-form';
import { Lightbulb } from 'lucide-react';

export default function QuizPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6 md:py-20">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <div className="rounded-full bg-accent/10 p-4">
            <Lightbulb className="h-12 w-12 text-accent" />
        </div>
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
          Discover Your Path
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          Answer a few simple questions to get personalized course and career
          suggestions from our AI-powered guide.
        </p>
      </div>
      <QuizForm />
    </div>
  );
}
