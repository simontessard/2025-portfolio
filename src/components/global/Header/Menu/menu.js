import gsap from "gsap";

export function openMenuFunction () {
    const tl = gsap.timeline();

    tl.to(".js-menu", {
        duration: .4,
        autoAlpha: 1,
        display: "flex",
    })
    .to(".js-menu-link", {
        duration: .5,
        opacity: 1,
    });
}

export function closeMenuFunction () {
    const tl = gsap.timeline();

    tl.to(".js-menu-link", {
        duration: .5,
        opacity: 0,
    })
    .to(".js-menu", {
        duration: .4,
        autoAlpha: 0,
        display: "none",
    })
}

export function hideMenu() {
    gsap.set(".js-menu", {
        delay: 1,
        autoAlpha: 0,
        display: "none",
    });
}