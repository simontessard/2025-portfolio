import gsap from "gsap";

export function openMenuFunction () {
    const tl = gsap.timeline();

    tl.to(".js-menu", {duration: .4, autoAlpha: 1, display: "flex", onStart : () => {document.body.style.overflow = "hidden"}})
    .to(".js-menu-links", {duration: .3, opacity: 1, stagger: 0.1, y: 0})
    .to(".js-menu-contact", {duration: .3, opacity: 1, y:0},"<")
    .to('.js-menu-img', {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "power4.inOut"}, "<");
}

export function closeMenuFunction () {
    const tl = gsap.timeline();

    tl.to(".js-menu-links", {duration: .5, opacity: 0, stagger: 0.1, y: 15})
    .to(".js-menu-contact", {duration: .5, opacity: 0, y: 15}, "<")
    .to('.js-menu-img', {clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", ease: "power4.inOut"}, "<")
    .to(".js-menu", {duration: .4, autoAlpha: 0, display: "none",
        onComplete: () => {document.body.style.overflow = "unset"}
    })
}

export function hideMenu() {
    gsap.set(".js-menu", {
        delay: 1,
        autoAlpha: 0,
        display: "none",
    });
    document.body.style.overflow = "unset";
}