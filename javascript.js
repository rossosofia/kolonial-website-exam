const element = document.querySelector(".gallery");

console.log(element);

element.addEventListener('wheel', (event) => {
    // this ensure that page won't scroll down
    event.preventDefault();


    element.scrollBy({
      left: event.deltaY < 0 ? -500 : 500,
    });
  });

//   reference: https://dev.to/juanbelieni/how-to-create-horizontal-scroll-with-mouse-wheel-using-javascript-4cm5
  