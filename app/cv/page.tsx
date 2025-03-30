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
    <div className="flex flex-col items-center bg-zinc-500 divide-solid divide-y-1">
      <main className="w-[210mm] h-[297mm] bg-white">
        <div className="grid grid-cols-[2fr_1fr] h-full">
          <article className="bg-zinc-100">
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
                    className="flex gap-2 items-center my-2"
                  >
                    <div id="place-icon">
                      <MapPinIcon strokeWidth={1} size={20} />
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
            <section id="experience" className="p-3">
              <h2 className="text-md">WORK EXPERIENCE</h2>
              {/* <Separator /> */}
              <div id="experience-card" className="my-2">
                <div
                  id="exp-heading"
                  className="grid grid-cols-[2fr_1fr] items-baseline"
                >
                  <div>
                    <p className="font-medium text-lg leading-5">
                      Smart In Media AG
                    </p>
                    <p>Software Engineer</p>
                  </div>
                  <div className="text-end">
                    <p>Since 07. 2020</p>
                    <div className="flex items-center gap-0.5 justify-end">
                      {/* <MapPinIcon size={14} strokeWidth={1.5} /> */}
                      <p className="text-sm">Cologne, Germany</p>
                    </div>
                  </div>
                </div>
                <div id="exp-content" className="text-gray-600 text-sm my-2">
                  <ul className="list-disc ps-4 text-justify">
                    <li>
                      Re-planned and implemented database models to achieve
                      scalability and better adaptation to modification
                    </li>
                    <li>
                      Revamped the User experience to decrease information loss
                      and increased robustness
                    </li>
                    <li>
                      Introduced typescript in the solution for better
                      maintainability, scalability, and error prevention
                    </li>
                    <li>
                      Implemented containerization-based deployment in CI/CD
                      pipeline to increase availability in case of accidents
                    </li>
                    <li>
                      First-hand engagement with the client, understanding the
                      requirements, proposing solutions, planning the timeline
                      in Agile-based software development
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </article>
          <aside className="bg-white">
            <header className="h-32 p-3 bg-zinc-100">
              <div className="grid grid-cols-[1fr_7fr] grid-rows-4 gap-0.5 items-center">
                <div>
                  <MailIcon size={19} strokeWidth={1} />
                </div>
                <div>
                  <Link href={"mailto: mshoaibkhan91@gmail.com"}>
                    mshoaibkhan91@gmail.com
                  </Link>
                </div>
                <div>
                  <PhoneIcon strokeWidth={1} size={19} />
                </div>
                <div>+49 176 6720 7947</div>
                <div>
                  <GithubIcon strokeWidth={1} size={19} />
                </div>
                <div>
                  <Link href={"https://github.com/m5khan"}>
                    github.com/m5khan
                  </Link>
                </div>
                <div>
                  <Linkedin strokeWidth={1} size={19} />
                </div>
                <div>
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
