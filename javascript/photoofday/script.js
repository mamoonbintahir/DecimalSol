// Select DOM elements
const dateInput = document.getElementById("date");
const fetchBtn = document.getElementById("fetchBtn");
const photoSection = document.getElementById("photoSection");
const apodImage = document.getElementById("apodImage");
const title = document.getElementById("title");
const explanation = document.getElementById("explanation");
const loader = document.getElementById("loader");

// Set today's date as default
const today = new Date().toISOString().split("T")[0];
dateInput.value = today;

// API constants
const API_KEY = "DEMO_KEY";
const BASE_URL = "https://api.nasa.gov/planetary/apod";

// Fetch photo function
const fetchPhoto = async function () {
  const selectedDate = dateInput.value;

  if (!selectedDate) {
    alert("Please select a date.");
    return;
  }

  // Show loader, hide previous photo
  loader.classList.remove("hidden");
  photoSection.classList.add("hidden");

  // Create URL using string concatenation
  const url = BASE_URL + "?api_key=" + API_KEY + "&date=" + selectedDate;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch data.");
    }

    const data = await res.json();

    // Destructure values
    const photoTitle = data.title;
    const imageUrl = data.url;
    const desc = data.explanation;

    title.textContent = photoTitle;
    apodImage.src = imageUrl;
    explanation.textContent = desc;

    photoSection.classList.remove("hidden");
  } catch (err) {
    alert("Error fetching data. Please try again.");
    console.error(err.message);
  } finally {
    loader.classList.add("hidden");
  }
};

// Add event listener to button
fetchBtn.addEventListener("click", fetchPhoto);
