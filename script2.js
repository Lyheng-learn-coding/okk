const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Handle "Yes" button click
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I knew you loved me! ❤️";
  gif.style.display = "block"; // Ensure the chicken GIF remains visible
  gif.src = "https://media.tenor.com/Do2tfm6klgQAAAAM/cat-kitten.gif";
});

// Handle "No" button hover
noBtn.addEventListener("mouseover", () => {
  const wrapper2 = document.querySelector(".wrapper2");

  // Get the dimensions of the `.wrapper2` container
  const wrapper2Rect = wrapper2.getBoundingClientRect();

  // Calculate boundaries within the `.wrapper2` container
  const minX = wrapper2Rect.left;
  const maxX = wrapper2Rect.right - noBtn.offsetWidth;
  const minY = wrapper2Rect.top;
  const maxY = wrapper2Rect.bottom - noBtn.offsetHeight;

  // Generate random positions within the boundaries
  const randomX = Math.random() * (maxX - minX) + minX;
  const randomY = Math.random() * (maxY - minY) + minY;

  // Update the button's position
  noBtn.style.position = "absolute"; // Enable movement
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
