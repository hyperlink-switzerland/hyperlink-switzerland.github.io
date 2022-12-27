async function logoAnimation() {
    while (true) {
        await sleep(200);
        document.getElementById('navbar-logoAnimation').src = 'logo/logoAnimation/logoAnimation2.png';
        await sleep(200);
        document.getElementById('navbar-logoAnimation').src = 'logo/logoAnimation/logoAnimation3.png';
        await sleep(200);
        document.getElementById('navbar-logoAnimation').src = 'logo/logoAnimation/logoAnimation4.png';
        await sleep(200);
        document.getElementById('navbar-logoAnimation').src = 'logo/logoAnimation/logoAnimation5.png';
        await sleep(200);
        document.getElementById('navbar-logoAnimation').src = 'logo/logoAnimation/logoAnimation6.png';
        await sleep(200);
        document.getElementById('navbar-logoAnimation').src = 'logo/logoAnimation/logoAnimation7.png';
        await sleep(200);
        document.getElementById('navbar-logoAnimation').src = 'logo/logoAnimation/logoAnimation8.png';
        await sleep(200);
        document.getElementById('navbar-logoAnimation').src = 'logo/logoAnimation/logoAnimation7.png';
        await sleep(200);
        document.getElementById('navbar-logoAnimation').src = 'logo/logoAnimation/logoAnimation6.png';
        await sleep(200);
        document.getElementById('navbar-logoAnimation').src = 'logo/logoAnimation/logoAnimation5.png';
        await sleep(200);
        document.getElementById('navbar-logoAnimation').src = 'logo/logoAnimation/logoAnimation4.png';
        await sleep(200);
        document.getElementById('navbar-logoAnimation').src = 'logo/logoAnimation/logoAnimation3.png';
        await sleep(200);
        document.getElementById('navbar-logoAnimation').src = 'logo/logoAnimation/logoAnimation2.png';
        await sleep(200);
        document.getElementById('navbar-logoAnimation').src = 'logo/logoAnimation/logoAnimation1.png';
        await sleep(5000);
    }


}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

window.addEventListener("scroll", function () {
    let navbarLogo = document.getElementById('navbar-logoAnimation');
    let linkElements = document.querySelectorAll('.navbar a');
    let login = document.getElementById('navbar-login');
    let signup = document.getElementById('navbar-signup');
    if (window.pageYOffset <= 150) {
        for (let c = 0; c < linkElements.length; c++) {
            linkElements[c].style.padding = '23px 20px'
        }
        navbarLogo.style.maxHeight = '45px';
        login.style.padding = '8px';
        login.style.margin = '15px 42px 15px 12px';
        login.style.border = '1px solid black';
        signup.style.padding = '8px';
        signup.style.margin = '15px 0px 15px 0px'
        signup.style.backgroundColor = 'black';
        signup.style.color = 'white';
    }
    if (window.pageYOffset > 150) {
        navbarLogo.style.maxHeight = '20px';
        navbarLogo.style.paddingTop = '3px';
        login.style.padding = '0px';
        login.style.margin = '0px 50px 0px 0px';
        login.style.border = 'none'
        signup.style.padding = '0px';
        signup.style.margin = '0px'
        signup.style.backgroundColor = 'white';
        signup.style.color = 'black';
        for (let c = 0; c < linkElements.length; c++) {
            linkElements[c].style.padding = '8px 20px'
        }
    }
});