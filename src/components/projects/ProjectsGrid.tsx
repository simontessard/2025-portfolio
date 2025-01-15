"use client";
import React, { useState } from 'react';
import Projet from "@/components/projects/Project";
import projects from "@/data/projectsData.json";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const FilteredProjectsGrid = () => {
    const [selectedYear, setSelectedYear] = useState("Tout");

    const dates = ["Tout", "2025", "2024", "2023"];

    useGSAP(() => {
        const projects = gsap.utils.toArray('.gsap-project');

        projects.forEach((project, index) => {
            const allProjectsButNotActual = [];
            allProjectsButNotActual.push(...projects.filter((p, i) => i !== index));

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

    const filteredProjects = selectedYear === "Tout"
        ? projects
        : projects.filter(project => project.date === selectedYear);

    return (
        <div className="space-y-8">

            {/* Filtres */}
            <div className="flex gap-5 mb-14">
                {dates.map((year) => (
                    <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`py-2 uppercase font-primary md:text-xl transition-colors ${
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
                {filteredProjects.map((project, index) => (
                    <Projet key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default FilteredProjectsGrid;