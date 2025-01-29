import gsap from "gsap";

export function openMenuFunction () {
    document.body.setAttribute("data-lenis-prevent", "true");

    const tl = gsap.timeline();

    tl.to(".js-menu", {duration: .4, autoAlpha: 1, display: "flex", onStart : () => {document.body.style.overflow = "hidden"}})
    .to(".js-menu-link", {duration: .3, opacity: 1, stagger: 0.015, y: 0})
    .to(".js-menu-contact", {duration: .3, opacity: 1, y:0},"-=.2")
    .to('.js-menu-img', {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "power4.inOut"}, "<")
    .to('.js-menu-img img', {scale: 1, ease: "power2.inOut", duration: .7}, "<");
}

export function closeMenuFunction () {
    document.body.removeAttribute("data-lenis-prevent");

    const tl = gsap.timeline();

    tl.to(".js-menu-link", {duration: .5, opacity: 0, stagger: 0.015, y: 15})
    .to(".js-menu-contact", {duration: .5, opacity: 0, y: 15}, "<")
    .to('.js-menu-img', {clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", ease: "power4.inOut",
        onComplete : () => {gsap.set('.js-menu-img img', {scale: 1.05})}}, "<")
    .to(".js-menu", {duration: .4, autoAlpha: 0, display: "none",
        onComplete: () => {document.body.style.overflow = "unset"}
    })
}

export function hideMenu() {
    gsap.set(".js-menu", {
        delay: 1,
        autoAlpha: 0,
        display: "none",
        onComplete: () => {closeMenuFunction()}
    });
    document.body.style.overflow = "unset";
}