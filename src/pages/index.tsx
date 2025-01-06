import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Weather } from "@/components/weather/weather";
import { Todo } from "@/components/to-do/to-do";
import { Events } from "@/components/events/events";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <div className="text-center m-8 flex">
    <Weather />
    <Todo />

  </div>
      <div className="m-8">

      <Events />
      </div>
      </>
  );
}
