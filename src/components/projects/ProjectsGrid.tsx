"use client";
import Projet from "@/components/projects/Project";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import projectsData from '@/data/projects.json';
import { useState, useMemo } from "react";

type Project = {
    title: string;
    cover: string;
    path: string;
    technos: string[];
    date: string;
}

const FilteredProjectsGrid = () => {
    const initialProjects = useMemo(() => {
        return Object.values(projectsData.projects) as Project[];
    }, []);

    const [projects, setProjects] = useState<Project[]>(initialProjects);

    useGSAP(() => {
        const projectElements = gsap.utils.toArray<HTMLElement>('.gsap-project');

        const handlers = projectElements.map((project, index) => {
            const otherProjects = projectElements.filter((_, i) => i !== index);

            const handleMouseEnter = () => {
                gsap.to(otherProjects, {
                    duration: 0.5,
                    opacity: 0.7,
                    ease: "power2.out"
                });
            };

            const handleMouseLeave = () => {
                gsap.to(otherProjects, {
                    duration: 0.5,
                    opacity: 1,
                    ease: "power2.out"
                });
            };

            project.addEventListener('mouseenter', handleMouseEnter);
            project.addEventListener('mouseleave', handleMouseLeave);

            return { project, handleMouseEnter, handleMouseLeave };
        });

        // Cleanup
        return () => {
            handlers.forEach(({ project, handleMouseEnter, handleMouseLeave }) => {
                project.removeEventListener('mouseenter', handleMouseEnter);
                project.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [projects]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-y-14 2xl:gap-y-20 md:gap-x-8">
            {projects.map((project) => (
                <Projet
                    key={project.path}
                    title={project.title}
                    cover={project.cover}
                    path={project.path}
                    technos={project.technos}
                />
            ))}
        </div>
    );
};

export default FilteredProjectsGrid;