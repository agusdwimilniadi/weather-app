"use client";

import CurrentCity from "@/components/organism/CurrentCity";
import Forecast from "@/components/organism/Forecast";
import MainApp from "@/components/organism/MainApp";
import Sidebar from "@/components/organism/Sidebar"
import TempreatureChart from "@/components/organism/TempreatureChart";
import { RootState } from "@/lib/redux/store";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { useSelector } from "react-redux";


export default function Home() {
  const error = useSelector((state: RootState) => state.weather.error);

  return (
    <main className="min-h-screen bg-[#0C1320] flex flex-col lg:flex-row p-5 gap-5">
      <div className="lg:hidden flex flex-col gap-5">
        <TiWeatherWindyCloudy className="mx-auto" size={30} />
        <p className="text-center text-sm">Weather App Indonesia</p>
      </div>
      <Sidebar />
      <div className=" w-full lg:w-[70%] flex flex-col gap-5">
        <MainApp />
        {error ? null :
          <>
            <Forecast />
            <TempreatureChart />
          </>}
      </div>
      <aside className="grow bg-secondary rounded-xl">
        <CurrentCity />
      </aside>
    </main>
  );
}
