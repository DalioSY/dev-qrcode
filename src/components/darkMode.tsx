'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function DarkMode() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Sun
            onClick={() => setTheme('dark')}
            className=' size-5 scale-100 transition-all dark:scale-0'
          />
          <Moon
            onClick={() => setTheme('light')}
            className='absolute size-5 scale-0 transition-all dark:scale-100'
          />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
