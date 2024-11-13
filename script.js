const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        sideToTopBar();
    } else {
        topToSideBar();
    }
});

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

    content1.style.transition = "all 2s ease-in-out";
    content1.classList.add('active');

    content2.style.transition = "all 2s ease-in-out";
    content2.classList.add('active');
    hideThenShowIcons();
}

function topToSideBar() {
    navbar.style.transitionProperty = "width, height";
    navbar.classList.remove('topbar');

    content1.style.transition = "all 2.4s ease-in-out";
    content1.classList.remove('active');

    content2.style.transition = "all 2.4s ease-in-out";
    content2.classList.remove('active');

    hideThenShowIcons();
}
