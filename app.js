const links = [
  {
    link: "https://images.unsplash.com/photo-1595980542930-9eea66620834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&h=1000&q=80",
    description: "Heydar Aliyev Center, Heydar Aliyev Avenue, Baku, Azerbaijan",
  },
  {
    link: "https://images.unsplash.com/photo-1496564203457-11bb12075d90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&h=1000&q=80",
    description: "The Zentrum Paul Klee, Bern, Switzerland",
  },
  {
    link: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&h=1000&q=80",
    description: "Tuletorget, Sundbyberg, Sweden",
  },
  {
    link: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&h=1000&q=80",
    description: "Constitution Square - Tower I, Ottawa, Canada",
  },
  {
    link: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&h=1000&q=80",
    description: "Rock and Roll Hall of Fame, Cleveland, Ohio, USA",
  },
  {
    link: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&h=1000&q=80",
    description: "Financial District, Toronto, Canada",
  },
];

const createImages = (item) => {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");

  div.className = "img";

  const styleDiv = {
    backgroundImage: `url('${item.link}')`,
    minWidth: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };

  h2.innerHTML = item.description;
  const styleH2 = {
    position: "absolute",
    color: "white",
    bottom: "5vh",
    left: "2vw",
  };

  Object.assign(div.style, styleDiv);
  Object.assign(h2.style, styleH2);

  div.appendChild(h2);

  return div;
};

const createCarouselSlider = (items, container) => {
  //TODO: create slider
  const slider = document.createElement("div");
  slider.className = "carousel-slider";
  slider.style.width = "100%";
  slider.style.height = "100vh";
  slider.style.display = "flex";

  for (item of items) {
    const img = createImages(item);
    slider.appendChild(img);
  }
  // azért kell a végére és az elejére még egy elem, hogy a transform animáció jól mutasson
  const cloneFirst = createImages(items[0]);
  const cloneLast = createImages(items[items.length - 1]);

  slider.appendChild(cloneFirst);
  slider.prepend(cloneLast);

  //TODO: create button
  const nextBtn = document.createElement("button");
  const prevBtn = document.createElement("button");
  nextBtn.innerHTML = '<i class="bi bi-caret-right"></i>';
  prevBtn.innerHTML = '<i class="bi bi-caret-left"></i>';

  let btnStyle = {
    position: "absolute",
    top: "50%",
    zIndex: "100",
    cursor: "pointer",
    border: "none",
    background: "none",
    fontSize: "30px",
    color: "white",
  };

  // it is merge two object
  Object.assign(nextBtn.style, btnStyle);
  Object.assign(prevBtn.style, btnStyle);

  nextBtn.style.right = "10px";
  prevBtn.style.left = "10px";

  //TODO: button event listener
  let counter = 1;

  let size = window.innerWidth;

  const length = items.length;
  slider.style.transform = `translateX(-${size * counter}px)`;

  let interval = setInterval(() => nextBtn.click(), 5000);
  nextBtn.addEventListener("click", () => {
    counter++;
    slider.style.transition = "transform 1s ease-in-out";
    slider.style.transform = `translateX(-${size * counter}px)`;
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    clearInterval(interval);
    interval = setInterval(() => nextBtn.click(), 5000);
  });

  prevBtn.addEventListener("click", () => {
    counter--;
    // create smoothy transform animation
    slider.style.transition = "transform 1s ease-in-out";
    slider.style.transform = `translateX(-${size * counter}px)`;
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    clearInterval(interval);
    interval = setInterval(() => nextBtn.click(), 5000);
  });

  window.addEventListener("resize", () => {
    size = window.innerWidth;
    slider.style.transition = "none";
    slider.style.transform = `translateX(-${size * counter}px)`;
    clearInterval(interval);
    interval = setInterval(() => nextBtn.click(), 5000);
  });

  slider.addEventListener("transitionend", () => {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
    if (counter > length) {
      counter = 1;
      slider.style.transition = "none";
      slider.style.transform = `translateX(-${size * counter}px)`;
    }
    if (counter < 1) {
      counter = length;
      slider.style.transition = "none";
      slider.style.transform = `translateX(-${size * counter}px)`;
    }
  });

  container.style.overflow = "hidden";
  container.style.position = "relative";

  container.appendChild(slider);
  container.appendChild(nextBtn);
  container.appendChild(prevBtn);
};

const container = document.querySelector(".carousel-container");

createCarouselSlider(links, container);
