"use client"
import React, { createContext, useEffect, useState, useContext } from "react";
import TopNevBar from "../layouts/nevBars/TopNevBar";
import axios from "axios";
import ToastProvider from "../layouts/TostProvider";
const UserContext = createContext([]);

export default function layout({ children }: { children: React.ReactNode }) {
  const [getData, setGetData] = useState([]);
  const [client, setClient] = useState(false);

  const fetchData = async () => {
    const data = await axios.get(
      'https://script.google.com/macros/s/AKfycbzqqOWkL5TG198YMJteYzVFjzvuI6tSOgyYN2pfgBxUjMkAHeadn4N_XPxvRZs-kqXF/exec'
    );
    setGetData(await data.data);
  };

  useEffect(() => {
    fetchData();
    setClient(true);
  }, []);

  return (
    <div>
      {client && (
        <div>
          <ToastProvider/>
          <TopNevBar />
          <UserContext.Provider value={getData}>
            {children}
          </UserContext.Provider>
        </div>
      )}
    </div>
  );
}

export function useAppContext (){
  return useContext(UserContext)
}