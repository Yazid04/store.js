const storeData =
    [
        {
            id: 1,
            icon: '♡',
            itemPrice: "59",
            itemImg: "./imgs/headphones-removebg-preview.png",
            itemInfo: `Srhythm NC25 Active Noise Cancelling Headphones Bluetooth 5.0`,
            category: 'Tech',
        },
        {
            id: 2,
            icon: '♡',
            itemPrice: "30",
            itemImg: "/imgs/img-item-removebg-preview.png",
            itemInfo: `HJWWIN Men's Slimswe Fit Lightweight Softshel`,
            category: 'Clothes',
        },
        {
            id: 3,
            icon: '♡',
            itemPrice: "132.78",
            itemImg: "./imgs/itemTV-removebg-preview.png",
            itemInfo: `Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers`,
            category: 'Tech',
        },
        {
            id: 4,
            icon: '♡',
            itemPrice: "44",
            itemImg: "./imgs/item.jean1-removebg-preview.png",
            itemInfo: `Ruisin Classic High Waist Jeans for Women`,
            category: 'Clothes',
        },
        {
            id: 5,
            icon: '♡',
            itemPrice: "28,50",
            itemImg: "./imgs/keyboard-removebg-preview.png",
            itemInfo: `Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless, Compact Mouse`,
            category: 'Tech',
        },
        {
            id: 6,
            icon: '♡',
            itemPrice: "34",
            itemImg: "./imgs/shoe-removebg-preview.png",
            itemInfo: `White shoes new fashion casual students`,
            category: 'Clothes',
        },
        {
            id: 7,
            icon: '♡',
            itemPrice: "170.50",
            itemImg: "./imgs/greenChair-removebg-preview.png",
            itemInfo: `RESPAWN 110 Chair, Green`,
            category: 'Tech',
        },
        {
            id: 8,
            icon: '♡',
            itemPrice: "19.99",
            itemImg: "./imgs/blue-tshirt-removebg-preview.png",
            itemInfo: `Control all the Things Video Game Controller T-shirt`,
            category: 'Clothes',
        },
        {
            id: 9,
            icon: '♡',
            itemPrice: "1859,000",
            itemImg: "./imgs/laptop-removebg-preview.png",
            itemInfo: `MSI GE76 Raider Gaming Laptop Intel Core i7-11800H, GeForce RTX 3060, 17.3" FHD 144HZ, 32GB RAM2TB NVMe SSD, Wi-Fi6`,
            category: 'Tech',
        },
        {
            id: 10,
            icon: '♡',
            itemPrice: "16.99",
            itemImg: "./imgs/hat-removebg-preview.png",
            itemInfo: `NUZADA Baseball Cap Snapback Hats for Men Trucker Gaming Flat Bill`,
            category: 'Clothes',
        },
        {
            id: 11,
            icon: '♡',
            itemPrice: "19.99",
            itemImg: "./imgs/mouse-removebg-preview.png",
            itemInfo: `BENGOO Gaming Mouse Wired, USB Optical Computer Mice with RGB Backlit, 4 Adjustable DPI Up to 3600!`,
            category: 'Tech',
        },
        {
            id: 12,
            icon: '♡',
            itemPrice: "22.60",
            itemImg: "./imgs/beachtshirt-removebg-preview.png",
            itemInfo: `EUOW Men's Summer Beach Hawaiian Shirt Short`,
            category: 'Clothes',
        }
    ]

const contentSection = document.getElementById("content")
const navbarOptions = document.querySelectorAll(".nav-options");
const carBtn = document.querySelector(".cart-btn");
const cartList = document.querySelector(".cartList");
const btnCart = document.querySelector(".cartBtn");



window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(storeData);
    toggleCartList();
    const cartBtns = document.querySelectorAll(".addToCartBtn");
    cartBtns.forEach(btn => addToCartBtns(btn));
});



function addToCartBtns(btn) {
    btn.addEventListener("click", (e) => {
        const btnClicked = e.currentTarget;
        const itemImg = btnClicked.parentElement.parentElement.querySelector(".item-img").children[0].src;
        const itemPrice = btnClicked.parentElement.parentElement.querySelector(".price").innerText;
        shoppingItems(itemImg, itemPrice);
    })
}



function shoppingItems(itemImg, itemPrice) {
    const itemContainer = document.querySelector(".cartList");
    const ItemWrapper = document.createElement("main");
    ItemWrapper.classList.add("shopListContainer");

    let children = itemContainer.children;

    for (let i = 0; i < children.length; i++) {
        let element = children[i];
        if (element.querySelector(".img").children[0].src === itemImg) {
            alert("This item is already in list")
            return
        }
    }
    const content = `<div class="imgHolder">
                               <div class="img"><img src="${itemImg}" alt="blue Beach t-shirt"></div>
                            </div>
                            <div class="itemPrice"> ${itemPrice} </div>
                            <div class="addOrMins">
                               <input type="number" value="1" class="quantity" name="quantity" min="1" max="">
                               <button type="button" class="btnDelete">Remove</button>
                            </div>`;

    const newset = content.replace("``", "");
    ItemWrapper.innerHTML = newset;
    itemContainer.append(ItemWrapper);

    for (let i = 0; i < children.length; i++) {
        const item = children[i];
        const itemDeleteBtn = item.querySelectorAll(".btnDelete");
        itemDeleteBtn.forEach(btnDanger => {
            btnDanger.addEventListener("click", deleteItem)
        })
    }
    for (let i = 0; i < children.length; i++) {
        const element = children[i];
        updateItem(element);
    }
}


function deleteItem(e) {
    const clickedBtn = e.target.parentElement.parentElement;
    clickedBtn.remove();
}



function updateItem(element) {
    const elementInputValue = element.querySelector(".quantity")
    const elementPrice = parseFloat(element.querySelector(".itemPrice").innerText.replace("$", ""));
    elementInputValue.addEventListener("change", () => {
        // Any ideas? :)
    })
}



function calculateTotal() {
    document.querySelector('.totalPrice').addEventListener("click", () => {
        const boughtItemsList = document.querySelector(".cartList");
        if (boughtItemsList.children.length == 0) {
            alert("Your Cart list is Empty :)")
            return
        } else {
            const container = document.querySelector(".cartList").children;
            let sum = 0;
            for (let i = 0; i < container.length; i++) {
                let element = container[i];
                let boughtItemPrice = parseFloat(element.querySelector(".itemPrice").innerText.replace("$", ""));
                let boughtItemQuantity = parseFloat(element.querySelector(".quantity").value);
                let total = boughtItemPrice * boughtItemQuantity;
                sum = Math.round(sum + total) * 100 / 100;
            }
            alert(`Thanks for visiting our Store, your total is: $${sum}`);
            boughtItemsList.innerHTML = "";
        }
    });
}
calculateTotal();




navbarOptions.forEach(item => {
    item.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        const newCategory = storeData.filter(filteredItem => {
            if (filteredItem.category == category) {
                return filteredItem;
            }
        })
        if (category === 'Home') {
            displayMenuItems(storeData);
        } else {
            displayMenuItems(newCategory);
        }
    })
})



function displayMenuItems(menuItems) {
    let DisplayContent = menuItems.map((item) => {

        return `<main class="item-container">
        <div class="item-price-container">
            <div class="heart-Icon">${item.icon}</div>
            <div class="price">$${item.itemPrice}</div>
        </div>
        <div class="item-img">
            <img src="${item.itemImg}" alt="jacket image">
        </div>
        <div class="item-info_cart-Container">
            <div class="item-info">
                <h5>${item.itemInfo}</h5>
            </div>
            <div class="addToCartBtn">
                <button class="btns" type="button"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>
    </main>`
    })
    DisplayContent = DisplayContent.join("");
    contentSection.innerHTML = DisplayContent;
}



function toggleCartList() {
    btnCart.addEventListener("click", () => {
        cartList.classList.toggle("cartListOpened");
        btnCart.classList.toggle("cartListOpened");
    })
}