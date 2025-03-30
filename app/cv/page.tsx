import {
  GithubIcon,
  Linkedin,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CV() {
  return (
    <div className="flex flex-col items-center bg-zinc-100 divide-solid divide-y-1">
      <main className="w-[210mm] h-[297mm] bg-white">
        <div className="grid grid-cols-[2fr_1fr] h-full">
          <article className="bg-rose-100">
            <header className="h-32 bg-white p-3">
              <div className="flex gap-5 items-center">
                <div>
                  <Image
                    className="rounded-full border-gray-200 border-2"
                    width={100}
                    height={100}
                    src={"/cv-pic1.png"}
                    alt="avatar"
                  />
                </div>
                <div>
                  <p className="text-2xl font-normal">M SHOAIB KHAN</p>
                  <div
                    id="address-container"
                    className="flex gap-2 items-center my-1"
                  >
                    <div id="place-icon">
                      <MapPinIcon className="text-gray-500" />
                    </div>
                    <div id="address" className="">
                      <p className="text-sm leading-4">
                        Albert-Einstein-Str. 10
                      </p>
                      <p className="text-sm leading-5">
                        50226, Frechen, Deutschland
                      </p>
                    </div>
                  </div>
                  <p className="text-xs">
                    Fullstack-Softwareentwickler mit mehr als 8 Jahren Erfahrung
                  </p>
                </div>
              </div>
            </header>
          </article>
          <aside className="bg-rose-200">
            <header className="h-32 bg-blue-500 p-3">
              <div className="grid grid-cols-[1fr_7fr] grid-rows-4 gap-1">
                <div className="bg-orange-300">
                  <MailIcon />
                </div>
                <div className="bg-orange-300">
                  <Link href={"mailto: mshoaibkhan91@gmail.com"}>
                    mshoaibkhan91@gmail.com
                  </Link>
                </div>
                <div className="bg-orange-300">
                  <PhoneIcon />
                </div>
                <div className="bg-orange-300">+49 176 6720 7947</div>
                <div className="bg-orange-300">
                  <GithubIcon />
                </div>
                <div className="bg-orange-300">
                  <Link href={"https://github.com/m5khan"}>
                    github.com/m5khan
                  </Link>
                </div>
                <div className="bg-orange-300">
                  <Linkedin />
                </div>
                <div className="bg-orange-300">
                  <Link href={"https://linkedin.com/in/m5khan"}>
                    linkedin.com/in/m5khan
                  </Link>
                </div>
              </div>
            </header>
          </aside>
        </div>
      </main>
      <main className="w-[210mm] h-[297mm] bg-white"></main>
    </div>
  );
}
