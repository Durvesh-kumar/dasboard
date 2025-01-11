"use client";
import { ThemeProvider } from "next-themes";
import React, { createContext, useEffect, useState, useContext } from "react";

const UserContext = createContext([]);
export default function ThemesProviders({
  children,
}: {
  children: React.ReactNode;
}) {

  const [client, setClient] = React.useState(false);

  useEffect(()=>{
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
export function useAppContext (){
  return useContext(UserContext)
}