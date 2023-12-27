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
                                  <p>Votes: <span id="votes-count-${animal.id}">${animal.votes}</span></p>
                                  <button class="vote-button" data-animal-id="${animal.id}">Vote for ${animal.name}</button>`;
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

          const votesElement = document.getElementById(`votes-count-${animalId}`);
          if (votesElement) {
              votesElement.textContent = selectedAnimal.votes;
          }
      }
      const resetContainer = document.getElementById('reset-container');
      resetContainer.style.display ="block";
  }

  const resetButton = document.getElementById('reset-votes');
  resetButton.addEventListener("click", resetVotes);

  function resetVotes() {
      data.forEach(animal => {
          animal.votes = 0;
          const votesElement = document.getElementById(`votes-count-${animal.id}`);
          if (votesElement) {
              votesElement.textContent = 0;
          }
      });
      const resetContainer = document.getElementById('reset-container');
      resetContainer.style.display = "none"; 
  }

  function addAnimal() {
    const addBtn = document.querySelector('.add-btn')
    addBtn.addEventListener("click", () => {
      const addForm = document.getElementById('add-animal-form');
      addForm.style.display = 'block';
    });
  }

  addAnimal();
});
