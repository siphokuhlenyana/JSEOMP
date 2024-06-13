localStorage.getItem('BoughtProducts')



function writeData(){
    let tbody=document.querySelector('#tbody')
    tbody.innerHTML =''
    products.map(cart=>{
        tbody.innerHTML += `
        <tr>
        <td>${cart.id}</td?
        <td>${cart.name}</td>
        <td>$${cart.category}</td>
        <td><img src='${cart.image}'></td>
        <td>${cart.description}</td>
        <td>${cart.price}</td>

        </tr>
        
        `
    })
}
