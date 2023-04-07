const itemEl = document.querySelectorAll("li.item").length;

console.log(`Number of categories: ${itemEl}`);

document.querySelectorAll("li.item").forEach((element) => {
  const categoryHeading = element.querySelector("h2").textContent;
  const elementCount = element.querySelectorAll("li").length;

  console.log(`Category: ${categoryHeading}`);
  console.log(`Elements: ${elementCount}`);
});
