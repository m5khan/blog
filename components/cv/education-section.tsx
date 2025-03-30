import Image from "next/image";

type Props = {
  degree: string;
  date: string;
  organization: string;
  imageUrl: string;
  imgwidth: number;
  imgheight: number;
};
export function EducationSection({
  degree,
  date,
  organization,
  imageUrl,
  imgwidth,
  imgheight,
}: Props) {
  return (
    <div id="education-section">
      <div className="flex items-center justify-between">
        <p className="font-medium text-lg">{degree}</p>
        <div>{date}</div>
      </div>
      <div className="grid grid-cols-[30px_1fr] gap-1 items-center">
        <div>
          <Image
            width={imgwidth}
            height={imgheight}
            alt="logo"
            src={imageUrl}
          />
        </div>
        <div>
          <p>{organization}</p>
        </div>
      </div>
    </div>
  );
}
