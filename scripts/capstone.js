// Rating card
const ratingCard = document.querySelector(".card");
// Thank you card
const thankYouCard = document.querySelector(".thank-you");
// Rating button
const ratingButtons = document.querySelectorAll(".rate-btn");
// Submit Button
const submitButton = document.getElementById("submit-btn");

// Selected rating in thank you state
const selectedRatingDisplay = document.querySelector(".selected-rating");

let selectedRating = null;
ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    ratingButtons.forEach((btn) => btn.classList.remove("active"));

    // Adding active class to clicked button
    button.classList.add("active");

    // Storing value
    selectedRating = button.dataset.value || button.textContent.trim();
  });
});

submitButton.addEventListener("click", () => {
  if (selectedRating === null) {
    submitButton.style.transition = "all 0.5s";
    submitButton.textContent = "Please select a rating";
    setTimeout(() => {
      submitbutton.textContent = "SUBMIT";
    }, 1500);
    return;
  }
  ratingCard.style.display = "none";

  thankYouCard.style.display = "block";

  selectedRatingDisplay.textContent = `You selected ${selectedRating} out of 5`;
});

// To restart
thankYouCard.addEventListener("click", () => {
  ratingCard.style.display = "block";
  thankYouCard.style.display = "none";
  selectedRating = null;
  ratingButtons.forEach((btn) => btn.classList.remove("active"));
});
