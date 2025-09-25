'use client';

import { Globe } from 'lucide-react';
import { studyAbroadCountries } from '@/lib/data';
import { StudyAbroadCard } from '@/components/study-abroad-card';

export default function StudyAbroadPage() {
  return (
    <div className="bg-muted/20">
      <div className="container mx-auto py-12 px-4 md:px-6 md:py-20">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <Globe className="h-12 w-12 text-primary" />
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Explore Study Abroad Destinations
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
            Discover top countries for international students. Learn about popular courses, costs, and admission requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {studyAbroadCountries.map((country) => (
            <StudyAbroadCard key={country.name} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
}
