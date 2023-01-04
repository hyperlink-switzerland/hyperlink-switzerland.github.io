let cookie;
let cookieSet = false;

if (sessionStorage.getItem('cookieAsked') === 'true') {
    document.getElementById('cookiePlugin').style.display = 'none';
}
else {
    checkCookie();
}


function cookieAccept() {
    cookie = true;
    cookieSet = true;
    checkCookie();
    document.getElementById('cookiePlugin').style.display = 'none';
}

function cookieDecline() {
    cookie = false
    cookieSet = true;
    document.getElementById('cookiePlugin').style.display = 'none';
    sessionStorage.setItem('cookieAsked', 'true');
}

function getCookie(cName) {
    let name = cName + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieList = decodedCookie.split(';');

    for (let i = 0; i < cookieList.length; i++) {
        let cookie = cookieList[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }

        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return "";
}

function setCookie(cookieName, cookieValue, exDays) {
    if (cookie === false) {
        return;
    }
    const date = new Date();
    date.setTime(date.getTime() + (exDays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
}

function checkCookie() {
    let testName = getCookie('testName');
    if (testName !== "") {
        let text = document.getElementById('welcomeText')
        text.innerHTML = 'Hallo ' + testName + '<br>' + text.innerHTML;
        document.getElementById('cookiePlugin').style.display = 'none';
    } else {
        if (cookieSet === false) {
            return;
        } else if (cookieSet === true) {
            testName = prompt('please enter your name')
            if (testName !== '' && testName != null) {
                setCookie('testName', testName, 1);
            }
        }
    }
}