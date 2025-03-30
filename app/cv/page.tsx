import { ExperienceSection } from "@/components/cv/experience-section";
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
              <ExperienceSection
                company="Smart In Media AG"
                title="Software Engineer"
                date="Since 06. 2020"
                location="Cologne, Germany"
                description={[
                  "Re-planned and implemented database models to achieve scalability and better adaptation to modification",
                  "Revamped the User experience to decrease information loss and increased robustness",
                  "Introduced typescript in the solution for better maintainability, scalability, and error prevention",
                  "Implemented containerization-based deployment in CI/CD pipeline to increase availability in case of accidents",
                  "First-hand engagement with the client, understanding the requirements, proposing solutions, planning the timeline in Agile-based software development",
                ]}
              />
              <ExperienceSection
                company="Colwiz Ltd"
                title="Software Engineer"
                date="Since 07. 2013 - 09. 2016"
                location="Karachi, Pakistan"
                description={[
                  "Boost speed in the generation of research author profiles by extending the Apache Nutch plugin; creating a data processing pipeline",
                  "Develop, took ownership, and release Google Chrome's citations plugin on the Google web store",
                  "Assisted backend team by helping to implement scheduling tasks on Java-based microservice",
                  "Scaled and improved text-search performance by deploying Apache SolrCloud on Linux servers in distributed environment",
                  "Revamped obsolete flash-based application to the newer web technology which resulted in faster performance and better distribution",
                ]}
              />
              <ExperienceSection
                company="Censhare AG"
                title="Working Student Software Engineer"
                date="Since 08. 2018 - 03. 2020"
                location="Munich, Germany"
                description={[
                  "designed and developed electron based code and documentation-sharing solution to support different teams within the organization for better coordination and collaboration",
                  "Supporting the solution's development team in achieving the requirements of the client by working on product customization",
                ]}
              />
              <ExperienceSection
                company="top.legal"
                title="Working Student Software Engineer"
                date="Since 02. 2018 - 08. 2018"
                location="Munich, Germany"
                description={[
                  "Increased accessibility and assurance for the customer onboarding process to easily publish their proposals by implementing graph-like forms using React",
                  "Worked closely with the CTO and participated in planning and designing the architecture of the new features",
                ]}
              />
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
