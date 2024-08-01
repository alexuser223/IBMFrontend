document.addEventListener('DOMContentLoaded', () => {
    const levels = document.querySelectorAll('.ocean-level');
    const twinkleCount = 100;

    levels.forEach(level => {
        for (let i = 0; i < twinkleCount; i++) {
            const twinkle = document.createElement('div');
            twinkle.classList.add('twinkle');
            twinkle.style.top = `${Math.random() * 100}%`;
            twinkle.style.left = `${Math.random() * 100}%`;
            twinkle.style.animationDelay = `${Math.random() * 2}s`;
            level.appendChild(twinkle);
        }
    });
});

gsap.to("#c-img-para1", {
    x: -515,
    duration:0.5,
    rotate: 0,
    scrollTrigger: {
        trigger: "#abyss-creture",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 30%",
        scrub: 1,
    },
})
gsap.to("#c-img-para2", {
    x: -255,
    duration:0.5,
    rotate: 0,
    scrollTrigger: {
        trigger: "#abyss-creture",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 30%",
        scrub: 1,
    },
})
gsap.to("#c-img-para3", {
    x: 265,
    duration:0.5,
    rotate: 0,
    scrollTrigger: {
        trigger: "#abyss-creture",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 30%",
        scrub: 1,
    },
})
gsap.to("#c-img-para4", {
    x: 525,
    duration:0.5,
    rotate: 0,
    scrollTrigger: {
        trigger: "#abyss-creture",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 30%",
        scrub: 1,
    },
})
gsap.to("#c-img-para5", {
    x: 6,
    duration:0.5,
    rotate: 0,
    scrollTrigger: {
        trigger: "#abyss-creture",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 30%",
        scrub: 1,
    },
})

gsap.to("#shop", {
    transform: "translateX(-50%)",
    scrollTrigger: {
        scroller: "body",
        trigger: "#abyss-tshirt",
        markers: true,
        start: "top -10%",
        end: "top -35%",
        scrub: 7,
    }
})

gsap.to("#line1",{
    height:"10vw",
    duration:0.5,
    scrollTrigger: {
        trigger: "#threats",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 25%",
        scrub: 2,
    },
})

gsap.to("#line2",{
    height:"12vw",
    duration:0.5,
    scrollTrigger: {
        trigger: "#mitigation",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 30%",
        scrub: 2,
    },
})
