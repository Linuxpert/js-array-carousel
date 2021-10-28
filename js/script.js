// creare un carosello come nella foto e al click dell'utente sulle frecce l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiuntoi il titolo e il resto






const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

//selezioni elementi utili
const itemsCont = document.querySelector(".items");
const thumbsCont = document.querySelector(".thumbs");
const next = document.querySelector(".fa-arrow-circle-down");
const prev = document.querySelector(".fa-arrow-circle-up");

let item = "";
let thumbs = "";


//outpute degli elementi
for(let i = 0; i < items.length; i++){
    item += `
    <div class="item">
        <img src="${items[i]}" alt="">
        <div class="text">
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>
    </div>`;

    thumbs += `
    <div class="thumb">
        <img src="${items[i]}" alt="">
    </div>`;
}


//output globale con active 
itemsCont.innerHTML = item;
document.getElementsByClassName("item")[0].classList.add("active");

thumbsCont.innerHTML += thumbs;
document.getElementsByClassName("thumb")[0].classList.add("active");

let activePosition =0;

document.querySelector(".fa-arrow-circle-down").addEventListener("click", 
    function(){


        //non sono alla fine degli elementi
        if(activePosition < items.length - 1){
            activePosition = activePosition +1;
        }else{//sono alla fine degli elementi
            //resetto la variabile di indice/posizione
            activePosition = 0
        }
        
           

        document.querySelector(".item.active").classList.remove("active");
        document.getElementsByClassName("item")[activePosition].classList.add("active");

        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb")[activePosition].classList.add("active");


    }
);


document.querySelector(".fa-arrow-circle-up").addEventListener("click", 
    function(){


        //se indice/posizione è 0
        if(activePosition === 0){
            //faccio tornare a ultimo elemento
            activePosition = items.length -1
        }else {
            //altrimenti
            activePosition = activePosition -1;
        }
            
       

        document.querySelector(".item.active").classList.remove("active");
        document.getElementsByClassName("item")[activePosition].classList.add("active");

        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb")[activePosition].classList.add("active");


    }
);