const element = document.querySelector(".gallery");

console.log(element);

element.addEventListener('wheel', (event) => {
    // this ensure that page won't scroll down
    event.preventDefault();


    element.scrollBy({
      left: event.deltaY < 0 ? -150 : 150,
    });
  });

//   reference: https://dev.to/juanbelieni/how-to-create-horizontal-scroll-with-mouse-wheel-using-javascript-4cm5
  
window.addEventListener("load", setup);
const endpoint = "https://www.kamarini.dk/wp22e/wp-json/wp/v2/product";
console.log ("group9isthebest");

function setup() {
  getGoodies(); 
  // goodies category 2
  getProducers(); 
  // producers category 3
}


function getGoodies() {
  let endpoint2 = endpoint + "?categories=2&_embed";
  console.log(endpoint2);
  fetch(endpoint2)
  .then(res => res.json())
  .then(setupGoodies);
}

function setupGoodies(catArray){
  console.log(catArray)
  const template = document.querySelector("template#goodies-template").content;
  const parentElement = document.querySelector("ul.images");
  catArray.forEach(product => {
      const copy = template.cloneNode(true);
      copy.querySelector("img").src = product._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
      copy.querySelector("h2").textContent= `${product.title.rendered}`;
      copy.querySelector("figcaption").textContent= `${product.description_}`;
      parentElement.appendChild(copy);
  });
}

  function getProducers() {
    let endpoint3 = endpoint + "?categories=3&_embed";
    console.log(endpoint3);
    fetch(endpoint3)
    .then(res => res.json())
    .then(setupProducers);
  }
  
  function setupProducers(catArray2){
    console.log(catArray2)
    const template2 = document.querySelector("template#products-template").content;
    const parentElement = document.querySelector("div.producers-array");
    catArray2.forEach(product => {
        const copy = template2.cloneNode(true);
        copy.querySelector("img.company-logo").src = product._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
        copy.querySelector("p.company-description").textContent= `${product.description_}`;
        copy.querySelector("p.company-origin").textContent= `${product.location}`;
        copy.querySelector("p.company-name").textContent= `${product.title.rendered}`;
        parentElement.appendChild(copy);
    });
}
