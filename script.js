// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero (in ordine) tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49


const livel = document.querySelector('#Difficolta')
const btn = document.querySelector('#Play')
const container = document.querySelector('.container');

btn.addEventListener('click', function() {
    if(livel.value == 'Easy'){
        for (let i = 1; i <= 49; i++){
            let item = document.createElement('div');
            item.classList.add('square');
            item.innerHTML = i;
            container.append(item);
            
        }
    }else if(livel.value == 'Medium'){
        for (let i = 1; i <= 81; i++){
        let item = document.createElement('div');
        item.classList.add('square');
        item.innerHTML = i;
        container.append(item);
        }
    }else{
        for (let i = 1; i <= 100; i++){
        let item = document.createElement('div');
        item.classList.add('square');
        item.innerHTML = i;
        container.append(item);
        }
    }
})





