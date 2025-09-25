'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap, UserCircle, Menu, Bot } from 'lucide-react';
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
  { href: '/study-abroad', label: 'Study Abroad' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/chatbot', label: 'AI Chatbot', icon: <Bot className="mr-2 h-5 w-5"/>, isPrimary: true },
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

        <nav className="hidden items-center gap-4 md:flex">
          {navItems.filter(item => !item.isPrimary).map((item) => (
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

        <div className="flex items-center gap-2">
          {navItems.filter(item => item.isPrimary).map(item => (
            <Link key={item.href} href={item.href} className='hidden md:flex'>
              <Button variant="default" className='bg-accent text-accent-foreground hover:bg-accent/90'>
                {item.icon}
                {item.label}
              </Button>
            </Link>
          ))}
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
                        'text-lg font-medium transition-colors hover:text-primary flex items-center',
                        pathname === item.href
                          ? 'text-primary'
                          : 'text-muted-foreground',
                        item.isPrimary && 'text-accent-foreground bg-accent p-2 rounded-md'
                      )}
                    >
                      {item.icon}
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
