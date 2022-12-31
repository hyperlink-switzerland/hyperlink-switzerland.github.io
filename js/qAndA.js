function displayAnswer(pId, iId){
    let pElement = document.getElementById(pId);
    let iElement = document.getElementById(iId);

    console.log(iElement)

    if(pElement.style.display === 'block'){
        pElement.style.display = 'none';
        iElement.innerHTML = 'expand_less';
    }
    else{
        pElement.style.display = 'block';
        iElement.innerHTML = 'expand_more';
    }
}