// Function to show menu on hover
function showMenu(category, event) {
    // Define menu items for each category
    const menItems = ['T-Shirts', 'Shirts', 'Jeans', 'Trousers', 'Shorts'];
    const womenItems = ['Dresses', 'Tops', 'Jeans', 'Skirts', 'Shorts'];
    const kidsItems = ['Boys Clothing', 'Girls Clothing', 'Infants Clothing', 'Kids Shoes', 'Kids Accessories'];
    const homeLivingItems = ['Bedsheets', 'Curtains', 'Cushions', 'Home Decor', 'Furniture'];
    const beautyItems = ['Skincare', 'Makeup', 'Haircare', 'Fragrances', 'Personal Care'];

    // Clear any existing menu content
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = '';

    // Determine which category was hovered over and populate the menu accordingly
    let items;
    switch (category) {
        case 'men':
            items = menItems;
            break;
        case 'women':
            items = womenItems;
            break;
        case 'kids':
            items = kidsItems;
            break;
        case 'home-living':
            items = homeLivingItems;
            break;
        case 'beauty':
            items = beautyItems;
            break;
        default:
            items = [];
    }

    // Create and append list items to the menu container
    const list = document.createElement('ul');
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });
    menuContainer.appendChild(list);

    // Position the menu below the navigation link
    const navLink = event.target;
    const navLinkPosition = navLink.getBoundingClientRect();
    menuContainer.style.top = `${navLinkPosition.bottom}px`;
    menuContainer.style.left = `${navLinkPosition.left}px`;

    // Show the menu
    menuContainer.style.display = 'block';
}

// Function to hide menu with a delay
let hideTimer;
function hideMenuDelayed() {
    hideTimer = setTimeout(() => {
        const menuContainer = document.getElementById('menu-container');
        menuContainer.style.display = 'none';
    }, 8000); 
}

// Function to cancel the hide menu delay
function cancelHideMenu() {
    clearTimeout(hideTimer);
}

// Get all navigation links
const navLinks = document.querySelectorAll('.nav_bar a');

// Add event listeners to each navigation link
navLinks.forEach(link => {
    // Show menu on hover
    link.addEventListener('mouseenter', function(event) {
        const category = this.getAttribute('data-category');
        showMenu(category, event);
    });

    // Hide menu with delay
    link.addEventListener('mouseleave', hideMenuDelayed);
});

// Get all menu items
const menuItems = document.querySelectorAll('#menu-container li');

// Add event listeners to each menu item to change color on hover
menuItems.forEach(item => {
    item.addEventListener('mouseenter', function(event) {
        this.style.color = 'pink';
    });

    item.addEventListener('mouseleave', function(event) {
        this.style.color = ''; // Revert to default color
    });
});

// Add event listener to cancel hide menu delay when mouse enters the menu
const menuContainer = document.getElementById('menu-container');
menuContainer.addEventListener('mouseenter', cancelHideMenu);

// Add event listener to hide menu when mouse leaves the menu
menuContainer.addEventListener('mouseleave', hideMenuDelayed);

// Function to show a popup message
function showMessage(message) {
    alert(message);
}

// Get all action containers
const actionContainers = document.querySelectorAll('.action_container');

// Add event listener to each action container
actionContainers.forEach(container => {
    container.addEventListener('click', function() {
        const actionName = this.querySelector('.action_name').textContent;
        let message;
        switch (actionName.toLowerCase()) {
            case 'profile':
                message = 'Opening profile...';
                break;
            case 'wishlist':
                message = 'Item added to your wishlist successfully.';
                break;
            case 'bag':
                message = 'Item added to your bag successfully.';
                break;
            default:
                message = '';
        }
        showMessage(message);
    });
});

