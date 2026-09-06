import {products} from './products-data.js';
import {bestProduct} from './best-seller-data.js';


const benefitsSection= document.getElementById('benefits');
// variables for burgerMenu eventListener
const burgerMenu= document.getElementById('burger-menu');
const bar1= document.getElementById('bar1');
const bar2= document.getElementById('bar2');
const bar3= document.getElementById('bar3');
const menu= document.getElementById('menu');
// products section

const productsSection= document.createElement('section');
productsSection.className= 'products';
productsSection.id= 'products';

const sectionTitle= document.createElement('h3');
sectionTitle.className= 'section-title';
sectionTitle.textContent= 'Featured Products';

productsSection.appendChild(sectionTitle);

const sectionText= document.createElement('p');
sectionText.className= 'section-text';
sectionText.textContent= 'Discover skincare essentials crafted with natural ingredients for healthy glowing skin.';

productsSection.appendChild(sectionText);

const productsGrid= document.createElement('div');
productsGrid.className= 'products-grid';
productsGrid.id= 'products-grid';


const closingX= document.createElement('div');
closingX.className= 'closing-x';
closingX.textContent= 'X';

const modalContainer= document.createElement('div');
modalContainer.className= 'modal-container hide';

//populating the DOM
products.forEach(product => {
    const productCard= document.createElement('div');
    productCard.className= 'product-card';
    const productImage= document.createElement('img');
    productImage.src= product.image;
    productImage.alt= product.name;
    // productCard.appendChild(productImage);

    const productBadge= document.createElement('div');
    productBadge.className= 'product-badge';
    productBadge.textContent= product.badge;

    const productName= document.createElement('p');
    productName.className= 'product-name';
    productName.textContent= product.name;
//  here was overlay
    
    const rating= document.createElement('div');
    rating.className= 'rating';
        for(let i=0; i<product.rating; i++){

            const star= document.createElement('img');
            star.src= 'assets/images/star-svgrepo-com.svg'
            star.alt='star';
            rating.appendChild(star);
        }                      

    const viewDetailsButton= document.createElement('button');
    viewDetailsButton.className= 'view-details-button';
    viewDetailsButton.dataset.productId= product.id;
    viewDetailsButton.textContent= 'View Details';

    const price= document.createElement('p');
    price.className= 'price';
    price.textContent= `$ ${product.price}`;

productCard.appendChild(productImage);
productCard.appendChild(productBadge);
productCard.appendChild(productName);
productCard.appendChild(rating);
productCard.appendChild(viewDetailsButton);
productCard.appendChild(price);
productsGrid.appendChild(productCard);
})
productsSection.appendChild(productsGrid);
benefitsSection.after(productsSection);






// ********************************

burgerMenu.addEventListener('click',()=>{
    const isOpen = menu.classList.toggle("active");
    bar1.classList.toggle("rotate1");
    bar2.classList.toggle("hide");
    bar3.classList.toggle("rotate2");
    
    burgerMenu.setAttribute(
        "aria-label",
        isOpen? "Close menu" : "Open menu"
    );
    
})


// this part is to dynamically display the modal of the product when the user
//clicks on (View Details) button, used event delegation


const overlay= document.createElement('div');
overlay.className= 'overlay hide';
productsGrid.appendChild(overlay);


productsGrid.addEventListener('click',(event)=>{
    
    const clickedElement= event.target;

    if (!clickedElement.classList.contains('view-details-button')) {
            return;
        }




    const clickedId= clickedElement.dataset.productId;
    const clickedProduct= products.find(product=>{
        // if (clickedId===product.id){
            return product.id === clickedId;
    });

if (!clickedProduct) {
    return;
}

    modalContainer.innerHTML= '';
   
            const modalImage= document.createElement('img');
            modalImage.src= clickedProduct.image;
            modalImage.alt= clickedProduct.name;
            
            const modalProductName= document.createElement('p');
            modalProductName.className= 'product-name';
            modalProductName.textContent= clickedProduct.name;

            const productDescription= document.createElement('p');
            productDescription.className= 'product-description';
            // productDescription.id= 'product-description';
            productDescription.textContent= clickedProduct.description;

            const size= document.createElement('p');
            size.className= 'size';
            size.textContent= clickedProduct.size;
            const rating= document.createElement('div');
            rating.className= 'rating';
                for(let i=0; i<clickedProduct.rating; i++){
                    const star= document.createElement('img');
                    star.src= 'assets/images/star-svgrepo-com.svg'
                    star.alt='star';
                    rating.appendChild(star);
                }
                
                const shopNowButton= document.createElement('a');
            shopNowButton.className= 'shop-now-button';
            shopNowButton.textContent= 'Shop Now';
            shopNowButton.href= `https://wa.me/967780061237?text=${encodeURIComponent(clickedProduct.whatsaapMessage)}`;

        // put each dom element in its parent
            modalContainer.appendChild(closingX);
            modalContainer.appendChild(modalImage);
            modalContainer.appendChild(modalProductName);
            modalContainer.appendChild(productDescription);
            modalContainer.appendChild(size);
            modalContainer.appendChild(rating);
            modalContainer.appendChild(shopNowButton);
            productsGrid.appendChild(modalContainer);

            overlay.classList.remove('hide');
            modalContainer.classList.remove('hide');
            
        // };
    
});

//   Best Seller section start
const bestSellerProduct= document.createElement('section');
bestSellerProduct.className= 'best-seller';

const bestSectionTitle= document.createElement('h3');
bestSectionTitle.className= 'section-title';
bestSectionTitle.textContent= bestProduct.title;

bestSellerProduct.appendChild(bestSectionTitle);

const bestSellerCard= document.createElement('div');
bestSellerCard.className= 'best-seller-card';

const bestSellerImage= document.createElement('img');
bestSellerImage.className= 'best-seller-image';
bestSellerImage.src= bestProduct.image;
bestSellerImage.alt= bestProduct.name;

bestSellerCard.appendChild(bestSellerImage);

const bestSellerName= document.createElement('p');
bestSellerName.className= 'product-name';
bestSellerName.textContent= bestProduct.name;

bestSellerCard.appendChild(bestSellerName);

const bestSellerDescription= document.createElement('p');
bestSellerDescription.className= 'best-seller-description';
bestSellerDescription.textContent= bestProduct.description;

bestSellerCard.appendChild(bestSellerDescription);

const bestSellerBadge= document.createElement('div');
bestSellerBadge.className= 'product-badge';
bestSellerBadge.id= 'best-seller-badge';
bestSellerBadge.textContent= bestProduct.badge;

bestSellerCard.appendChild(bestSellerBadge);

const bestSellerRating= document.createElement('div');
bestSellerRating.className= 'rating';
for(let i=0; i<5; i++){
    const star= document.createElement('img');
    star.src= "assets/images/star-svgrepo-com.svg";
    bestSellerRating.appendChild(star);
}

bestSellerCard.appendChild(bestSellerRating);

 const shopNowButton= document.createElement('a');
    shopNowButton.className= 'shop-now-button';
    shopNowButton.textContent= 'Shop Now';
    shopNowButton.href= `https://wa.me/967780061237?text=${encodeURIComponent(bestProduct.whatsaapMessage)}`;

bestSellerCard.appendChild(shopNowButton);

const bestSellerPrice= document.createElement('p');
bestSellerPrice.className= 'price';
bestSellerPrice.textContent= `$${bestProduct.price}`;
bestSellerCard.appendChild(bestSellerPrice);


bestSellerProduct.appendChild(bestSellerCard);


productsSection.after(bestSellerProduct);

// Best Seller section end



closingX.addEventListener('click', () =>{
    modalContainer.classList.add("hide");
    overlay.classList.add("hide");
})

// newsletter

const signUpForm= document.getElementById('sign-up-form');
const userEmail= document.getElementById('user-email');
const errorMessage= document.getElementById('error-message');

// a function to validate the user email
function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

signUpForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const userEmailValue= userEmail.value;
    if(!validateEmail(userEmailValue)) {
        errorMessage.classList.remove('hidden');
    }else{
        userEmail.value="";
    }

})


