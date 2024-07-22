let menuList = document.getElementById("menuList")
       menuList.style.maxHeight = "0px";

       function toggleMenu(){
           if(menuList.style.maxHeight == "0px")
           {
               menuList.style.maxHeight = "400px";
               menuList.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
           }
           else{
               menuList.style.maxHeight = "0px";
               menuList.style.boxShadow = "none";
           }
       }


document.addEventListener('DOMContentLoaded', function () {
    const feedbackBox = document.querySelector('.feedbacks-box');
    let isDown = false;
    let startX;
    let scrollLeft;

    feedbackBox.addEventListener('mousedown', (e) => {
        isDown = true;
        feedbackBox.classList.add('active');
        startX = e.pageX - feedbackBox.offsetLeft;
        scrollLeft = feedbackBox.scrollLeft;
    });
    feedbackBox.addEventListener('mouseleave', () => {
        isDown = false;
        feedbackBox.classList.remove('active');
    });
    feedbackBox.addEventListener('mouseup', () => {
        isDown = false;
        feedbackBox.classList.remove('active');
    });
    feedbackBox.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - feedbackBox.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        feedbackBox.scrollLeft = scrollLeft - walk;
    });

    feedbackBox.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - feedbackBox.offsetLeft;
        scrollLeft = feedbackBox.scrollLeft;
    });
    feedbackBox.addEventListener('touchend', () => {
        isDown = false;
    });
    feedbackBox.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - feedbackBox.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        feedbackBox.scrollLeft = scrollLeft - walk;
    });
});
