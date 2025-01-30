"use client";
import { useState } from 'react';
import Projet from "@/components/projects/Project";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslations } from 'next-intl';

type Project = {
    title: string;
    cover: string;
    path: string;
    field: string;
    date: string;
}

const FilteredProjectsGrid = () => {
    const [selectedYear, setSelectedYear] = useState("Tout");
    const t = useTranslations();

    const projects = Object.values(t.raw('projects')) as Project[];

    const dates = ["Tout", "2025", "2024", "2023"];

    useGSAP(() => {
        const projectElements = gsap.utils.toArray('.gsap-project');

        projectElements.forEach((project: any, index: number) => {
            const allProjectsButNotActual: typeof projectElements = [];
            allProjectsButNotActual.push(...projectElements.filter((p, i) => i !== index));

            project.addEventListener('mouseenter', () => {
                gsap.to(allProjectsButNotActual, {
                    duration: .5,
                    opacity: .7,
                });
            });

            project.addEventListener('mouseleave', () => {
                gsap.to(allProjectsButNotActual, {
                    duration: .5,
                    opacity: 1,
                });
            });
        });
    }, [selectedYear]);

    const handleYearClick = (year: any) => {
        if (year === selectedYear) return;

        const projectElements = gsap.utils.toArray('.gsap-project');

        gsap.to(projectElements, {
            duration: .5,
            autoAlpha: 0,
            ease: "power1",
            onComplete: () => {
                setSelectedYear(year);
                gsap.to(projectElements, {
                    duration: .5,
                    autoAlpha: 1,
                    ease: "power1",
                });
            }
        });
    };

    const filteredProjects = selectedYear === "Tout"
        ? projects
        : projects.filter(project => project.date === selectedYear);

    return (
        <div className="space-y-2 md:space-y-3.5">
            {/* Filtres */}
            <div className="flex gap-6">
                {dates.map((year) => (
                    <button
                        key={year}
                        onClick={() => handleYearClick(year)}
                        className={`cursor-none py-2 uppercase font-primary text-lg md:text-xl transition-colors ${
                            selectedYear === year
                                ? "text-primary"
                                : "text-primary/50"
                        }`}
                    >
                        {year}
                    </button>
                ))}
            </div>

            {/* Grille de projets */}
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-16 md:gap-y-14 md:gap-x-12">
                {filteredProjects.map((project) => (
                    <Projet
                        key={project.path}
                        title={project.title}
                        cover={project.cover}
                        path={project.path}
                        field={project.field}
                    />
                ))}
            </div>

        </div>
    );
};

export default FilteredProjectsGrid;