// const btn = document.querySelectorAll(".expand-button").forEach(() => {
//   addEventListener("click", (e) => {});
// });
document.addEventListener("click", (e) => {
  console.log("clicked");
  const card = e.target.closest(".card");
  console.log(card);
  const cardBody = card.querySelector(".card-body");
  console.log(cardBody);
  console.log(e.target.innerText);

  //   if (e.target.innerText === "Expand") {
  //     console.log("true");
  //     cardBody.classList.toggle("card-body");
  //     e.target.innerText = "Collapse";
  //   } else {
  //     console.log("false");
  //     e.target.innerText = "Expand";
  //     cardBody.classList.toggle("show");
  //   }
  cardBody.classList.toggle("show");
  if (e.target.innerText === "Expand") {
    e.target.innerText = "Collapse";
  } else {
    e.target.innerText = "Expand";
  }
});

// Select elements

// Create event listeners
// Run a check on buttons
// If they say "expand" then hide the card body
// If they say "collapse" then show the card body
