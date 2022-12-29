window.addEventListener("scroll", function () {
    let navbarLogo = document.getElementById('navbar-logoAnimation'),
        linkElements = document.querySelectorAll('.navbar a'), login = document.getElementById('navbar-login'),
        signup = document.getElementById('navbar-signup');
    if (window.pageYOffset <= 150) {
        for (let c = 0; c < linkElements.length; c++) {
            linkElements[c].style.padding = '23px 20px'
        }
        navbarLogo.style.maxHeight = '45px';
        navbarLogo.style.paddingTop = '5px'

        login.style.padding = '8px';
        login.style.margin = '15px 60px 15px 0px';
        login.style.border = '1px solid black';
        login.style.borderRadius = '20px';

        signup.style.padding = '8px';
        signup.style.margin = '15px 10px 15px 0px'
        signup.style.backgroundColor = 'black';
        signup.style.border = '1px solid black'
        signup.style.color = 'white';
        signup.style.borderRadius = '20px';
    }
    if (window.pageYOffset > 150) {
        navbarLogo.style.maxHeight = '20px';
        navbarLogo.style.paddingTop = '3px';

        for (let c = 0; c < linkElements.length; c++) {
            linkElements[c].style.padding = '8px 20px'
        }

        login.style.padding = '8px 0px 8px 0px';
        login.style.margin = '0px 70px 0px 0px';
        login.style.border = 'none';
        login.style.borderRadius = '0px';

        signup.style.margin = '0px 10px 0px 0px'
        signup.style.backgroundColor = 'white';
        signup.style.color = 'black';
        signup.style.borderRadius = '0px';
        signup.style.padding = '8px 13px 8px 13px';
        signup.style.border = 'none'
    }
});

