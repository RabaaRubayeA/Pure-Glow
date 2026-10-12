import {products} from './products-data.js';
import {bestProduct} from './best-seller-data.js';
import {faqData} from './faq-data.js';

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


const closingX= document.createElement('button');
closingX.className= 'closing-x';
closingX.textContent= 'X';
closingX.type= 'button';
closingX.setAttribute('aria-label', 'Close product details');

const modalContainer= document.createElement('div');
modalContainer.className= 'modal-container hide';

//populating the DOM
products.forEach(product => {
    const productCard= document.createElement('div');
    productCard.className= 'product-card';
    const productImage= document.createElement('img');
    productImage.src= product.image;
    productImage.alt= product.name;

    const productBadge= document.createElement('div');
    productBadge.className= 'product-badge';
    productBadge.textContent= product.badge;

    const productName= document.createElement('p');
    productName.className= 'product-name';
    productName.textContent= product.name;
    
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
const menuList= document.querySelector('ul');

menuList.addEventListener('click', (event)=>{
    const clickedListElement= event.target.tagName;
    if(clickedListElement === 'A'){
        menu.classList.toggle('active');
        bar1.classList.toggle("rotate1");
        bar2.classList.toggle("hide");
        bar3.classList.toggle("rotate2");
        burgerMenu.setAttribute("aria-label", "Open menu");
    }else{
        return;
    }
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
            shopNowButton.href= `https://wa.me/967780061237?text=${encodeURIComponent(clickedProduct.whatsappMessage)}`;

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
    
});

//   Best Seller section start
const bestSellerProduct= document.createElement('section');
bestSellerProduct.className= 'best-seller';

const bestSectionTitle= document.createElement('h3');
bestSectionTitle.className= 'section-title';
bestSectionTitle.textContent= 'Best Seller';

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
const ratingCounter=bestProduct.rating;
for(let i=0; i<ratingCounter; i++){
    const star= document.createElement('img');
    star.src= "assets/images/star-svgrepo-com.svg";
    bestSellerRating.appendChild(star);
}

bestSellerCard.appendChild(bestSellerRating);

 const shopNowButton= document.createElement('a');
    shopNowButton.className= 'shop-now-button';
    shopNowButton.textContent= 'Shop Now';
    shopNowButton.href= `https://wa.me/967780061237?text=${encodeURIComponent(bestProduct.whatsappMessage)}`;

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
//Testimonials


// FAQ
const faqSection= document.createElement('section');
faqSection.className= 'faq';
faqSection.id= 'faq';

const faqSectionTitle= document.createElement('h3');
faqSectionTitle.className= 'section-title';
faqSectionTitle.textContent='FAQ';

faqSection.appendChild(faqSectionTitle);
const caretSvg= `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 8.79289C11.6834 8.40237 12.3166 8.40237 12.7071 8.79289L17.7071 13.7929C18.0976 14.1834 18.0976 14.8166 17.7071 15.2071C17.3166 15.5976 16.6834 15.5976 16.2929 15.2071L12 10.9142L7.70711 15.2071C7.31658 15.5976 6.68342 15.5976 6.29289 15.2071C5.90237 14.8166 5.90237 14.1834 6.29289 13.7929L11.2929 8.79289Z" fill="#375741"></path> </g></svg>`;

 
faqData.forEach(faqItem=>{
    const qAndA= document.createElement('div');
    qAndA.className= 'q-and-a';
    
    const questionCaretContainer= document.createElement('div');
    questionCaretContainer.className= 'question-caret-container';
    const question= document.createElement('p');
    question.className= 'question';
    question.textContent= faqItem.question;

    questionCaretContainer.appendChild(question);
    
    const caret= document.createElement('button');
    caret.className= 'caret';
    caret.innerHTML= caretSvg;

    caret.setAttribute('aria-controls', faqItem.id);
    caret.setAttribute('aria-expanded', 'false');
    
    questionCaretContainer.appendChild(caret);

    const answer= document.createElement('p');
    answer.className= 'answer hide';
    answer.id = faqItem.id;
    answer.textContent= faqItem.answer;
       
    qAndA.appendChild(questionCaretContainer);
    qAndA.appendChild(answer);

    
    faqSection.appendChild(qAndA);
}); 
const testimonialsSection= document.getElementById('testimonials');
testimonialsSection.after(faqSection);

faqSection.addEventListener('click', (event)=>{
    
    const caretButton= event.target.closest('.caret');
    
    if(!caretButton){
        return;
    }

    const parentContainer= caretButton.closest('.q-and-a');
    const targetAnswer= parentContainer.querySelector('.answer');
    caretButton.classList.toggle('rotate180deg');
    targetAnswer.classList.toggle('hide');

    
    const isOpen = !targetAnswer.classList.contains('hide');
    caretButton.setAttribute('aria-expanded', isOpen);
    
})


// newsletter

const errorMessage= document.getElementById('error-message');

// a function to validate the user email
function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const signUpForm = document.getElementById('sign-up-form');
const emailInput= document.getElementById('user-email');
const submitBtn = signUpForm.querySelector('button[type="submit"]');

 emailInput.addEventListener('focus',()=>{
            errorMessage.classList.add('hide');
            
        })

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
   
const emailValue = emailInput.value.trim();

    if (!validateEmail(emailValue)){
        errorMessage.classList.remove('hide');
        return;
    }


    const formData = new FormData(signUpForm);
    formData.append("access_key", "32c331e7-b85d-4ef9-b27e-6274c9ce61b7");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            signUpForm.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

 
