import { HoverEffect } from "./ui/card-hover-effect";

export function CourseList() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={courses} />
    </div>
  );
}
export const courses = [
  {
    title: "TECH-SIDDHI",
    description:
      "Tech-Siddhi is a technology company that provides a platform for students to learn, grow, and fulfill their essential technical requirements.",
    link: "https://techsiddhi.in/",
  },
  {
    title: "OKCL",
    description:
      "Odisha Knowledge Corporation Limited (OKCL) is under the administration of the Electronics & Information Technology (E&IT) Department of Government of Odisha.",
    link: "https://www.okcl.org",
  },
  {
    title: "CSC ACADEMY",
    description:
      "CSC Academy is a subsidiary of Common Service Centre (CSC SPV) and provides digital literacy and skill development training to the rural youth of India.",
    link: "https://www.cscacademy.org",
  },
  {
    title: "NIELIT",
    description:
      "National Institute of Electronics & Information Technology (NIELIT) is an autonomous scientific society under the Ministry of Electronics & Information Technology (MeitY), Government of India.",
    link: "https://www.nielit.gov.in",
  },
  {
    title: "IDEED",
    description:
      "Institute of Digital Education and Employment Development (IDEED) focuses on providing digital education and employment opportunities to individuals, enhancing their skills and employability.",
    link: "https://www.ideed.in",
  },
  {
    title: "NSDC",
    description:
      "National Skill Development Corporation (NSDC) is a unique Public Private Partnership (PPP) model under the Ministry of Skill Development & Entrepreneurship (MSDE), Government of India.",
    link: "https://nsdcindia.org",
  },
];
