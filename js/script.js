// //headerEmbalagens
// var btn = document.querySelector('#show-or-hide');  //vai transformar o elemento pelo id para transformar ele var
// var container = document.querySelector('.container');   ////vai transformar o elemento pelo class para transformar ele var 

// btn.addEventListener('click', function () {     //adicionando um evento ao botao clicado

//     if (container.style.display === 'block') {    //se estilo container for identico 'block'
//         container.style.display = 'none';   //deixe none
//     } else {
//         container.style.display = 'block';  //se nao block
//     }
// });


//header
var dropBtn = document.querySelector('#dropbtn');
var dropdownContent = document.querySelector('.dropdown-content');

dropBtn.addEventListener('click', function () {
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});