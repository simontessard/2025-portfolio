// hooks/useProjectsData.ts
import frProjects from '@/data/projectsData.fr.json';
import enProjects from '@/data/projectsData.en.json';
import {useLocaleStore} from "@/store/useLocaleStore";

export const useProjectsData = () => {
    const locale = useLocaleStore((state) => state.locale);

    return locale === 'fr' ? frProjects : enProjects;
};