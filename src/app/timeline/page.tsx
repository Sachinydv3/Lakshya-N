import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { timelineEvents } from '@/lib/data';
import { CalendarDays } from 'lucide-react';
import { format } from 'date-fns';

export default function TimelinePage() {
  return (
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
        <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border"></div>

        {timelineEvents.map((event, index) => (
          <div
            key={event.title}
            className="relative mb-8 flex w-full items-center"
          >
            <div
              className={`w-1/2 ${
                index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'
              }`}
            >
              {index % 2 !== 0 && (
                <TimelineCard
                  title={event.title}
                  description={event.description}
                  date={event.date}
                />
              )}
            </div>

            <div className="absolute left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <CalendarDays className="h-4 w-4" />
            </div>

            <div
              className={`w-1/2 ${
                index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'
              }`}
            >
              {index % 2 === 0 && (
                <TimelineCard
                  title={event.title}
                  description={event.description}
                  date={event.date}
                />
              )}
            </div>
          </div>
        ))}
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
        <CardTitle className="font-headline text-lg">{title}</CardTitle>
        <p className="text-sm text-accent font-semibold">
          {format(new Date(date), 'MMMM d, yyyy')}
        </p>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
