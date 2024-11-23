"use client";
import Projet from "@/pages/projects/Project";
import projects from "@/data/projectsData.json";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

export default function ProjectsGrid() {

    useGSAP( () => {
        const projects = gsap.utils.toArray('.gsap-project');

        projects.forEach((project, index) => {
            const allProjectsButNotActual = [];
            allProjectsButNotActual.push(projects.filter((p, i) => i !== index));
            project.addEventListener('mouseenter', () => {
                gsap.to(allProjectsButNotActual, {
                    duration: .5,
                    opacity: .7,
                });
            })
            project.addEventListener('mouseleave', () => {
                gsap.to(allProjectsButNotActual, {
                    duration: .5,
                    opacity: 1,
                });
            })
        });
    })

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-14 md:gap-x-12">
            {projects.map((project, index) => (
                <Projet key={index} {...project} index={index}/>
            ))}
        </div>
    )
}