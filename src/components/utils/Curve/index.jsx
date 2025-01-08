'use client';
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router';
import { text, curve, translate } from './anim';
import Entrance from "../Entrance";

const routes = {
    "/": "Accueil",
    "/about": "À Propos",
    "/projects": "Projets",
    "/projects/iniva": "Iniva Tourism",
    "/projects/daouad": "Daouad",
    "/projects/chefdechantier": "ChefDeChantier.fr",
    "/projects/avec-joie": "Avec Joie",
    "/projects/socbois": "Socbois",
}

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
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null
    })

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
        <div className='page curve'>
            <Entrance/>
            <div style={{opacity: dimensions.width == null ? 1 : 0}} className='background'/>
                <motion.p className='route p-3 text-center text-white font-secondary text-4xl md:text-5xl uppercase' {...anim(text)}>
                    {routes[router.route]}
                </motion.p>
                {dimensions.width != null && <SVG {...dimensions}/>}
            {children}
        </div>
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
        <motion.svg className="svg" {...anim(translate)}
                    onAnimationStart={() => document.body.style.overflow = "hidden"}
                    onAnimationComplete={() => document.body.style.overflow = "unset"}>
            <motion.path {...anim(curve(initialPath, targetPath))}/>
        </motion.svg>
    )
}