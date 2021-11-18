const toggleButton = document.querySelector(".toggle-Button")
const navLinks = document.querySelector(".menu")


toggleButton.addEventListener("click", function(){
    /*if(navLinks.classList.contains("hidden")){
        navLinks.classList.remove("hidden")
    } else {
        navLinks.classList.add("hidden")
    }*/
    navLinks.classList.toggle("hidden")
   
})
/*
// Portfolio Scripts
const sectionCenter = document.querySelector('.section-center');
  window.addEventListener('DOMContentLoaded', function(){
    let displayMenu = menu.map(function(item){
      
      return `
        <div class="grid grid-col-2">
          <article class="flex flex-col lg:flex-row port-item item-top ">
          
              <img src=${item.img} class="p-2 photo lg:w-1/2" alt=${item.title}>
              <div class="item-info">
                  <header class="flex justify-between gap-2 p-2 m-4">
                      <h4>${item.title}</h4>
                      <h4 class="price">${item.tech}</h4>
                  </header>
                  <p class="m-4 pb-16 lg:pb-0">
                      ${item.desc}
                  </p>
                  <div class="flex justify-around">
                    <button class="bg-yellow-500 text-md py-1 px-5 m-2 rounded-lg text-xl text-white transition transform duration-300 hover:scale-125 hover:opacity-90"><a href="#">GitHub</a></button>
                    <button class="bg-yellow-700 text-md py-1 px-5 m-2 rounded-lg text-xl text-white transition transform duration-300 hover:scale-125 hover:opacity-90"><a href="#">Live</a></button>
                  </div>
                  
              </div>
          </article>
        </div>`;
          
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu
  });

//Review Scripts

  // select items
const img = document.getElementById("person-img");
const job = document.getElementById("job");
const client = document.getElementById("client");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem)
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    client.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Show next person
nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0
    }
    showPerson(currentItem)
})

// Show previous person
prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)
})
*/