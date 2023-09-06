document.addEventListener('DOMContentLoaded', function() {
    const titleItems = document.querySelectorAll('.title-item');
    const paragraphs = document.querySelectorAll('.hidden-paragraph');
    const cards = document.querySelectorAll('.card');
    const cardSection = document.querySelector('.card-section');
  
  
    titleItems.forEach((titleItem, index) => {
      titleItem.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        const paragraph = paragraphs[index];
        paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
      });
    });
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 }); // Adjust the threshold as needed
  
    cards.forEach((card) => {
      observer.observe(card);
    });
  
    function toggleNavbar() {
      var navbar = document.getElementById("myNavbar");
      if (navbar.className === "navbar") {
        navbar.className += " responsive";
      } else {
        navbar.className = "navbar";
      }
    }
  
  });
  function toggleNavbar() {
    var navbar = document.getElementById("myNavbar");
    console.log("Current className:", navbar.className);
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar";
    }
    console.log("Updated className:", navbar.className);
  }
  