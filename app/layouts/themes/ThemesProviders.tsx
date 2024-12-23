"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

export default function ThemesProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client, setClient] = React.useState(false);
  React.useEffect(()=>{
    setClient(true);
  }, []);
  return (
    <div>
      {client && (
        <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem>
          {children}
        </ThemeProvider>
      )}
    </div>
  );
}
