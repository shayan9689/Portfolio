import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const defaultReveal = {
  duration: 0.9,
  ease: "power2.out" as const,
};

const scrollTriggerDefaults = {
  start: "top 88%",
  end: "bottom 12%",
};

/**
 * Replayable scroll trigger: reset when section leaves viewport,
 * animate when section enters viewport (from top or bottom).
 */
function createReplayableReveal(
  triggerSelector: string,
  runAnimation: () => void,
  resetToHidden: () => void,
  scroller: Element | undefined
) {
  ScrollTrigger.create({
    trigger: triggerSelector,
    scroller: scroller ?? undefined,
    start: scrollTriggerDefaults.start,
    end: scrollTriggerDefaults.end,
    onEnter: runAnimation,
    onEnterBack: runAnimation,
    onLeave: resetToHidden,
    onLeaveBack: resetToHidden,
  });
}

/**
 * Register scroll-triggered reveal animations.
 * Animations run every time you scroll into a section (from above or below).
 */
export function registerSectionAnimations() {
  const wrapper = document.querySelector("#smooth-wrapper");
  const scroller = wrapper ?? undefined;

  // —— About ——
  const aboutSection = ".about-section";
  createReplayableReveal(
    aboutSection,
    () => {
      gsap.fromTo(
        aboutSection,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: defaultReveal.duration, ease: defaultReveal.ease }
      );
    },
    () => gsap.set(aboutSection, { opacity: 0, y: 40 }),
    scroller
  );

  // —— WhatIDo ——
  const whatSection = ".whatIDO";
  createReplayableReveal(
    whatSection,
    () => {
      gsap.fromTo(
        whatSection,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: defaultReveal.duration, ease: defaultReveal.ease }
      );
    },
    () => gsap.set(whatSection, { opacity: 0, y: 40 }),
    scroller
  );

  // —— Services: header + cards from left/right ——
  const servicesTrigger = ".services-section";
  const servicesHeader =
    ".services-container .services-intro, .services-container .services-title, .services-container .services-subtitle, .services-container .services-divider";
  const serviceCards = ".services-section .service-card";

  // Initial hidden state for below-the-fold sections (avoids flash before first scroll)
  gsap.set(servicesHeader, { opacity: 0, y: 36 });
  document.querySelectorAll(serviceCards).forEach((el, i) => {
    gsap.set(el, { opacity: 0, x: i % 2 === 0 ? -100 : 100 });
  });
  gsap.set(".career-heading, .career-subtitle, .career-divider", { opacity: 0, y: 32 });
  document.querySelectorAll(".career-section .career-card").forEach((el, i) => {
    gsap.set(el, { opacity: 0, y: i % 2 === 0 ? -70 : 70 });
  });
  gsap.set(".work-section", { opacity: 0, y: 40 });
  gsap.set(".techstack", { opacity: 0, y: 36 });
  gsap.set(".contact-section", { opacity: 0, y: 40 });

  createReplayableReveal(
    servicesTrigger,
    () => {
      gsap.set(servicesHeader, { opacity: 0, y: 36 });
      gsap.set(serviceCards, { opacity: 0, x: 0 });
      document.querySelectorAll(serviceCards).forEach((el, i) => {
        gsap.set(el, { opacity: 0, x: i % 2 === 0 ? -100 : 100 });
      });
      gsap.to(servicesHeader, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.08,
      });
      document.querySelectorAll(serviceCards).forEach((card, i) => {
        const fromLeft = i % 2 === 0;
        gsap.to(card, {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: "power2.out",
          delay: 0.15 + i * 0.08,
        });
      });
    },
    () => {
      gsap.set(servicesHeader, { opacity: 0, y: 36 });
      document.querySelectorAll(serviceCards).forEach((el, i) => {
        gsap.set(el, { opacity: 0, x: i % 2 === 0 ? -100 : 100 });
      });
    },
    scroller
  );

  // —— Career / Experience: header + cards from up/down ——
  const careerTrigger = ".career-section";
  const careerHeader = ".career-heading, .career-subtitle, .career-divider";
  const careerCards = ".career-section .career-card";

  createReplayableReveal(
    careerTrigger,
    () => {
      gsap.set(careerHeader, { opacity: 0, y: 32 });
      document.querySelectorAll(careerCards).forEach((el, i) => {
        gsap.set(el, { opacity: 0, y: i % 2 === 0 ? -70 : 70 });
      });
      gsap.to(careerHeader, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.08,
      });
      document.querySelectorAll(careerCards).forEach((card, i) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power2.out",
          delay: 0.12 + i * 0.1,
        });
      });
    },
    () => {
      gsap.set(careerHeader, { opacity: 0, y: 32 });
      document.querySelectorAll(careerCards).forEach((el, i) => {
        gsap.set(el, { opacity: 0, y: i % 2 === 0 ? -70 : 70 });
      });
    },
    scroller
  );

  // —— Work ——
  const workSection = ".work-section";
  createReplayableReveal(
    workSection,
    () => {
      gsap.fromTo(
        workSection,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: defaultReveal.duration, ease: defaultReveal.ease }
      );
    },
    () => gsap.set(workSection, { opacity: 0, y: 40 }),
    scroller
  );

  // —— Techstack ——
  const techstackSection = ".techstack";
  createReplayableReveal(
    techstackSection,
    () => {
      gsap.fromTo(
        techstackSection,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }
      );
    },
    () => gsap.set(techstackSection, { opacity: 0, y: 36 }),
    scroller
  );

  // —— Contact ——
  const contactSection = ".contact-section";
  createReplayableReveal(
    contactSection,
    () => {
      gsap.fromTo(
        contactSection,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: defaultReveal.duration, ease: defaultReveal.ease }
      );
    },
    () => gsap.set(contactSection, { opacity: 0, y: 40 }),
    scroller
  );
}
