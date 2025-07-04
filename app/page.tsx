"use client";

import CurrentCity from "@/components/organism/CurrentCity";
import Forecast from "@/components/organism/Forecast";
import MainApp from "@/components/organism/MainApp";
import Sidebar from "@/components/organism/Sidebar"
import TempreatureChart from "@/components/organism/TempreatureChart";
import { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";


export default function Home() {
  const error = useSelector((state: RootState) => state.weather.error);

  return (
    <main className="min-h-screen bg-[#0C1320] flex p-5 gap-5">
      <Sidebar />
      <div className="w-[70%] flex flex-col gap-5">
        <MainApp />
        {error ? null :
          <>
            <TempreatureChart />
            <Forecast />
          </>}

      </div>
      <aside className="grow bg-secondary rounded-xl">
        <CurrentCity />
      </aside>
    </main>
  );
}
