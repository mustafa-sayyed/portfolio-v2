"use client";
import { Button } from "./ui/button";
import { SiExpress } from "react-icons/si";
import Title from "./Title";
import HorizontalLine from "./HorizontalLine";
import {
  JavascriptIcon,
  CssIcon,
  DockerIcon,
  GitIcon,
  NodejsIconIcon,
  PrismaIcon,
  TypescriptIcon,
  ShadcnuiIcon,
  TailwindcssIcon,
  ReactQueryIcon,
  ReactIcon,
  GithubActionsIcon,
  MongodbIcon,
  NextjsIcon,
  HtmlIcon,
  ReduxIcon,
  RedisIcon,
  NginxIcon,
  MongooseIcon,
} from "./CustomIcons";
import { FaGithub } from "react-icons/fa6";

const menuWithCustomIcons = [
  {
    icon: JavascriptIcon,
    name: "JavaScript",
  },
  {
    icon: TypescriptIcon,
    name: "TypeScript",
  },
  {
    icon: NodejsIconIcon,
    name: "Node.js",
  },
  {
    icon: ReactIcon,
    name: "React",
  },
  {
    icon: ReactQueryIcon,
    name: "React Query",
  },
  {
    icon: ReduxIcon,
    name: "Redux",
  },
  {
    icon: HtmlIcon,
    name: "HTML",
  },
  {
    icon: CssIcon,
    name: "CSS",
  },
  {
    icon: TailwindcssIcon,
    name: "Tailwind CSS",
  },
  {
    icon: ShadcnuiIcon,
    name: "Shadcn UI",
  },
  {
    icon: MongodbIcon,
    name: "MongoDB",
  },
  {
    icon: MongooseIcon,
    name: "Mongoose",
  },
  {
    icon: PrismaIcon,
    name: "Prisma",
  },
  {
    icon: RedisIcon,
    name: "Redis",
  },
  {
    icon: GitIcon,
    name: "Git",
  },
  {
    icon: FaGithub,
    name: "GitHub",
  },
  {
    icon: GithubActionsIcon,
    name: "GitHub Actions",
  },
  {
    icon: DockerIcon,
    name: "Docker",
  },
  {
    icon: NginxIcon,
    name: "Nginx",
  },
  {
    icon: NextjsIcon,
    name: "Next.js",
  },
  {
    icon: SiExpress,
    name: "Express.js",
  },
];

function Technologies() {
  return (
    <div>
      <div className="min-h-[70vh]">
        <Title title="Technologies" />
        <p className="text-lg font-light mt-2">
          Here are some of the technologies I work with:
        </p>
        <div className="flex flex-wrap gap-2 mt-8">
          {menuWithCustomIcons.map((item, index) => (
            <Button key={index} variant={"outline"} className="hover:border-dashed hover:border-2 text-[12px]">
              <item.icon className="dark:text-white/70" />
              {item.name}
            </Button>
          ))}
        </div>
      </div>
      <HorizontalLine />
    </div>
  );
}

export default Technologies;
