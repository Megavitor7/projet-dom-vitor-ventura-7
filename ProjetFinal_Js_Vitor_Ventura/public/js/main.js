let modal = document.getElementById("modal");
let btn = document.getElementById("openModalButton");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
let authModal = document.getElementById("authModal");
let authBtn = document.getElementById("openAuthModalButton");
let authSpan = document.getElementsByClassName("authClose")[0];

authBtn.onclick = function() {
  authModal.style.display = "block";
}

authSpan.onclick = function() {
  authModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == authModal) {
    authModal.style.display = "none";
  }
}

// Show all dishes when "All" button is clicked
document.querySelector("#all").addEventListener("click", function() {
  document.querySelectorAll("#dishes li").forEach(function(dish) {
    dish.style.display = "block";
  });
});

// Show only entrees when "Entrees" button is clicked
document.querySelector("#entrees").addEventListener("click", function() {
  document.querySelectorAll("#dishes .entree").forEach(function(dish) {
    dish.style.display = "block";
  });
  document.querySelectorAll("#dishes .salad").forEach(function(dish) {
    dish.style.display = "none";
  });
  document.querySelectorAll("#dishes .specialty").forEach(function(dish) {
    dish.style.display = "none";
  });
});

// Show only salads when "Salads" button is clicked
document.querySelector("#salads").addEventListener("click", function() {
  document.querySelectorAll("#dishes .entree").forEach(function(dish) {
    dish.style.display = "none";
  });
  document.querySelectorAll("#dishes .salad").forEach(function(dish) {
    dish.style.display = "block";
  });
  document.querySelectorAll("#dishes .specialty").forEach(function(dish) {
    dish.style.display = "none";
  });
});

// Show only specialties when "Specialties" button is clicked
document.querySelector("#specialties").addEventListener("click", function() {
  document.querySelectorAll("#dishes .entree").forEach(function(dish) {
    dish.style.display = "none";
  });
  document.querySelectorAll("#dishes .salad").forEach(function(dish) {
    dish.style.display = "none";
  });
  document.querySelectorAll("#dishes .specialty").forEach(function(dish) {
    dish.style.display = "block";
  });
});
//1
const specialIds = ["modi", "unde", "paratiur", "nostrum","iusto"];
const specialElements = {
  modi: [ "#speimg1","#spe_center_1" ],
  unde: ["#spe_center_2", "#speimg2",],
  paratiur: ["#spe_center_3", "#speimg3"],
  nostrum: ["#spe_center_4", "#speimg4"],
  iusto:["#spe_center_5", "#speimg5"],
};

specialIds.forEach(id => {
  const currentId = document.querySelector(`#${id}`);
  if (currentId) {
    currentId.addEventListener("click", function() {
      Object.entries(specialElements).forEach(([key, elements]) => {
        if (key === id) {
          elements.forEach(element => {
            const currentElement = document.querySelector(element);
            if (currentElement) {
              currentElement.style.display = "block";
            }
          });
        } else {
          elements.forEach(element => {
            const currentElement = document.querySelector(element);
            if (currentElement) {
              currentElement.style.display = "none";
            }
          });
        }
      });
    });
  }
});
//caroulol
let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i = 0;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            for (i=0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            for (i=0; i<dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
            setTimeout(showSlides, 3000); // image will be changes in every 3 seconds
        }



