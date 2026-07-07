"use client";

import { TooltipProvider } from "@/components/animate-ui/components/animate/tooltip";
import { ThemeProvider } from "next-themes";
import posthog from 'posthog-js'; 
import { PostHogProvider } from '@posthog/react';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_TOKEN as string, { 
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST as string, 
  }); 
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </ThemeProvider>
    </PostHogProvider>
  );
}
