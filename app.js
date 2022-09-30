
let btnPlus = document.querySelector('.boutton-plus');
let btnMoins = document.querySelector('.boutton-moins')
btnMoins.addEventListener('click', dimunuer)
btnPlus.addEventListener('click', augmenter)
function dimunuer() {
 
if(document.querySelector('.valeurQuantite').value > 0){
    document.querySelector('.valeurQuantite').value=parseInt(document.querySelector('.valeurQuantite').value)-1
    subtotal()
}
}
function subtotal(){
    let price = parseInt(document.querySelector('.price').innerText);
    let qty = parseInt(document.querySelector('.valeurQuantite').value);
    let subt = price*qty;
    
    document.querySelector('.subtotal').innerText = subt + 'fr';
}
function augmenter() {
    document.querySelector('.valeurQuantite').value=parseInt(document.querySelector('.valeurQuantite').value) +1
 subtotal()
}

let addButton = document.querySelector('.add-article')

addButton.addEventListener('click', AddArticle);

function AddArticle() { 
    alert(" Bravo, vous venez d'ajouté un article !")
}