function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#typewriter", {
    strings: ["Hello", "World"],
    autoStart: true,
    display: 1,
    cursor: none,
  });
}

let poemFormElement = document.querySelector("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
