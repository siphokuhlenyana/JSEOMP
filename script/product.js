function CreateItem(id,name,category,image,description,price){
    this.id=id 
    this.name=name 
    this.category=category 
    this.image=image 
    this.description =description 
    this.price=price 
}

let item1 = new CreateItem(1 ,"Mocha","Dresses","https://siphokuhlenyana.github.io/eComPics/Mocha.png","This dresses can be easily worn to any event ,Da Gama Textiles Fabric ,3 Cats Original ShweShwe and a pleated bottomline.Cold water wash and do not bleach !.", 1400.00)

let item2=new CreateItem(2,"LillyFlow","Dresses","https://siphokuhlenyana.github.io/eComPics/LillyFlow.png","LillyFlow is a very fashionable dress that you can wear with any kind of shoe be it with heels , sneakers or a flat shoe it easily adapts to the mood you are in . You can wear it going out daytime and night time too.", 2000)

let item3=new CreateItem(3,"TableMat","Kitchenware","https://siphokuhlenyana.github.io/eComPics/TableMat.jpeg","Essence of African touch that can be easily washed and setup the way you want .", 450.)

let item4=new  CreateItem(4,"Overflow","Dresses","https://siphokuhlenyana.github.io/eComPics/Overflow.JPG","Mmmh this dress is giving elegant look and a bold outlook , it can be both hand washed and washed using a washing machine .", 3400.90)

let item5=new CreateItem(5,"RelyOn","T-shirts","https://siphokuhlenyana.github.io/eComPics/Tshirt.jpeg","Affordable T-shirt that can be worn with skirts or even trousers and it is 100% cotton .", 250.49)

let cart=[item1,item2,item3,item4,item5]

localStorage.setItem('Cart',JSON.stringify(cart))


let heading=document.querySelector('#heading')
heading.textContent= "Catelogue"


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

cart.forEach(item =>{
    let div=document.querySelector("#prod")
    div.innerHTML += `
    <div class="card" id="card" style="width: 18rem;height: 45rem;">
    <img id="images" src='${item.image}'>
    <div class="card-body">
    <p id="prodName">${item.name}</p>
    <p id="price">R${item.price}</p>
    <p id="description">${item.description}</p>
    
     <button id="view"type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg></button>
     <button class="buy" value="${item.price}">Buy</button>

     <div id ="stars"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
  <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
</svg></div>
    </div>
  </div>

  <div id="buttons>
      
      </div>

  `
  })

//  

let view=document.querySelectorAll('#view')
// vi//  let [category]=cart.filter(cart=>{
//   if(category ==" Dresses" )ew.addEventListener('click',(event))

let filterByKitchen=document.querySelectorAll("#kitchen")
let filterByDress=document.querySelector('dresses')

let filtered=[]
function filterByCat(){
  if(item.category === "Dresses"){
filtered.push(item)
  }
}
 
filterByDress.addEventListener('click',()=>{
})
  
// let filtered=[]
//  cart.forEach(item =>{
// if(item.category == "Dresses"){
//   filtered.push(item)
// } 
//     let show=document.querySelector('#display')
//     show.innerHTML +=`
//     <div class="card" id="card" style="width: 18rem;height: 45rem;">
//       <img id="images" src='${item.image}'>
//       <div class="card-body">
//       <p id="prodName">${item.name}</p>
//       <p id="price">R${item.price}</p>
//       <p id="description">${item.description}</p>
      
//        <button id="view"type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
//     <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
//   </svg></button>
//        <button class="buy" value="${item.price}">Buy</button>
       
  
//        <div id ="stars"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//     <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//   </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//     <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//   </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//     <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//   </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
//     <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
//   </svg></div>
//       </div>
//     </div>
  
//     <div id="buttons>
        
//         </div>
  
//     `

//     })

//  })
// // button.addEventListener('click',()=>{
//   let filteredItem=cart.
// })

// function searchItems(){
// let inputedItems=input.value


// }

// btn.addEventListener('click',()=>{
//     let searchProd=input.value
//     let inputedItems=cart.filter(cart=>{
//         if(searchProd.innerText == true){
//               cart.id. toString().includes(searchProd)||
//         cart.name.includes(searchProd)||
//         cart.category.includes(searchProd)||
//         cart.price.toString().includes(searchProd)
//         }else{
//             alert (" Please insert the correct item you are looking for .You can search by its name / category /ID / its price ! .")
//         }
      
//     })
let cat=cart.includes(input.textContent)

btn.addEventListener('click',()=>searchProd())
    function searchProd(cart){
  
        if(input.textContent == +true){
         for(cat of cart){
           cart.map().filter(cat=> input.textContent== +cat)
          return(cat)
         }
        } else{
          alert ('Please insert the correct item you are looking for .You can search by its name / category /ID / its price ! .')
        }
        
      }
      searchProd()






    // let tbody=document.querySelector('tbody')
    // tbody.innerHTML =''
    // inputedItems.map(cart=>{
    //     tbody.innerHTML += `
    //     <tr>
    //     <td>${cart.id}</td?
    //     <td>${cart.name}</td>
    //     <td>$${cart.category}</td>
    //     <td><img src='${cart.image}'></td>
    //     <td>${cart.description}</td>
    //     <td>${cart.price}</td>

    //     </tr>
        
    //     `
    // })
