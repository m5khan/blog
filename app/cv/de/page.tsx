import { EducationSection } from "@/components/cv/education-section";
import { ExperienceSection } from "@/components/cv/experience-section";
import { Heading } from "@/components/cv/heading";
import { Badge } from "@/components/ui/badge";
import {
  BriefcaseBusinessIcon,
  GithubIcon,
  GraduationCapIcon,
  LanguagesIcon,
  LaptopIcon,
  Linkedin,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const tech = [
  "Typescript",
  "React",
  "Next.js",
  "Python",
  "HTML",
  "CSS",
  "Tailwind",
  "SQL",
  "Docker",
  "AWS",
  "JIRA",
  "CI/CD",
  "Linux",
  "Keycloak",
  "GIT",
  "OOP",
  "Fullstack web development",
  "System design",
];

export default function CV() {
  return (
    <div className="flex flex-col items-center divide-solid divide-y-1">
      <main className="w-[210mm] h-[297mm] bg-white">
        <div className="grid grid-cols-[2fr_1fr] h-full">
          <article className="bg-white">
            <header className="h-32 mb-2 bg-white p-3 border-b">
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
            <section id="experience" className="p-3 bg-white h-full">
              <Heading
                title="BERUFSERFAHRUNG"
                icon={
                  <BriefcaseBusinessIcon
                    className="text-sky-700"
                    strokeWidth={1.5}
                  />
                }
              />
              {/* <Separator /> */}
              <div className="space-y-2 mt-1 ml-4">
                <ExperienceSection
                  company="Smart In Media AG"
                  title="Softwareentwickler"
                  date="Seit 06. 2020"
                  location="Köln, Deutschland"
                  description={[
                    "Implementierung einer ERP-ähnlichen Anwendung für die „Qualitätssicherungs-Initiative Pathologie“ zur Erleichterung ihrer Business-to-Business-Prozesse",
                    "Neuplanung und Implementierung von Datenbankmodellen zur Erzielung von Skalierbarkeit und besserer Anpassung an Änderungen",
                    "Implemented containerization-based deployment in CI/CD pipeline",
                    "Direkter Kontakt mit dem Geschäftskunden, Vorschlagen von Lösungen, Planen des Zeitplans bei der agilen Softwareentwicklung",
                  ]}
                />
                <ExperienceSection
                  company="Censhare AG"
                  title="Werkstudent Softwareentwickler"
                  date="08. 2018 - 03. 2020"
                  location="München, Deutschland"
                  description={[
                    "Entworfene und entwickelte eine Lösung zum Teilen von Code und Dokumentation, damit Teams sich innerhalb der Organisation koordinieren und zusammenarbeiten können",
                    "Unterstützung des Lösungsentwicklungsteams bei der Erfüllung der Kundenanforderungen durch die Arbeit an der Produktanpassung",
                  ]}
                />
                <ExperienceSection
                  company="top.legal GmbH"
                  title="Werkstudent Softwareentwickler"
                  date="02. 2018 - 08. 2018"
                  location="München, Deutschland"
                  description={[
                    "Implementierte Anwendungsfunktion, um Klienten, die Rechtsbeistand suchen, die mühelose Veröffentlichung ihrer Projekte zu erleichtern und sie mit dem entsprechenden Rechtsanwalt zu verbinden",
                    "Enge Zusammenarbeit mit dem CTO und Beteiligung an der Planung, Gestaltung der Architektur und Implementierung der Web-Anwendungsfunktionen",
                  ]}
                />
                <ExperienceSection
                  company="CRM Factory GmbH"
                  title="Werkstudent Softwareentwickler"
                  date="06. 2017 - 02. 2018"
                  location="München, Deutschland"
                  description={[
                    "Ich habe an der Integration der Anwendungskomponente in die Kundengeschäfte als B2B-Dienstleistung mitgearbeitet. Außerdem habe ich in Zusammenarbeit mit einem Senior Entwickler zur Verbesserung und Unterstützung des Webanwendungsprodukts beigetragen.",
                  ]}
                />
                <ExperienceSection
                  company="Colwiz Ltd"
                  title="Softwareentwickler"
                  date="07. 2013 - 09. 2016"
                  location="Karatschi, Pakistan"
                  description={[
                    "erhöhte Geschwindigkeit bei der Generierung von Forschungsautorenprofilen durch Erweiterung des Apache Nutch-Plugins; Erstellung einer Datenverarbeitungspipeline",
                    "Entwicklung, Übernahme und Veröffentlichung des Zitations-Plugins von Google Chrome im Google Web Store",
                    "Unterstützte das Backend-Team durch Hilfe bei der Implementierung von Planungsaufgaben auf Java-basierten Microservices",
                    "Skalierte und verbesserte Textsuchleistung durch Bereitstellung von Apache SolrCloud auf Linux-Servern in verteilten Systemen",
                    // "Umstellung veralteter Flash-basierter Anwendungen auf neuere Webtechnologie, was zu schnellerer Leistung und besserer Verteilung führte",
                  ]}
                />
              </div>
            </section>
          </article>
          <aside className="bg-white">
            <header className="h-32 mb-2 p-3 bg-white border-b">
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
            <div className="space-y-5 mr-2">
              <section id="education" className="p-3">
                <Heading
                  title="AKADEMISCHE AUSBILDUNG"
                  icon={
                    <GraduationCapIcon
                      className="text-sky-700"
                      strokeWidth={1.5}
                    />
                  }
                />
                <div className="space-y-1 mt-1 ml-4">
                  <EducationSection
                    date="2020"
                    degree="Master Informatik"
                    imageUrl="/tum.jpeg"
                    organization="Technische Universität München"
                    imgwidth={35}
                    imgheight={35}
                  />
                  <EducationSection
                    date="2013"
                    degree="BS Computer Science"
                    imageUrl="/uok.jpg"
                    organization="University Of Karachi"
                    imgwidth={25}
                    imgheight={25}
                  />
                </div>
              </section>
              <section id="language" className="p-3">
                <Heading
                  title="SPRACHKENNTNISSE"
                  icon={
                    <LanguagesIcon className="text-sky-700" strokeWidth={1.5} />
                  }
                />
                <div className="space-y-1 mt-1 ml-4">
                  <div className="flex justify-between items-center">
                    <div className="font-medium text-lg">Englisch</div>
                    <div className="text-gray-500">(Fließend)</div>
                    <div>C1</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-medium text-lg">Deutsch</div>
                    <div className="text-gray-500">(Mittlere)</div>
                    <div>B1</div>
                  </div>
                </div>
              </section>
              <section id="tech-skills" className="p-3">
                <Heading
                  title="TECHNISCHE FÄHIGKEITEN"
                  icon={
                    <LaptopIcon className="text-sky-700" strokeWidth={1.5} />
                  }
                />
                <div className="mt-1 ml-4">
                  {tech.map((v, i) => (
                    <Badge key={i} className="m-0.5" variant="outline">
                      {v}
                    </Badge>
                  ))}
                </div>
              </section>
              <section id="social" className="p-3">
                <Heading
                  title="EHRENAMTLICHE TÄTIGKEITEN"
                  icon={
                    <LanguagesIcon className="text-sky-700" strokeWidth={1.5} />
                  }
                />
                <div className="mt-1">
                  <ul className="text-sm list-disc ps-4 text-justify">
                    <li>
                      Mitglied im Supportteam des Studentenwohnheimnetzwerks
                      (2018-2020)
                    </li>
                    <li>
                      Mitglied im Erasmus Student Network ESN München
                      (2019-2020)
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </main>
      {/* <main className="w-[210mm] h-[297mm] bg-white"></main> */}
    </div>
  );
}
