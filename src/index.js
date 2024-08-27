function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "bdtbcb1807e03647e4ofbb3da4003d3b";
  let prompt = `User instructions: Generate a love poem about ${instructionsInput.value}`;
  let context =
    "You are a poet who writes short love poems  in basic HTML. Your goal is to write a poem no longer than 10 lines. Make sure to follow user instructions as the topic of the love poem. Do not include the 'html' in response.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Contex: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
