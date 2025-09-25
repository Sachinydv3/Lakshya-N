import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { courses } from '@/lib/data';
import { Briefcase, ChevronRight, GraduationCap, Target } from 'lucide-react';

export default function CoursesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-12 px-4 md:px-6 md:py-20">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Course & Career Explorer
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
            Discover the opportunities that each degree unlocks. See the career
            paths, options for higher studies, and government exams you can
            pursue.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.name} className="flex flex-col">
              <CardHeader className="flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <course.icon className="h-7 w-7" />
                </div>
                <CardTitle className="font-headline text-xl">{course.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-muted-foreground">{course.description}</p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="career">
                    <AccordionTrigger>
                        <div className="flex items-center gap-2">
                           <Briefcase className="h-4 w-4" /> Career Paths
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-4">
                        {course.careerPaths.map((path) => (
                          <li key={path} className="flex items-start">
                            <ChevronRight className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                            <span className="ml-2">{path}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="studies">
                    <AccordionTrigger>
                         <div className="flex items-center gap-2">
                           <GraduationCap className="h-4 w-4" /> Higher Studies
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-4">
                        {course.higherStudies.map((study) => (
                          <li key={study} className="flex items-start">
                             <ChevronRight className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                             <span className="ml-2">{study}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="exams">
                    <AccordionTrigger>
                        <div className="flex items-center gap-2">
                           <Target className="h-4 w-4" /> Government Exams
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-4">
                        {course.govtExams.map((exam) => (
                          <li key={exam} className="flex items-start">
                             <ChevronRight className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                             <span className="ml-2">{exam}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
