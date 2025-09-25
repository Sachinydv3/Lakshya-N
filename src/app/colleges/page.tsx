'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { colleges as allColleges } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Building2, Home, Library, Wifi, Award, Star, CheckCircle, MapPin, Download, FileText, GitCompare, Zap } from 'lucide-react';

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
    <div className="bg-muted/20">
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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-6">
            {filteredColleges.map((college) => {
              const image = collegeImages[college.image];
              return (
                <Card key={college.id} className="overflow-hidden transition-shadow hover:shadow-xl flex flex-col md:flex-row">
                  {college.featured && (
                      <div className="absolute top-0 left-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-br-lg z-10 flex items-center gap-1">
                        <Zap className="h-3 w-3" />
                        FEATURED
                      </div>
                    )}
                  <div className="md:w-1/3 relative">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={300}
                        height={400}
                        className="w-full h-48 md:h-full object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                     <Badge variant="destructive" className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm">
                      <Award className="h-3 w-3 mr-1" />
                      {college.ranking}
                    </Badge>
                  </div>
                  <div className="md:w-2/3 flex flex-col">
                    <CardContent className="p-4 space-y-3 flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-headline text-xl font-bold">{college.name}</h3>
                          <div className="flex items-center text-muted-foreground text-sm gap-2 pt-1">
                            <MapPin className="h-4 w-4" />
                            <span>{college.city}, {college.state}</span>
                          </div>
                        </div>
                         <div className="text-right flex-shrink-0 pl-2">
                            <div className="flex items-center gap-1 font-bold text-lg text-amber-500">
                                <Star className="h-5 w-5 fill-current" />
                                <span>{college.rating}/10</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{college.reviews} reviews</p>
                        </div>
                      </div>

                       <div className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
                          {college.approvals.map(approval => (
                             <div key={approval} className="flex items-center gap-1 bg-secondary px-2 py-1 rounded-md">
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                <span>{approval} Approved</span>
                             </div>
                          ))}
                      </div>

                      <p className="text-sm text-muted-foreground pt-2">{college.description}</p>
                      
                       <div>
                          <h4 className="font-semibold text-sm mb-2">Popular Programs & Fees</h4>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                            {college.programs.map((program) => (
                              <div key={program.name} className="flex justify-between items-center border-b border-dashed py-1">
                                <span className="text-muted-foreground">{program.name}</span>
                                <span className="font-semibold text-primary">{program.fee}/year</span>
                              </div>
                            ))}
                          </div>
                        </div>

                    </CardContent>
                    <div className="p-4 bg-slate-500/5 flex gap-2">
                        <Button variant="default" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                            <Download className="mr-2 h-4 w-4" /> Apply Now
                        </Button>
                        <Button variant="outline" className="w-full">
                           <FileText className="mr-2 h-4 w-4" /> Brochure
                        </Button>
                        <Button variant="ghost" className="w-full">
                           <GitCompare className="mr-2 h-4 w-4" /> Compare
                        </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
             {filteredColleges.length === 0 && (
                <div className="text-center col-span-full py-16">
                    <p className="text-muted-foreground text-lg">No colleges found matching your search.</p>
                </div>
              )}
          </div>
          <aside className="lg:col-span-4 space-y-6">
              <Card>
                  <CardContent className="p-4">
                      <h3 className="font-headline text-lg font-semibold mb-3">Filters</h3>
                      {/* Placeholder for filters */}
                      <p className="text-sm text-muted-foreground">Filters coming soon...</p>
                  </CardContent>
              </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}