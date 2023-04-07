const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector(".gallery");

const markUp = images
  .map(
    ({ url, alt }) =>
      `<li><img src="${url}", alt="${alt}" width=1260 height=750></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markUp);
document.body.style.margin = "0px";

gallery.setAttribute(
  "style",
  "display: flex;flex-direction: column; justify-content: center; align-items: center; list-style-type: none"
);
