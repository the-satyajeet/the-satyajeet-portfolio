import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <div>
      <section>
        <SectionHeading>My projects</SectionHeading>
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...Project} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}

type ProjectProps = (typeof projectsData)[0];

function Project({ title, description, tags, imageUrl } :
  ProjectProps) {
  return <div>{title}</div>;
}
