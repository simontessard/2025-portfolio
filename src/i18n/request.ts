export default async function getRequestConfig(context: any) {
    const messages = {
        // Données des projets
        ...(await import(`@/i18n/locales/projectsData.${context.locale}.json`)).default,
        // Contenu global du site (blog, etc)
        ...(await import(`@/i18n/locales/global.${context.locale}.json`)).default
    };

    return {
        locale: context.locale || 'fr',
        messages
    };
}