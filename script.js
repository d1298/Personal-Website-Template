const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

window.onbeforeunload = () => {
    window.scrollTo(0,0);
}

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    
    if (window.scrollY > 110) {
        scrollToContent2();

    } else if ((10 < window.scrollY) && (window.scrollY < 110)) {
        scrollToContent1();

    } else if (window.scrollY < 10) {
        topToSideBar();
    }
});
async function scrollToContent1() {
    sideToTopBar();
    content3.classList.remove('active');
    content4.classList.remove('active');
    content3.style.transition = "all 1s ease-in-out";
    content4.style.transition = "all 1s ease-in-out";

    await sleep(1000);

    content1.classList.add('active');
    content2.classList.add('active');

}

async function scrollToContent2() {
    console.log("scrolling to content 2");
    content1.style.transition = "all 1s ease-in-out";
    content2.style.transition = "all 1s ease-in-out";
    content1.classList.remove('active');
    content2.classList.remove('active');

    await sleep(5000);

    content3.classList.add('active');
    content4.classList.add('active');
}

async function hideThenShowIcons() {
    let buttons = document.querySelectorAll(".buttons");

    buttons.forEach(button => {
        button.style.visibility = "hidden";
        button.style.opacity = "0";
    });

    await sleep(1000);

    while ([...buttons].some(button => window.getComputedStyle(button).visibility !== "visible")) {
        buttons.forEach(button => {

            if (((navbar.offsetWidth <= 100) && (navbar.offsetHeight == window.innerHeight)) ||
                ((navbar.offsetHeight >= 60) && (navbar.offsetWidth >= window.innerWidth))) {
                button.style.visibility = "visible";
                button.style.opacity = "1";
            }
        });
            await sleep(100)
    }

}

function sideToTopBar() {
    navbar.style.transitionProperty = "height, width";
    navbar.classList.add('topbar');

    hideThenShowIcons();
}

function topToSideBar() {
    navbar.style.transitionProperty = "width, height";
    navbar.classList.remove('topbar');

    hideThenShowIcons();
}
