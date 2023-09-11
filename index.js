const marqueeItemsData = [
  {
    // title: "1",
    subtitle: "Sage Delight",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quia reprehenderit veniam.",
    theme: "sage",
    imageSrc: "./images/sample-1.jpg",
  },
  {
    // title: "2",
    subtitle: "Navy Breeze",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    theme: "navy",
    imageSrc: "./images/sample-2.jpg",
  },
  {
    // title: "3",
    subtitle: "Rose Warmth",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, eos!",
    theme: "rose",
    imageSrc: "./images/sample-3.jpg",
  },
  {
    // title: "4",
    subtitle: "Plum Sweet",
    description:
      "Lorem ipsum dolor sit amet, adipisicing elit. Perferendis eaque adipisci, fugiat itaque accusamus commodi?",
    theme: "plum",
    imageSrc: "./images/sample-4.jpg",
  },
  {
    // title: "5",
    subtitle: "Rust Finish",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, eos!",
    theme: "rust",
    imageSrc: "./images/sample-5.jpg",
  },
];

marqueeItemsData.forEach((item, index) => (item.title = index + 1));

const marqueeSet = document.querySelector(".marquee-set");

const appendItemsToMarquee = (marqueeContent) => {
  marqueeContent.forEach((item) => {
    const htmlContent = `
    <article class="marquee-item ${item.theme}-bg">
        <img src="${item.imageSrc}" alt="">
        <h2 class="${item.theme}-bg">${item.title}</h2>
        <h3>${item.subtitle}</h3>
        <p>${item.description}</p>
        <div class="arrow-icon">
            <div class="arrow-icon-slider">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.172 12.9997H4V10.9997H16.172L10.808 5.63568L12.222 4.22168L20 11.9997L12.222 19.7777L10.808 18.3637L16.172 12.9997Z" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.172 12.9997H4V10.9997H16.172L10.808 5.63568L12.222 4.22168L20 11.9997L12.222 19.7777L10.808 18.3637L16.172 12.9997Z" />
                </svg>
            </div>
        </div>
    </article>
    `;

    marqueeSet.insertAdjacentHTML("beforeend", htmlContent);
  });
};

const timesToAppend = 8; // Push this many groups of marque content into the slider.

for (let i = 0; i < timesToAppend; i++) {
  appendItemsToMarquee(marqueeItemsData);
}

//
// Drag Functionality
//

let isDragging = false;
let startX, currentX;
let scrollLeft;

const marquee = document.querySelector(".marquee-container-draggable");

marquee.addEventListener("mousedown", (e) => {
  isDragging = true;
  marquee.style.cursor = "grabbing";
  startX = e.pageX - marquee.offsetLeft;
  scrollLeft = marquee.scrollLeft;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  marquee.style.cursor = "grab";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();

  currentX = e.pageX - marquee.offsetLeft;
  const walk = currentX - startX;
  marquee.scrollLeft = scrollLeft - walk;
});

//
// Media Queries in JavsScript
//

let mediaQuery = window.matchMedia("(max-width: 768px)");

if (mediaQuery.matches) {
  console.log("Narrow viewport");
} else {
  console.log("Wide viewport");
}

// You can also add an event listener to handle changes in the viewport size
mediaQuery.addEventListener("change", (event) => {
  if (event.matches) {
    console.log("Changed to narrow viewport");
  } else {
    console.log("Changed to wide viewport");
  }
});
