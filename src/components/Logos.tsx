import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";

const reviews = [
  {
    name: "CSC",
    username: "",
    body: "CSC Academy",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "NIELET",
    username: "",
    body: "National Institute of Electronics & Information Technology",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "IDEED",
    username: "",
    body: "Institute of Digital Educaion and Employment Development",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "MCA",
    username: "",
    body: "Registered Company under Ministry of Corporate Affairs",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "NSDC",
    username: "",
    body: "National Skill Development Council",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "OKCL",
    username: "",
    body: "Odisha Knowledge Corporation Limited",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-md font-medium">
            {name}
          </figcaption>
          <p className="text-xs font-medium">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Logos() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
