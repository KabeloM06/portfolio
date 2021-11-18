const reviews = [
    {
      id: 1,
      name: "Gugu Msibi",
      job: "Indalo Healing",
      img:  "/src/images/FB_IMG_1633445396407.jpg",
      text:
        "Kabelo created a WordPress site for me. The site consists of a landing page and a blog page. Not only did he build the website, but he also helped me with the hosting for the site. He was really easy to communicate with and was a lot of help. I highly recommend his services",
    },
    {
      id: 2,
      name: "Nadima Mwanza",
      job: "KingWolf",
      img:  "/src/images/FB_IMG_1633445413194.jpg",
      text:
        "Working with Kabelo was easy. He made a website for my new business. I gave him a few pointers on what I liked and wanted, and he took care of the rest. He definetly knew what the assignment was",
    },
];

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