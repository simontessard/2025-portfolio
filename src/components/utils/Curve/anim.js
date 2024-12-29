export const text = {
    initial: {
        opacity: 1,
        visibility: "visible",
    },
    enter: {
        opacity: 0,
        top: -100,
        transition: {duration: .6, delay: .3, ease: [0.76, 0, 0.24, 1]},
        transitionEnd: {top: "47.5%", visibility: "hidden"}
    },
    exit: {
        opacity: 1,
        visibility: "visible",
        top: "40%",
        transition: {duration: .5, delay: .4, ease: [0.33, 1, 0.68, 1]}
    }
}

export const curve = (initialPath, targetPath) => {
    return {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: {duration: .6, delay: .3, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: initialPath,
            transition: {duration: .6, ease: [0.76, 0, 0.24, 1]}
        }
    }
}

export const translate = {
    initial: {
        top: "-300px"
    },
    enter: {
        top: "-100vh",
        transition: {duration: .6, delay: .3, ease: [0.76, 0, 0.24, 1]},
        transitionEnd : {
            top: "100vh"
        }
    },
    exit: {
        top: "-300px",
        transition: {duration: .6, ease: [0.76, 0, 0.24, 1]}
    }
}