function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 4200)}

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });  

 loaderAnimation(); 

 const openBtn = document.getElementById("openModal");

 const closeBtn = document.getElementById("closeModal");

 const modal = document.getElementById("modal");

 openBtn.addEventListener("click", ()=>{
  modal.classList.add("open");
 });

 closeBtn.addEventListener("click", ()=>{
  modal.classList.remove("open");
 });
