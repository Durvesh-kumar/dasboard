"use client";
import { getDashboardPageData } from "@/lib/actions";
import { ThemeProvider } from "next-themes";
import React, { createContext, useEffect, useState, useContext } from "react";

const UserContext = createContext([]);
export default function ThemesProviders({
  children,
}: {
  children: React.ReactNode;
}) {

  const [store, setStore] = useState([]);
  const [client, setClient] = React.useState(false);



  useEffect(()=>{
    setClient(true);
  }, []);

  return (
    <div>
      {client && (
          <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem>
            <UserContext.Provider value={store}>
            {children}
            </UserContext.Provider>
          </ThemeProvider>
      )}
    </div>
  );
}
export function useAppContext (){
  return useContext(UserContext)
}