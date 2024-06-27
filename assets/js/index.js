/*=============== SERVICES MODAL ===============*/
const modals=document.querySelectorAll('.services__modal'),
     modalButton=document.querySelectorAll('.services__button'),
     modalClose=document.querySelectorAll('.services__modal-close');
let activeModel =(modalClick) =>
{
    modals[modalClick].classList.add('active-modal');
}
modalButton.forEach((modalButton,i) =>
{
    modalButton.addEventListener('click' ,()=>
    {
        activeModel(i)
    })
})
modalClose.forEach((modalClose)=>
{
    modalClose.addEventListener('click' , ()=>
    {
        modals.forEach((modelRemove)=>
        {
            modelRemove.classList.remove('active-modal')
        })
    })
})

/*=============== SHOW SCROLL UP ===============*/ 
const scroll_Up = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 100 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scroll_Up)

/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween:32,
    grabCursor:true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets:true,
      clickable:true,
    },
    });
  
