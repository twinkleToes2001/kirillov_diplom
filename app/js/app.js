document.addEventListener("DOMContentLoaded", function() {
    const
        acc = document.getElementsByClassName("question__heading"),
        hamburger_menu = document.getElementById('js-hamburger'),
        hamburger_menu_wrapper = document.getElementById('js-hamburger-wrapper'),
        ranges = document.querySelectorAll("input[type='range']"),
        header_menu = document.querySelector('.header__menu'),
        scroll_top = document.getElementById('js-button_go-top'),
        wrapper_scroll_top = document.getElementById('js-wrapper-button_go-top');

    // FILTERS
    for (let i = 0; i < ranges.length; i++) {
        ranges[i].addEventListener("input", function () {
            let content = this.parentElement.querySelector(".filter__content");
            console.log(content)
            content.innerHTML = this.value;
        });
    }

    // HAMBURGER
    hamburger_menu_wrapper.addEventListener('click', () => {
        hamburger_menu.classList.toggle('animate')
        document.querySelector('.header__menu').classList.toggle('active')
        document.querySelector(".overlay").classList.toggle('show')
        document.body.classList.toggle('scroll-lock')
    });
    document.querySelector(".overlay").addEventListener('click', function() {
        hamburger_menu.classList.toggle('animate')
        document.querySelector('.header__menu').classList.toggle('active')
        document.querySelector(".overlay").classList.toggle('show')
        document.body.classList.toggle('scroll-lock')
    });


    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            console.log(this)
            /* Toggle between hiding and showing the active panel */
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }


    // GO BACK TO TOP BUTTON
    wrapper_scroll_top.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
    let previous_scroll = 0, transform_clear;
    window.addEventListener('scroll', () => {
        let current_scroll = window.pageYOffset
        if (window.pageYOffset > 155) {
            wrapper_scroll_top.style.transform = 'translateX(0)'
            if ((current_scroll - previous_scroll) <= -100) {

                scroll_top.style.transform = 'translateX(0)';
                clearTimeout(transform_clear)
                transform_clear = setTimeout(() => {
                    scroll_top.style.transform = 'translateX(100%)'
                }, 3000)
            }
        }
        else {
            wrapper_scroll_top.style.transform = 'translateX(100%)'
            scroll_top.style.transform = 'translateX(100%)';
        }
        previous_scroll = current_scroll;
    });
});