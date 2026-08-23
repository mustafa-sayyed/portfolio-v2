"use client";
import { SiExpress } from "react-icons/si";
import {
  CssIcon,
  DockerIcon,
  DrizzleIcon,
  GitIcon,
  NodejsIconIcon,
  PostgresqlIcon,
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
  JavascriptIcon,
  ReduxIcon,
  RedisIcon,
  NginxIcon,
  MongooseIcon,
} from "./CustomIcons";
import { FaGithub } from "react-icons/fa6";
import Title from "./Title";

const ICON_SIZE = 16;

const technologies = [
  { name: "JavaScript", Icon: JavascriptIcon },
  { name: "TypeScript", Icon: TypescriptIcon },
  { name: "Node.js", Icon: NodejsIconIcon },
  { name: "Express.js", Icon: SiExpress },
  { name: "PostgreSQL", Icon: PostgresqlIcon },
  { name: "Drizzle ORM", Icon: DrizzleIcon },
  { name: "MongoDB", Icon: MongodbIcon },
  { name: "Mongoose", Icon: MongooseIcon },
  { name: "Prisma", Icon: PrismaIcon },
  { name: "Redis", Icon: RedisIcon },
  { name: "HTML", Icon: HtmlIcon },
  { name: "CSS", Icon: CssIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextjsIcon },
  { name: "Redux", Icon: ReduxIcon },
  { name: "React Query", Icon: ReactQueryIcon },
  { name: "Tailwind CSS", Icon: TailwindcssIcon },
  { name: "Shadcn UI", Icon: ShadcnuiIcon },
  { name: "Git", Icon: GitIcon },
  { name: "GitHub", Icon: FaGithub },
  { name: "GitHub Actions", Icon: GithubActionsIcon },
  { name: "Docker", Icon: DockerIcon },
  { name: "Nginx", Icon: NginxIcon },
];

function Technologies() {
  return (
    <section id="technologies" className="mt-28 sm:mt-36">
      <Title title="Technologies" index="04" />

      <div className="mt-10 flex flex-wrap gap-x-3 gap-y-3">
        {technologies.map(({ name, Icon }) => (
          <span
            key={name}
            className="inline-flex items-center gap-2 text-sm text-foreground/90 bg-muted border px-2 rounded-md py-1"
          >
            <span className="flex size-4 items-center justify-center">
              <Icon size={ICON_SIZE} className="text-muted-foreground" />
            </span>
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
