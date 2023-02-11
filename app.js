import createCarouselSlider from "./carousel.js";

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
];

const builds = [
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

const container = document.querySelector(".carousel-container");

const container2 = document.querySelector(".carousel");
const container3 = document.querySelector(".carousel-2");

createCarouselSlider(links, container);
createCarouselSlider(builds, container2);
createCarouselSlider(builds, container3);
