function changeTitle() {
  const title = document.getElementById("main-title");
  title.textContent = "Your Next Safari Starts Here!";
}

function highlightInfo() {
  const info = document.getElementById("dynamic-info");
  info.classList.toggle("highlight");
}

function addReview() {
  if (!document.getElementById("new-review")) {
    const review = document.createElement("p");
    review.id = "new-review";
    review.textContent = '"Best trip of my life!" - S. Traveler';
    document.getElementById("reviews").appendChild(review);
  }
}

function removeReview() {
  const review = document.getElementById("new-review");
  if (review) {
    review.remove();
  }
}
