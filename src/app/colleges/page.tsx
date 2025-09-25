'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { colleges as allColleges } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Building2, Home, Library, MapPin, Wifi } from 'lucide-react';

const facilityIcons: { [key: string]: React.ReactNode } = {
  Hostel: <Home className="h-4 w-4" />,
  Library: <Library className="h-4 w-4" />,
  'Wi-Fi': <Wifi className="h-4 w-4" />,
};

export default function CollegesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredColleges = useMemo(() => {
    return allColleges.filter(
      (college) =>
        college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const collegeImages = useMemo(() => {
    return Object.fromEntries(
        PlaceHolderImages.filter(p => p.id.startsWith('college-')).map(p => [p.id, p])
    );
  }, []);

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 md:py-20">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
         <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
          Find Your College
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
          Search for government colleges in your area. Find information on
          available programs, facilities, and more.
        </p>
      </div>

      <div className="mb-8 max-w-2xl mx-auto">
        <Input
          type="text"
          placeholder="Search colleges by name or city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full text-base"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredColleges.map((college) => {
          const image = collegeImages[college.image];
          return (
          <Card key={college.id} className="overflow-hidden transition-shadow hover:shadow-xl">
            {image && (
               <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  data-ai-hint={image.imageHint}
                />
            )}
            <CardHeader>
              <CardTitle className="font-headline text-xl">{college.name}</CardTitle>
              <div className="flex items-center text-muted-foreground text-sm gap-2 pt-1">
                <MapPin className="h-4 w-4" />
                <span>{college.city}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Programs Offered</h4>
                <div className="flex flex-wrap gap-2">
                  {college.programs.map((program) => (
                    <Badge key={program} variant="secondary">
                      {program}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Facilities</h4>
                <div className="flex flex-wrap gap-4">
                  {college.facilities.map((facility) => (
                    <div key={facility} className="flex items-center gap-2 text-muted-foreground text-sm">
                      {facilityIcons[facility] || <Building2 className="h-4 w-4" />}
                      <span>{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )})}
      </div>
       {filteredColleges.length === 0 && (
          <div className="text-center col-span-full py-16">
              <p className="text-muted-foreground text-lg">No colleges found matching your search.</p>
          </div>
        )}
    </div>
  );
}
