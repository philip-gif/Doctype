// app.js

// Data for parks, hotels, and itineraries
const parks = [
  { name: "Maasai Mara", image: "https://via.placeholder.com/300x200", description: "Famous for the Great Migration." },
  { name: "Amboseli", image: "https://via.placeholder.com/300x200", description: "Known for its elephant herds." },
  { name: "Tsavo East", image: "https://via.placeholder.com/300x200", description: "Home to the 'Red Elephants'." }
];

const hotels = [
  { name: "Sarova Mara", image: "https://via.placeholder.com/300x200", description: "Luxury lodge near Maasai Mara." },
  { name: "Karen Blixen Camp", image: "https://via.placeholder.com/300x200", description: "Elegant tented camp." },
  { name: "Mara Serena Safari Lodge", image: "https://via.placeholder.com/300x200", description: "Modern safari lodge." }
];

const itineraries = [
  { title: "7 Days Safari", description: "Visit Maasai Mara, Amboseli, and Tsavo East." },
  { title: "5 Days Beach & Safari", description: "Combine beach relaxation with wildlife adventure." },
  { title: "3 Days Short Getaway", description: "Quick trip to Amboseli and Nairobi." }
];

// Function to render cards
function renderCards(containerId, data) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Clear previous content

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    `;
    container.appendChild(card);
  });
}

// Render parks, hotels, and itineraries
renderCards('park-list', parks);
renderCards('hotel-list', hotels);
renderCards('itinerary-list', itineraries);

// Smooth scrolling to sections
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message!');
  this.reset();
});