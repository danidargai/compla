/*
* File: app.js
* Author: Dargai Dániel
* Copyright: 2024, Dargai Dániel
* Group: Szoft I-2-N
* Date: 2024-05-08
* Github: https://github.com/danidargai/
* Licenc: GNU GPL
*/

const doc = {
    EmpsBody: document.querySelector('#EmpsBody'),
    descInput: document.querySelector('#description'),
    compInput: document.querySelector('#complainant'),
    productsInput: document.querySelector('#products'),
    typeInput: document.querySelector('#type')
}
const state = {
        host : 'http://localhost:8000',
        endpoint:"products",
        description: "",
        copmlainant: '',
        products: '',
        type: ''
}        

function getProductState() {
    state.description = doc.descInput.value
    state.complainant = doc.compInput.value
    state.products = doc.productsInput.value
    state.type = doc.typeInput.value
    doc.descInput.value = ''
    doc.compInput.value = ''
    doc.productsInput.value ='' 
    doc.typeInput.value ='' 
}



function getProducts() {
    let url = state.host + '/' + state.endpoint
    fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        renderProducts(result)
    })
}
function renderProducts(ProductList) {
    
    ProductList.forEach(product => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${product.id}</td>
        <td>${product.description}</td>
        <td>${product.complainant}</td>
        <td>${product.products}</td>
        <td>${product.type}</td>
        `
        doc.EmpsBody.appendChild(tr)
        console.log(product.id)
    })

}
getProducts()