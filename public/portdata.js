const menu = [
    {
      id: 1,
      title: "Quizz App",
      category: "App",
      tech: "HTML, CSS, JS",
      img: "../src/images/portfolio-images/IMG_20211029_092857.jpg",
      desc: `A simple quizz app that hosts the questions in a JavaScript array. This was my first time working with arrays `,
      git: "https://github.com/KabeloM06/quizz-app",
      demo: "https://kabelo-quizz-app.netlify.app/",
    },
    {
      id: 2,
      title: "KingWolf",
      category: "Website",
      tech: "HTML, CSS, JS, JQUERY",
      img: "../src/images/portfolio-images/IMG_20211029_092914.jpg",
      desc: `A website built for a sole proprietor who offers a service. The most difficult part was lining up the pictures in the carousel `,
      git: "https://github.com/KabeloM06/kabelom06.github.io",
      demo: "https://kabelom06.github.io/",
    },
    {
      id: 3,
      title: "Drum Project",
      category: "App",
      tech: "JS",
      img: "../src/images/portfolio-images/IMG_20211029_092946.jpg",
      desc: `This was a JavaScript project to play a drum kit online. You can play sounds by either clicking on an image or pressing the corresponding key. I built this to practice my switch statements `,
      git: "https://github.com/KabeloM06/drum-kit",
      demo: "https://kabelom06.github.io/drum-kit/",
    },
    {
      id: 5,
      title: "Todo App",
      category: "App",
      tech: "HTML, CSS, JS",
      img: "../src/images/portfolio-images/IMG_20211029_093023.jpg",
      desc: `A todo app project to practice my JavaScript. Getting the functionality working sent me searching all over the internet. It finally works`,
      git: "https://github.com/KabeloM06/todo-js",
      demo: "https://kabelo-todos-js.netlify.app/",
    },
    {
      id: 6,
      title: "Blog Website",
      category: "Website",
      tech: "HTML, CSS, JQUERY",
      img: "../src/images/portfolio-images/IMG_20211029_093318.jpg",
      desc: `A blog website that introduced me to many new concepts. My favourite new concept was the image carousel, and the most frustrating was getting to grips with JQuery`,
      git: "https://github.com/KabeloM06/blog-practice",
      demo: "https://kabelom06.github.io/blog-practice/",
    },
    {
      id: 8,
      title: "Task Tracker",
      category: "App",
      tech: "REACT",
      img: "../src/images/portfolio-images/IMG_20211029_105707.jpg",
      desc: `My first React App. I used this project to come to grips with how React works. Deploying the app was a lot different to what I was used to`,
      git: "https://github.com/KabeloM06/task-tracker-react",
      demo: "http://kabelom06.github.io/task-tracker-react",
    },
    {
      id: 9,
      title: "Indalo Healing",
      category: "Website",
      tech: "WORDPRESS",
      img: "../src/images/portfolio-images/IMG_20211029_092928.jpg",
      desc: `This is a live website built using WordPress. It is for a one person services business. The main plugin used was Elementor. There is no GitHub repo for this website`,
      git: "#",
      demo: "https://www.indalohealing.com/",
    },
    {
      id: 10,
      title: "This Website",
      category: "Website",
      tech: "HTML, TAILWIND, JS",
      img: "../src/images/portfolio-images/IMG_20211117_122253.jpg",
      desc: `This is the website you are currently on. Tailwind's mobile first nature created a lot of unexpected bugs I had to fix, including the mobile version on the toggle menu`,
      git: "https://github.com/KabeloM06/task-tracker-react",
      demo: "#",
    },
  ];

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
                  <button class="bg-yellow-500 text-md py-1 px-5 m-2 rounded-lg text-xl text-white transition transform duration-300 hover:scale-125 hover:opacity-90"><a target="_blank" href="${item.git}">GitHub</a></button>
                  <button class="bg-yellow-700 text-md py-1 px-5 m-2 rounded-lg text-xl text-white transition transform duration-300 hover:scale-125 hover:opacity-90"><a target="_blank" href="${item.demo}">Live</a></button>
                </div>
                
            </div>
        </article>
      </div>`;
        
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu
});
