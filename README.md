# Flatacuties

Flatacuties is a mini web app where users can vote for the cutest animal! It utilizes a local API to fetch data about adorable characters and allows users to view their details, vote for them, reset votes, and even add new animals.

## Core Deliverables

As a user, you can:

1. **See a list of all animal names:**
   - Uses a GET request to display the names from the API.

2. **Click on an animal’s name to see its details:**
   - Clicking on a name displays the image and number of votes for that animal.

3. **Vote for an animal:**
   - When viewing an animal’s details, you can add the number of votes.
   - The number of votes is displayed with the animal’s details.

4. **Reset Votes:**
   - Clicking the "Reset Votes" button sets the votes for all animals back to zero.

5. **Add a new animal:**
   - Clicking the "Add your own animal!" button opens a form.
   - Fill in the name and image URL of the new animal and click "Add Animal."

## Usage
1. Start the local JSON DB server using the command: `json-server --watch db.json`
2. Test your server by visiting [http://localhost:3000/characters](http://localhost:3000/characters).
3. Open `index.html` in a web browser.
4. Click on the names of the animals to view their details.
5. Vote for your favorite animal by clicking the "Vote" button.
6. Reset all votes by clicking the "Reset Votes" button.
7. Add a new animal by clicking the "Add your own animal!" button and filling in the form.

## Technologies Used

- HTML
- CSS
- JavaScript
- JSON Server (for local API)

## Styling

The project uses a simple and clean style with a focus on readability. The "Satisfy" font provides a friendly and handwritten appearance.

## References

- Animal GIFs sourced from various platforms.
- Fonts: [Google Fonts - Satisfy](https://fonts.google.com/specimen/Satisfy)
