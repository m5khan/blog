type Props = {
  company: string;
  title: string;
  date: string;
  location: string;
  description: string[];
};

export function ExperienceSection({
  company,
  title,
  date,
  location,
  description,
}: Props) {
  return (
    <div id="experience-card" className="my-2">
      <div id="exp-heading" className="grid grid-cols-2 items-baseline">
        <div>
          <p className="font-medium text-lg leading-5">{company}</p>
          <p>{title}</p>
        </div>
        <div className="text-end">
          <p>{date}</p>
          <div className="flex items-center gap-0.5 justify-end">
            {/* <MapPinIcon size={14} strokeWidth={1.5} /> */}
            <p className="text-sm">{location}</p>
          </div>
        </div>
      </div>
      <div id="exp-content" className="text-gray-600 text-sm my-2">
        <ul className="list-disc ps-4 text-justify">
          {description.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
