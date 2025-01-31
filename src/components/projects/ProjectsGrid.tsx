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
    const t = useTranslations();
    const projects = Object.values(t.raw('projects')) as Project[];

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
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap-16 md:gap-y-14 md:gap-x-12">
            {projects.map((project) => (
                <Projet
                    key={project.path}
                    title={project.title}
                    cover={project.cover}
                    path={project.path}
                    field={project.field}
                />
            ))}
        </div>
    );
};

export default FilteredProjectsGrid;