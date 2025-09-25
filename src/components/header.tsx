'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap, UserCircle, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import React from 'react';

const navItems = [
  { href: '/quiz', label: 'Aptitude Quiz' },
  { href: '/courses', label: 'Courses' },
  { href: '/colleges', label: 'Colleges' },
  { href: '/timeline', label: 'Timeline' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">
            Lakshya
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
           <Button variant="ghost" size="icon">
              <UserCircle className="h-6 w-6" />
              <span className="sr-only">User Profile</span>
           </Button>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                   <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsMobileMenuOpen(false)}>
                    <GraduationCap className="h-7 w-7 text-primary" />
                    <SheetTitle className="font-headline text-2xl font-bold text-primary">
                      Lakshya
                    </SheetTitle>
                  </Link>
                </SheetHeader>
                <div className="mt-6 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname === item.href
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
