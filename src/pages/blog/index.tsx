import BlogGrid from "@/components/blog/BlogGrid";
import PageTitle from "@/components/global/PageTitle";
import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer/Footer";
import Head from "next/head";

export default function BlogPage() {
    return (
        <Curve>
            <Head>
                <title>Blog - Simon TESSARD</title>
                <meta name="description" content="Découvrez mes articles et retours d'expérience sur le développement web, les technologies modernes et mes insights professionnels."/>
                <meta name="keywords" content="développement web, technologies, frontend, backend, nextjs, javascript, retours d'expérience"/>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <section className="px-3.5 md:px-6 pt-24 md:pt-32 pb-6">

                <PageTitle title="Blog" className="mb-3 md:mb-4"/>
                <p className="font-primary md:text-lg md:leading-8 md:max-w-4xl xl:max-w-2xl 2xl:max-w-3xl uppercase text-primary mb-14 md:mb-20">
                    Découvrez mes articles sur le développement web, les dernières technologies et mes retours d'expérience.
                </p>
                <BlogGrid/>

            </section>

            <Footer/>
        </Curve>
    );
}