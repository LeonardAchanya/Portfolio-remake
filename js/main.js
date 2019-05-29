document.addEventListener('DOMContentLoaded', function () {

    let navLink = document.querySelectorAll(".link");
        
    for (let i = 0; i < navLink.length; i++) {
        const link = navLink[i];
        const prevlink = navLink[i - 1];
        const nextlink = navLink[i + 1];


        link.addEventListener("click", function () {
            let section = document.querySelector("." + link.id);
            // section.classList.add =`"${link.id} active"`;
            // console.log(section);
            if (link.id === "about") {
                // section.nextElementSibling.classList.remove = "active";
                // section.classList.add = "active";

                link.style.color = "dodgerblue";
                link.style.borderBottom = "1.5px solid dodgerblue";
                nextlink.style.color = "dodgerblue";
                nextlink.style.borderBottom = "";
                section.nextElementSibling.style.zIndex = "0";
                section.nextElementSibling.style.opacity = "0";
                section.nextElementSibling.style.transition = "";
                section.style.zIndex = "1";
                section.style.opacity = "1";
                section.style.transition = "all 1.5s ease-out";
            } else {
                // section.previousElementSibling.classList.remove = "active";
                // section.classList.add="active";
                prevlink.style.color = "dodgerblue";
                prevlink.style.borderBottom = "";
                link.style.color = "dodgerblue";
                link.style.borderBottom = "1.5px solid dodgerblue";
                section.previousElementSibling.style.zIndex = "0";
                section.previousElementSibling.style.opacity = "0";
                section.previousElementSibling.style.transition = "";
                section.style.zIndex = "1";
                section.style.opacity = "1";
                section.style.transition = "all 1.5s ease-out";

            }
        })



    }


    let hamburger = document.getElementById('hamburger');
    let hamburgerDetails = document.querySelector('.aside');
    
    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle("change");
        hamburgerDetails.classList.toggle("aside-show");
    
    })


})