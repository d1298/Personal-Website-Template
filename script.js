const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

window.onbeforeunload = () => {
    window.scrollTo(0,0);
}

window.onload = () => {
    welcome.classList.add('active');
}

function scrollToTop() {
    window.scrollTo(0,0);
    welcome.classList.add('active');
    content1.classList.remove('active');
    content2.classList.remove('active');
    content3.classList.remove('active');
    content4.classList.remove('active');

}

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > 210) {
        end.classList.add('active');
        content1.classList.remove('active');
        content2.classList.remove('active');
        content3.classList.remove('active');
        content4.classList.remove('active');
    }else if (window.scrollY > 110) {
        scrollToContent2();
    } else if ((10 < window.scrollY) && (window.scrollY < 110)) {
        scrollToContent1();
    } else if (window.scrollY < 10) {
        topToSideBar();
        end.classList.remove('active');
        welcome.classList.add('active');
        content1.classList.remove('active');
        content2.classList.remove('active');
        content3.classList.remove('active');
        content4.classList.remove('active');

    }
});
async function scrollToContent1() {
    end.classList.remove('active');
    console.log("scrolling to content 1")
    sideToTopBar();
    welcome.classList.remove('active');
    content3.classList.remove('active');
    content4.classList.remove('active');
    content1.classList.add('active');
    content2.classList.add('active');

}

async function scrollToContent2() {
    end.classList.remove('active');
    console.log("scrolling to content 2");
    welcome.classList.remove('active');
    content1.classList.remove('active');
    content2.classList.remove('active');
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
