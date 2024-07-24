function homepage() {
  gsap.set(".movableTexts", { scale: 5 });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",

      scrub: 1,
    },
  });
  tl.to(
    ".viddiv",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  )
    .to(
      ".movableTexts",
      {
        scale: 1,
        ease: Power2,
      },
      "a"
    )
    .to(
      ".lft",
      {
        xPercent: -10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    )
    .to(
      ".rgt",
      {
        xPercent: 10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    );
}
function headingAnim() {
  var textWrapper = document.querySelector(".headText");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: false })
    .add({
      targets: ".headText .letter",
      translateY: [45, 10],
      easing: "easeOutExpo",
      duration: 800,
      delay: (el, i) => 30 * i,
    })
    .add({
      targets: ".headText",
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}
function cardAnim() {
  gsap.set(".rightCards", {
    yPercent: 20,
  });
  gsap.set(".cards", {
    width: "90%",
  });
  gsap.to(".cards", {
    scrollTrigger: {
      trigger: ".cards",
      start: "top 50%",
      end: "center 20%",
      scrub: true,
    },
    backgroundColor: "black",
    color: "#aedee0",
    stagger: 2,
    width: "100%",
    ease: Power4,
  });
}

function realSection() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      // toggleActions: "play none none reverse",
    },
    xPercent: -310,
    ease: Power4,
  });
}

function teamSection() {
  document.querySelectorAll(".listview").forEach(function (element) {
    element.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".profilePicture"), {
        opacity: 1,
        x: gsap.utils.mapRange(
          0,
          window.innerWidth,

          -200,
          200,
          dets.clientX
        ),
        y: gsap.utils.mapRange(
          0,
          window.innerWidth,

          -200,
          200,
          dets.clientY
        ),
        ease: Power4,
        duration: 0.5,
      });
    });
    element.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".profilePicture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
        backgroundColor: "#2544ee",
        color: "white",
        duration: 0.5,
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        backgroundColor: "white",
        color: "black",
        duration: 0.5,
      });
    });
  });
}

function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

function capsuleSection() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsulesSection",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1,
    },
    y: 0,
    ease: Power4,
  });
}
function navColorChange() {
  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        navbar.classList.add("bg-black");
      } else {
        navbar.classList.remove("bg-black");
      }
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  const sections = document.querySelectorAll(".section");
  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar.offsetHeight;

  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 10%",
      end: "bottom 10%",
      scrub: true,
      onEnter: () => {
        // curBgColor = document.body.setAttribute("theme", element.dataset.color);
        const bgColor = section.getAttribute("data-bgcolor");
        const fontColor = section.getAttribute("data-font-color");
        gsap.to(navbar, {
          backgroundColor: bgColor,
          color: fontColor,
          duration: 0.3,
        });
        // document.body.setAttribute("theme", element.dataset.color);
      },
      onEnterBack: () => {
        // curBgColor = document.body.setAttribute("theme", element.dataset.color);
        const bgColor = section.getAttribute("data-bgcolor");
        const fontColor = section.getAttribute("data-font-color");
        gsap.to(navbar, {
          backgroundColor: bgColor,
          color: fontColor,
          duration: 0.3,
        });
        // document.body.setAttribute("theme", element.dataset.color);
      },
      onLeave: () => {
        // curBgColor = document.body.setAttribute("theme", element.dataset.color);
        const bgColor = section.getAttribute("data-bgcolor");
        const fontColor = section.getAttribute("data-font-color");
        gsap.to(navbar, {
          backgroundColor: bgColor,
          color: fontColor,
          duration: 0.3,
        });
        // document.body.setAttribute("theme", element.dataset.color);
      },
      onLeaveBack: () => {
        // curBgColor = document.body.setAttribute("theme", element.dataset.color);
        const bgColor = section.getAttribute("data-bgcolor");
        const fontColor = section.getAttribute("data-font-color");
        gsap.to(navbar, {
          backgroundColor: bgColor,
          color: fontColor,
          duration: 0.3,
          opacity: 1,
        });
      },
    });
    // gsap.to(section, {
    //   clipPath: `inset(${navbarHeight}px 0% 0% 0%)`,
    //   scrollTrigger: {
    //     trigger: section,
    //     start: `top top`,
    //     end: `bottom top`,
    //     scrub: true,
    //   },
    // });
  });
}

function bodyColorChange() {
  document.querySelectorAll(".section").forEach(function (element) {
    ScrollTrigger.create({
      trigger: element,
      start: "top 1%",
      end: "bottom 1%",
      onEnter: function () {
        document.body.setAttribute("theme", element.dataset.color);
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", element.dataset.color);
      },
      onLeave: function () {
        document.body.setAttribute("theme", element.dataset.color);
      },
      onLeaveBack: function () {
        document.body.setAttribute("theme", element.dataset.color);
      },
    });
  });
}

function sliderSection1() {
  document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector(".carousel-track");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const indicators = document.querySelectorAll(".carousel-indicators button");
    let currentIndex = 0;
    const totalItems = carouselItems.length;

    function updateCarousel() {
      const itemWidth = carouselItems[0].offsetWidth;
      // console.log(carouselItems[0].offsetWidth);
      const offset = -currentIndex * (itemWidth + 160);
      // console.log(offset);
      // -1835
      gsap.to(carouselTrack, {
        x: offset,
        duration: 0.5,
        ease: "power4.inOut",
      });
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add("bg-black");
          indicator.classList.remove("bg-gray-300");
        } else {
          indicator.classList.remove("bg-black");
          indicator.classList.add("bg-gray-300");
        }
      });
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - 1;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : 0;
      updateCarousel();
    });

    indicators.forEach((indicator) => {
      indicator.addEventListener("click", () => {
        currentIndex = parseInt(indicator.getAttribute("data-index"));
        updateCarousel();
      });
    });

    updateCarousel();
  });
}

function footerAnim() {
  gsap.set(".logo-cont", { y: 330 });
  gsap.to(".logo-cont ", {
    scrollTrigger: {
      start: "40% 65%",
      end: "60% 70%",
      trigger: ".bottomfooter",
      scrub: true,
      ease: Power4,
    },
    y: 100,
    stagger: 1,
    duration: 10,
  });
}

function animateHeading(index) {
  const carouselItems = document.querySelectorAll(".carousel-items");
  const currentHeading = carouselItems[index].querySelector(".ml13");

  if (!currentHeading) return;

  currentHeading.innerHTML = currentHeading.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline({ loop: false }).add({
    targets: ".ml13 .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 400,
    delay: (el, i) => 300 + 5 * i,
  });
}

function categorySection() {
  document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector(".carousel-tracks");
    const carouselItems = document.querySelectorAll(".carousel-items");
    const prevBtn = document.getElementById("prevBtns");
    const nextBtn = document.getElementById("nextBtns");

    const indicators = document.querySelectorAll(
      ".carousel-indicatorss button"
    );
    let currentIndex = 0;
    const totalItems = carouselItems.length;

    function updateCarousel(nextIndex) {
      const currentItem = carouselItems[currentIndex];
      const nextItem = carouselItems[nextIndex];

      const currentImg = currentItem.querySelector("img");
      const nextImg = nextItem.querySelector("img");
      const currentText = currentItem.querySelector(".text");

      gsap.to(currentText, {
        duration: 1, // Duration of the animation in seconds
        opacity: 0, // Fade out to opacity 0
        y: 100, // Move down by 50 pixels
        ease: "power2.out", // Easing function
      });

      // Shrink current item and fade out
      gsap.to(currentImg, {
        scale: 0.2,
        duration: 0.2,
        ease: "power4.inOut",
        transformOrigin: "center center",
      });

      gsap.to(currentItem, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          currentItem.classList.remove("active");
          nextItem.classList.add("active");
          // animateHeading(nextIndex);

          // Scale up the next item and fade in
          gsap.to(nextImg, {
            scale: 1,
            duration: 0.2,
            ease: "power4.inOut",
            transformOrigin: "center center",
            onComplete: () => {
              currentIndex = nextIndex;
              animateHeading(nextIndex);
            },
          });

          gsap.to(nextItem, {
            opacity: 1,
            duration: 0.2,
            onComplete: () => {
              currentIndex = nextIndex;
            },
          });
        },
      });

      indicators.forEach((indicator, index) => {
        if (index === nextIndex) {
          indicator.classList.add("bg-black");
          indicator.classList.remove("bg-gray-300");
        } else {
          indicator.classList.remove("bg-black");
          indicator.classList.add("bg-gray-300");
        }
      });
    }

    prevBtn.addEventListener("click", () => {
      const nextIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - 1;
      updateCarousel(nextIndex);
    });

    nextBtn.addEventListener("click", () => {
      const nextIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : 0;
      updateCarousel(nextIndex);
    });

    indicators.forEach((indicator) => {
      indicator.addEventListener("click", () => {
        const nextIndex = parseInt(indicator.getAttribute("data-index"));
        updateCarousel(nextIndex);
      });
    });

    // Initial activation
    carouselItems[0].classList.add("active");
    gsap.to(carouselItems[0], {
      opacity: 1,
      duration: 0.5,
    });

    animateHeading(0); // Animate the heading of the initially active item
  });
}

function btnAnim() {
  document.addEventListener("DOMContentLoaded", () => {
    // Function to split text into characters
    function splitText(element) {
      const text = element.innerText;
      element.innerHTML = "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.classList.add("char");
        if (char === " ") {
          span.innerHTML = "&nbsp;"; // Maintain spaces
        } else {
          span.innerText = char;
        }
        element.appendChild(span);
      });
      return element.querySelectorAll(".char");
    }

    // Function to handle the animation on mouse enter
    function handleMouseEnter(event) {
      const quoteElement = event.target.querySelector(".quote");
      const arrowElement = event.target.querySelector(".arrow");
      if (quoteElement) {
        const chars = quoteElement.querySelectorAll(".char");
        if (chars.length === 0) {
          splitText(quoteElement);
        }
        gsap
          .timeline()
          .to(chars, {
            duration: 0.2,
            y: -20,
            stagger: 0.02,
            ease: "power4.out",
          })
          .set(chars, { y: 20 })
          .to(chars, {
            duration: 0.2,
            y: 0,
            stagger: 0.02,
            ease: "power4.out",
          });
      }
      if (arrowElement) {
        gsap.to(arrowElement, {
          duration: 0.01,
          rotation: 50,
          ease: "power4.out",
        });
      }
    }

    function handleMouseLeave(event) {
      const arrowElement = event.target.querySelector(".arrow");
      if (arrowElement) {
        gsap.to(arrowElement, {
          duration: 0.01,
          rotation: 0,
          ease: "power4.out",
        });
      }
    }

    // Select all elements with the class 'act'
    const elements = document.querySelectorAll(".act");

    // Attach the functions to each element using event listeners
    elements.forEach((element) => {
      const quoteElement = element.querySelector(".quote");
      if (quoteElement) {
        splitText(quoteElement); // Split text initially to avoid splitting multiple times
      }
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });
  });
}

function fixedBtn() {
  document.addEventListener("DOMContentLoaded", () => {
    const realSection = document.getElementById("real-section");
    const partnerButton = document.getElementById("partner-button");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            partnerButton.classList.remove("hidden");
          } else {
            partnerButton.classList.add("hidden");
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Adjust this threshold as needed
      }
    );

    observer.observe(realSection);
  });
}

function textReveal() {
  document.addEventListener("DOMContentLoaded", () => {
    const textElements = document.querySelectorAll(".textReveal");
    let masterTimeline = gsap.timeline();

    textElements.forEach((textElement) => {
      // Split the text content into words, then split each word into individual characters and wrap them in spans
      const textContent = textElement.textContent;
      textElement.innerHTML = textContent
        .split(" ")
        .map((word) => {
          return `<span class="word">${word
            .split("")
            .map((char) => `<span class="char">${char}</span>`)
            .join("")}</span>`;
        })
        .join(" ");

      let tl = gsap.timeline();
      tl.from(textElement.querySelectorAll(".char"), {
        opacity: 0,
        stagger: 0.04,
        scale: 0.5,
        ease: "back.out",
      }).fromTo(
        textElement.querySelectorAll(".char"),
        { color: "#fff" },
        { color: "#fff", stagger: 0.04 },
        "<"
      );

      // Add this element's timeline to the master timeline
      masterTimeline.add(tl);
    });
  });
}

fixedBtn();
loco();
homepage();
textReveal();
headingAnim();

cardAnim();
footerAnim();
realSection();
teamSection();
capsuleSection();
bodyColorChange();
sliderSection1();
btnAnim();
navColorChange();
categorySection();

document.getElementById("toggleButton").addEventListener("click", function () {
  const content = document.getElementById("toggleNavLiDiv");
  const navbar = document.getElementById("toggleNavbarDiv");
  const icon = this.querySelector(".icon");

  // Toggle the hidden class on the content
  content.classList.toggle("hidden");
  content.classList.toggle("border-b-2");
  navbar.classList.toggle("bg-black");

  // Swap the icon class
  if (icon.classList.contains("ri-menu-fill")) {
    icon.classList.remove("ri-menu-fill");
    icon.classList.add("ri-close-large-line");
    navbar.classList.add("h-full");
  } else {
    icon.classList.remove("ri-close-large-line");
    icon.classList.add("ri-menu-fill");
    navbar.classList.remove("h-full");
  }
});
