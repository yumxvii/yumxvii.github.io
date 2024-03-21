




var modals = document.getElementById("myModal");

window.onclick = function(event) {
  if (event.target == modals) {
    modals.style.display = "none";
  }
}

function closeModal() {
  var modals = document.getElementById("myModal");
  modals.style.display = "none";


}

function closeModal2() {
    var modals = document.getElementById("myModal2");
    modals.style.display = "none";
  
  
  }

  function closeModal3() {
    var modals = document.getElementById("myModal3");
    modals.style.display = "none";
  
  
  }
  
function changeModalItems2(category, index, stars) {
    var modal = document.getElementById("myModal2");
    var itemData = getItemData(category, index);
    var starsContainer = document.getElementById("stars")
    document.getElementById("item-header").textContent = itemData.name;
    document.getElementById("item-name").textContent = itemData.name;
    document.getElementById("item-price").textContent = itemData.price;
    document.getElementById("item-ingredients").textContent = itemData.ingredients;
    document.getElementById("item-description").textContent = itemData.description;

    document.getElementById("item-image").src = itemData.image;

    starsContainer.innerHTML = ''; 
    for (var i = 0; i < 5; i++) {
        var star = document.createElement("i");
        if (i < Math.floor(stars)) {
            star.classList.add("bi", "bi-star-fill");
        } else if (i === Math.floor(stars) && stars % 1 >= 0.5) {
            star.classList.add("bi", "bi-star-half");
        } else {
            star.classList.add("bi", "bi-star");
        }
        starsContainer.appendChild(star);
    }
    


    
    modal.style.display = "block";
}

function changeModalItems3(category, index, stars) {
    var modal = document.getElementById("myModal3");
    var itemData = getItemData(category, index);
    var starsContainer = document.getElementById("stars")
    document.getElementById("item-header").textContent = itemData.name;
    document.getElementById("item-name").textContent = itemData.name;
    document.getElementById("item-price").textContent = itemData.price;
    document.getElementById("item-ingredients").textContent = itemData.ingredients;
    document.getElementById("item-description").textContent = itemData.description;

    document.getElementById("item-image").src = itemData.image;

    starsContainer.innerHTML = ''; 
    for (var i = 0; i < 5; i++) {
        var star = document.createElement("i");
        if (i < Math.floor(stars)) {
            star.classList.add("bi", "bi-star-fill");
        } else if (i === Math.floor(stars) && stars % 1 >= 0.5) {
            star.classList.add("bi", "bi-star-half");
        } else {
            star.classList.add("bi", "bi-star");
        }
        starsContainer.appendChild(star);
    }
    


    
    modal.style.display = "block";
}


function changeModalItems(category, index, stars) {
    var modal = document.getElementById("myModal");
    var itemData = getItemData(category, index);
    var starsContainer = document.getElementById("stars")
    document.getElementById("item-header").textContent = itemData.name;
    document.getElementById("item-name").textContent = itemData.name;
    document.getElementById("item-price").textContent = itemData.price;
    document.getElementById("item-ingredients").textContent = itemData.ingredients;
    document.getElementById("item-description").textContent = itemData.description;

    document.getElementById("item-image").src = itemData.image;

    starsContainer.innerHTML = ''; 
    for (var i = 0; i < 5; i++) {
        var star = document.createElement("i");
        if (i < Math.floor(stars)) {
            star.classList.add("bi", "bi-star-fill");
        } else if (i === Math.floor(stars) && stars % 1 >= 0.5) {
            star.classList.add("bi", "bi-star-half");
        } else {
            star.classList.add("bi", "bi-star");
        }
        starsContainer.appendChild(star);
    }
    


    
    modal.style.display = "block";
}

function getItemData(category, index) {
    var items = {
        "warm": [
            { name: "Chamomile Tea", price: "₱30", 
              description: "Chamomile tea: a fragrant herbal infusion known for its calming properties, perfect for relaxation and aiding in sleep.", 
              ingredients: "Ingredients: Chamomile flowers" ,
              image: "https://bonnieplants.com/cdn/shop/products/052022_T118630_202010_Bonnie_Chamomile_ALT_01.jpg?v=1655326422 "},
            { name: "Black Tea", price: "₱100",
            description: " Indulge in the bold flavor and rich aroma of our premium black tea.",
            ingredients:"Ingredients: Black tea leaves",
            image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/319/319646/black-tea.jpg",},
            { name: "Chai Tea", price: "₱100",
            description: "Experience the perfect blend of spices and warmth in every sip of our chai tea.",
            ingredients:"Ingredients: Black tea, spices, milk",
            image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2022/02/Chai-Latte-5.jpg",},
            { name: "Hot Choco", price: "₱100",
            description: "Treat yourself to a comforting cup of rich and creamy hot chocolate. ",
            image:"https://feelgoodfoodie.net/wp-content/uploads/2021/11/how-to-make-hot-chocolate-7.jpg",
            ingredients: "Ingredients: Cocoa powder, milk, sugar",},
            { name: "Mocha Coffee", price: "₱100",
            description: "Enjoy the perfect harmony of dark chocolate and espresso in our irresistible mocha coffee.",
            image:"https://gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-Square.jpg",
            ingredients: "Ingredients: Espresso, chocolate syrup, milk",}
        ],

        "cold" : [
            {name: "Strawberry Shake", price: "₱20",
            description: "Refresh yourself with the fruity goodness of our strawberry shake.",
            image:"https://livinghealthywithchocolate.com/wp-content/uploads/2016/02/Paleo-Strawberry-Milkshake-dairy-free-sugar-free-gluten-free.jpg",
            ingredients: "Ingredients: Strawberries, milk, sugar",},
            {name: "Raspberry Fizz Shake", price: "₱20",
            description: "Experience a burst of flavor with our sparkling raspberry fizz shake.",
            image:"https://www.cookswithcocktails.com/wp-content/uploads/2016/06/Gin-Fizz-5.jpg",
            ingredients: "Ingredients: Raspberries, soda water, sugar",},
            {name: "Mixed Berries Shake", price: "₱20",
            description: "Indulge in the refreshing blend of mixed berries in our delicious shake.",
            image:"https://cookingformysoul.com/wp-content/uploads/2022/05/mixed-berry-smoothie-2-min.jpg",
            ingredients: "Ingredients: Mixed berries, yogurt, honey",},
            {name: "Mango Shake", price: "₱20",
            description: "Savor the tropical delight of fresh mangoes in our creamy shake.",
            image:"https://www.ambitiouskitchen.com/wp-content/uploads/2019/08/Mango-Pineapple-Coconut-Smoothie-4-725x725.jpg",
            ingredients: "Ingredients: Mangoes, milk, ice cream",},
            {name: "Iced Coffee", price: "₱20",
            description: "Cool down with our invigorating iced coffee, perfect for any time of the day.",
            image:"https://www.tamingtwins.com/wp-content/uploads/2018/07/iced-coffee-recipe-11.jpg",
            ingredients: "Ingredients: Cold brew coffee, ice, milk",},
            {name: "Berry Almond Shake", price: "₱20",
            description: "Enjoy the nutty sweetness of almonds paired with luscious berries in our shake.",
            image:"https://www.theendlessmeal.com/wp-content/uploads/2014/04/Very-Berry-Smoothie-3.jpg",
            ingredients: "Ingredients: Almonds, mixed berries, milk",},
            {name: "Avocado Shake", price: "₱20",
            description: "Experience the creamy goodness of avocado in our refreshing shake.",
            image:"https://www.thespruceeats.com/thmb/RLDzyLxDroJvsLJ4tscR38K8fBQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/avocado-mango-smoothie-recipe-3377400-hero-01-5c8d20e846e0fb0001770069.jpg",
            ingredients: "Ingredients: Avocado, milk, sugar",}
        ],

        "sandwich" : [
            {name: "Tuna Salad Sandwich", price: "₱20",
            description: "Dive into the flavors of the sea with our savory tuna salad sandwich.",
            image:"https://fantabulosity.com/wp-content/uploads/2022/05/Tuna-Salad-Recipe-25.jpg",
            ingredients: "Ingredients: Tuna, mayonnaise, celery",},
            {name: "Pickle Grilled Sandwich", price: "₱20",
            description: "Satisfy your cravings with the tangy goodness of our pickle grilled sandwich.",
            image:"https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/desktop%20images/2018_salami-pickle-grilled-cheese_20348_desktop.jpg?ext=.jpg",
            ingredients: "Ingredients: Pickles, cheese, bread",},
            {name: "Pepperoni Pizza Sandwich", price: "₱20",
            description: "Indulge in the taste of Italy with our savory pepperoni pizza sandwich.",
            image:"https://dinnersdishesanddesserts.com/wp-content/uploads/2017/01/Pepperoni-Pizza-Grilled-Cheese-3-square.jpg",
            ingredients: "Ingredients: Pepperoni, marinara sauce, cheese",},
            {name: "Peanut Butter and Jelly Sandwich", price: "₱20",
            description: "Relive childhood memories with our classic peanut butter and jelly sandwich.",
            image:"https://www.peanutbutter.com/wp-content/uploads/2022/03/Web_500_Classic-Peanut-Butter-Jelly-Sandwich.png",
            ingredients: "Ingredients: Peanut butter, jelly, bread",},
            {name: "Monte Cristo Sandwich", price: "₱20",
            description: "Treat yourself to a gourmet experience with our indulgent Monte Cristo sandwich.",
            image:"https://www.thechunkychef.com/wp-content/uploads/2016/05/Monte-Cristo-Sandwiches-1.jpg",
            ingredients: "Ingredients: Ham, turkey, Swiss cheese",},
            {name: "Ham and Cheese Sandwich", price: "₱20",
            description: "Enjoy a classic favorite with our hearty ham and cheese sandwich.",
            image:"https://cheeseknees.com/wp-content/uploads/2022/12/Grilled-Ham-and-Cheese-sq.jpg",
            ingredients: "Ingredients: Ham, cheese, bread",},
            {name: "Egg Sandwich", price: "₱20",
            description: "Start your day right with our protein-packed egg sandwich.",
            image:"https://www.allthingsmamma.com/wp-content/uploads/2023/03/egg-and-cheese-sandwich-hero-5-scaled.jpg",
            ingredients: "Ingredients: Eggs, cheese, bread",},
            {name: "Chicken Sandwich", price: "₱20",
            description: "Sink your teeth into our juicy chicken sandwich, bursting with flavor.",
            image:"https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/449789.jpg",
            ingredients: "Ingredients: Grilled chicken, lettuce, tomato",},
            {name: "BLT Sandwich", price: "₱20",
            description: "Enjoy the timeless combination of crispy bacon, fresh lettuce, and ripe tomatoes in our BLT sandwich. ",
            image:"https://littlesunnykitchen.com/wp-content/uploads/2022/07/BLT-Sandwich-1-800x1200.jpg",
            ingredients: "Ingredients: Bacon, lettuce, tomato, bread",},
            {name: "Bacon Sandwich", price: "₱20",
            description: "Indulge in the savory goodness of bacon in our irresistible sandwich.",
            image:"https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/desktopimages/2019_df_retail_bacon-pimento-cheese-grilled-cheese_20883_cropped_600.jpg?ext=.jpg",
            ingredients: "Ingredients: Bacon, cheese, bread",}
        ]
    };

    return items[category][index];
}



// carousel js

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".menu-carousel");
const firstCardWidth = carousel.querySelector(".menu-card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);