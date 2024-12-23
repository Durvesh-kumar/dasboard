"use client"
import React, { useEffect, useState } from "react";
import Cards from "./_components/Cards";
import { Chart } from "./_components/Chart";
import { useAppContext } from "../layout";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getT1Orders } from "@/lib/actions";

export default function page() {

  const[getData, setGetData] = useState<T1OrderType[]>();

  const fetchData = async()=>{
    const data = await getT1Orders();
    setGetData(data)
  }

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div className="flex items-center container mx-auto flex-col gap-10 flex-1 py-10 m-5">
      <Cards />
      <div className="flex items-center justify-end gap-6">
        <Link href={"orders/delivered"} className={buttonVariants({})}>
           DELIVERED T-15 TO T-45
        </Link>
        <Link href={"orders/delivered"} className={buttonVariants({})}>
           All Orders
        </Link>
      </div>
      <Chart getData={getData} />
    </div>
  );
}
