import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Building2, Lightbulb } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-student-1');
const featureQuizImage = PlaceHolderImages.find((img) => img.id === 'feature-quiz');
const featureCoursesImage = PlaceHolderImages.find((img) => img.id === 'feature-courses');
const featureCollegesImage = PlaceHolderImages.find((img) => img.id === 'feature-colleges');

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full bg-card py-20 md:py-32">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
              Find Your Future with EduNav
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              Confused about your career path after school? EduNav is your
              personal guide to discovering the right courses, colleges, and
              career opportunities that match your passion.
            </p>
            <Link href="/quiz">
              <Button size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Take the Aptitude Quiz <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="flex justify-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={400}
                className="rounded-xl object-cover shadow-2xl"
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
              How EduNav Helps You Succeed
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We provide the tools and insights you need to make confident
              decisions about your education and future career.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Lightbulb className="h-10 w-10 text-accent" />}
              title="Discover Your Strengths"
              description="Our AI-powered quiz helps you understand your interests and suggests personalized course and career paths."
              link="/quiz"
              linkText="Start Quiz"
              image={featureQuizImage}
            />
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-accent" />}
              title="Explore Career Paths"
              description="Visually map out where different degrees can lead you, from jobs to higher studies."
              link="/courses"
              linkText="Explore Courses"
              image={featureCoursesImage}
            />
            <FeatureCard
              icon={<Building2 className="h-10 w-10 text-accent" />}
              title="Find Nearby Colleges"
              description="Get detailed information on government colleges near you, including courses, fees, and facilities."
              link="/colleges"
              linkText="Find Colleges"
              image={featureCollegesImage}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  link,
  linkText,
  image
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
  image?: { imageUrl: string, description: string, imageHint: string };
}) {
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
      <CardHeader className="flex flex-row items-start gap-4 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
          {icon}
        </div>
        <div>
          <CardTitle className="font-headline text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <div className="p-6 pt-0">
        <Link href={link}>
          <Button variant="outline" className="w-full">
            {linkText} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
