const accItems = document.querySelectorAll(".item");
const nav_game_types = document.querySelector(".game-types");
const nav_instr_types = document.querySelector(".instr-types");
const hover_box_game = document.querySelector(".hover-div-g-types");
const hover_box_inst = document.querySelector(".hover-div-instr-types");

let currentHoverBox;

nav_game_types.addEventListener("mouseenter", function (e) {
  e.preventDefault();
  //   if (currentHoverBox)
  //     if (currentHoverBox !== hover_box_game) {
  //       currentHoverBox.classList.add("hidden");
  //       currentHoverBox = hover_box_game;
  //     }
  hover_box_game.classList.remove("hidden");

  hover_box_game.addEventListener("mouseleave", function (e) {
    hover_box_game.classList.add("hidden");
  });
});

nav_instr_types.addEventListener("mouseenter", function (e) {
  e.preventDefault();
  //   if (currentHoverBox)
  //     if (currentHoverBox !== hover_box_inst) {
  //       currentHoverBox.classList.add("hidden");
  //       currentHoverBox = hover_box_inst;
  //     }
  hover_box_inst.classList.remove("hidden");

  hover_box_inst.addEventListener("mouseleave", function (e) {
    hover_box_inst.classList.add("hidden");
  });
});

let current = accItems[0];
accItems.forEach(function (item) {
  item.addEventListener("click", function (e) {
    current.classList.remove("open");
    current = this;
    current.classList.add("open");
  });
});
//   </script>

//----------------STICKY----------------------//
const sectionHeroEl = document.querySelector(".section-hero");

const obsNav = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
obsNav.observe(sectionHeroEl);

// -----------------style----------------------------//

// const headTextFade = document.getElementById("fade-effect-illstr");
// const sectionIllustr = document.querySelector(".section-illustrations");

// const obsHeadFade = new IntersectionObserver(
//   function (enteries) {
//     const entery = enteries[0];
//     if (entery.isIntersecting) {
//       headTextFade.classList.add("fade-in");
//     }
//   },
//   {
//     root: null,
//     threshold: 0.1,
//     rootMargin: "0px",
//   }
// );
// obsHeadFade.observe(sectionIllustr);
