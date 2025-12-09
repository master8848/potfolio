"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({
  children,
  themes,
  ...props
}: ThemeProviderProps & { themes: string[] }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      themes={themes}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
