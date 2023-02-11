const createImages = (item) => {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");

  div.className = "img";

  const styleDiv = {
    backgroundImage: `url('${item.link}')`,
    minWidth: "100%",
    height: "100%",
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
  slider.style.height = "100%";
  slider.style.display = "flex";

  for (const item of items) {
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

  let size = container.offsetWidth;
  console.log(size);

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
    size = container.offsetWidth;
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

export default createCarouselSlider;
