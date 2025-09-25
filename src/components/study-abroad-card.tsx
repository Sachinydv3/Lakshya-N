'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StudyAbroadCountry } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, BookOpen, DollarSign, FileText } from 'lucide-react';

export function StudyAbroadCard({ country }: { country: StudyAbroadCountry }) {
  const image = PlaceHolderImages.find((p) => p.id === country.image);

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl">
      {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
          data-ai-hint={image.imageHint}
        />
      )}
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{country.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <p className="text-muted-foreground">{country.description}</p>
        <div className="space-y-3 pt-2">
            {country.facts.map(fact => {
                let Icon;
                switch(fact.title) {
                    case 'Popular Courses': Icon = BookOpen; break;
                    case 'Avg. Tuition Fee': Icon = DollarSign; break;
                    case 'Top Exams': Icon = FileText; break;
                    default: Icon = ArrowRight;
                }
                return (
                    <div key={fact.title} className="flex items-start">
                        <Icon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <div className="ml-3">
                            <h4 className="font-semibold">{fact.title}</h4>
                            <p className="text-sm text-muted-foreground">{fact.value}</p>
                        </div>
                    </div>
                )
            })}
        </div>
      </CardContent>
      <div className="p-6 pt-0">
        <Button variant="outline" className="w-full">
          Explore {country.name} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
