document.addEventListener('DOMContentLoaded', () => {
    // Burger Menu Logic
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (burgerMenu && nav) {
        burgerMenu.addEventListener('click', () => {
            nav.classList.toggle('active');
            burgerMenu.classList.toggle('active');
            
            // Toggle burger icon animation if needed
            const spans = burgerMenu.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                burgerMenu.classList.remove('active');
                const spans = burgerMenu.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Services Accordion Logic
    const serviceItems = document.querySelectorAll('.service-accordion-item');

    serviceItems.forEach(item => {
        const header = item.querySelector('.service-accordion-header');
        
        header.addEventListener('click', () => {
            // Close other items
            serviceItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const body = otherItem.querySelector('.service-accordion-body');
                    body.style.maxHeight = null;
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            const body = item.querySelector('.service-accordion-body');
            
            if (item.classList.contains('active')) {
                body.style.maxHeight = body.scrollHeight + "px";
            } else {
                body.style.maxHeight = null;
            }
        });
    });
});

