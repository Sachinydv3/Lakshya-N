import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { timelineEvents } from '@/lib/data';
import { CalendarDays } from 'lucide-react';
import { format } from 'date-fns';

export default function TimelinePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-12 px-4 md:px-6 md:py-20">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Admissions Timeline
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
            Stay updated with important dates for admissions, scholarships, and
            entrance exams. Never miss a deadline again.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-0 w-0.5 h-full bg-border -ml-px"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center z-10">
                  <CalendarDays className="h-4 w-4" />
                </div>
                <div className="ml-8 w-full">
                  <TimelineCard
                    title={event.title}
                    description={event.description}
                    date={event.date}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const TimelineCard = ({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: string;
}) => {
  return (
    <Card className="text-left">
      <CardHeader>
        <p className="text-sm text-accent font-semibold">
          {format(new Date(date), 'MMMM d, yyyy')}
        </p>
        <CardTitle className="font-headline text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
