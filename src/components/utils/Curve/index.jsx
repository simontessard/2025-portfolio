'use client';
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router';
import { text, curve, translate } from './anim';
import Entrance from "../Entrance";

const routePaths = {
    home: "/",
    about: "/about",
    work: "/work",
    // Projets
    "project-iniva": "/work/iniva"
}

const pathToKey = Object.fromEntries(
    Object.entries(routePaths).map(([key, value]) => [value, key])
);

const anim = (variants) => {
    return {
        variants,
        initial: "initial",
        animate: "enter",
        exit: "exit"
    }
}

export default function Curve({children}) {
    const router = useRouter();
    const { asPath } = router;

    const [dimensions, setDimensions] = useState({
        width: null,
        height: null
    })

    const isValidRoute = Object.values(routePaths).includes(asPath);

    const currentRouteKey = pathToKey[asPath] || 'home';
    const routeName = currentRouteKey.replace('project-', '').replace('-', ' ');

    useEffect( () => {
        function resize(){
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        resize();
        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])

    return (
        <main className='page curve'>
            {isValidRoute && <Entrance/>}
            <div style={{opacity: dimensions.width == null ? 1 : 0}} className='background'/>
                <motion.p className='route p-3 text-center text-white font-primary text-3xl md:text-4xl uppercase' {...anim(text)}>
                    {routeName}
                </motion.p>
                {dimensions.width != null && <SVG {...dimensions}/>}
            {children}
        </main>
    )
}

const SVG = ({height, width}) => {

    const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width/2} ${height + 600} 0 ${height + 300}
        L0 0
    `

    const targetPath = `
        M0 300
        Q${width/2} 0 ${width} 300
        L${width} ${height}
        Q${width/2} ${height} 0 ${height}
        L0 0
    `

    return (
        <motion.svg className="svg" {...anim(translate)}>
            <motion.path {...anim(curve(initialPath, targetPath))}/>
        </motion.svg>
    )
}