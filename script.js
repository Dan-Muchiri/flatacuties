document.addEventListener("DOMContentLoaded", () => {
  const animalList = document.getElementById("animal-list");
  const animalDetails = document.getElementById("animal-details");

  let data;

  fetch("http://localhost:3000/characters")
      .then(response => response.json())
      .then(apiData => {
          data = apiData;

          data.forEach(animal => {
              const animalName = document.createElement("button");
              animalName.textContent = animal.name;
              animalName.addEventListener("click", () => showAnimalDetails(animal));
              animalList.appendChild(animalName);
          });
      });

  function showAnimalDetails(animal) {
      animalDetails.innerHTML = "";

      const detailsContainer = document.createElement("div");
      detailsContainer.innerHTML = `<img src="${animal.image}" alt="${animal.name}">
                                  <p>Name: ${animal.name}</p>
                                  <p>Votes: <span id="votes-count">${animal.votes}</span></p>
                                  <button class="vote-button" data-animal-id="${animal.id}">Vote</button>`;
      animalDetails.appendChild(detailsContainer);

      const voteButton = detailsContainer.querySelector(".vote-button");
      if (voteButton) {
          voteButton.addEventListener("click", () => addVote(animal.id));
      }
  }

  function addVote(animalId) {
      const selectedAnimal = data.find(animal => animal.id === animalId);
      if (selectedAnimal) {
          selectedAnimal.votes += 1;

          const votesElement = document.getElementById("votes-count");
          if (votesElement) {
              votesElement.textContent = selectedAnimal.votes;
          }
      }
  }
});
