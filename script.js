let buttonDrop = document.querySelector('.buttonDrop'),
    img = document.querySelector('.content-item'),
    result = document.querySelector('.result'),
    buttonStatisticShown = document.querySelector('.buttonStatisticShown'),
    statistics = document.querySelector('.statistics'),
    sumDropDocument = document.querySelector('.sumDrop'),
    sumDropEagleDocument = document.querySelector('.sumDropEagle'),
    percentDropEagleDocument = document.querySelector('.percentDropEagle'),
    sumDropTailsDocument = document.querySelector('.sumDropTails'),
    percentDropTailsDocument = document.querySelector('.percentDropTails'),
    sumDrop = 0,
    sumDropEagle = 0,
    percentDropEagle,
    sumDropTails = 0,
    percentDropTails;
buttonStatisticShown.onclick = function () {
    if(statistics.style.right === '0px'){
        statistics.style.right = '-185px';
        buttonStatisticShown.style.transform = 'rotate(360deg)'
    }else{
        statistics.style.right = '0px';
        buttonStatisticShown.style.transform = 'rotate(180deg)'
    }
    
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
function dropMoney() {
    let resultDrop = randomInteger(1,10);
    console.log(resultDrop);
    sumDrop++ ;
    sumDropDocument.textContent = String(sumDrop);
    if(resultDrop <= 5){
        result.textContent = 'Выпала решка';
        sumDropTails++;
        sumDropTailsDocument.textContent = String(sumDropTails);
    }else{
        result.textContent = 'Выпал орел';
        sumDropEagle++;
        sumDropEagleDocument.textContent = String(sumDropEagle);
    }
    percentDropEagle = Math.floor((sumDropEagle/sumDrop)*100);
    percentDropEagleDocument.textContent = String(percentDropEagle);
    percentDropTails = Math.floor((sumDropTails/sumDrop)*100);
    percentDropTailsDocument.textContent = String(percentDropTails);
}
buttonDrop.onclick = function () {
    result.textContent = ''
    img.classList.add('active');
    setTimeout(() => {
        img.classList.remove('active');
        console.log('Удалил')
        dropMoney();
    }, 1000);
}
