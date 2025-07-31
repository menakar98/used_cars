// Testimonial Data
const testimonials = [
    {
        name: 'Rajesh Kumar',
        car: '2020 Honda City',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        quote: 'Excellent service and transparent dealing. Got my dream car at the best price!'
    },
    {
        name: 'Priya Sharma',
        car: '2019 Hyundai Creta',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        quote: 'Very professional team. The car inspection was thorough and they helped with all paperwork.'
    },
    {
        name: 'Arun Singh',
        car: '2021 Toyota Fortuner',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        quote: 'Best used car dealer in Chennai. Their after-sales service is exceptional!'
    }
];

// Featured Cars Data
const featuredCars = [
    {
        name: '2020 Hyundai i20 Sportz',
        price: '7,50,000',
        km: '25,000',
        fuel: 'Petrol',
        image: 'https://source.unsplash.com/featured/?hyundai,i20'
    },
    {
        name: '2019 Honda City VX',
        price: '8,75,000',
        km: '32,000',
        fuel: 'Petrol',
        image: 'https://source.unsplash.com/featured/?honda,city'
    },
    {
        name: '2021 Maruti Baleno Alpha',
        price: '6,90,000',
        km: '18,000',
        fuel: 'Petrol',
        image: 'https://source.unsplash.com/featured/?maruti,baleno'
    }
];

// Populate Featured Cars
function populateFeaturedCars() {
    const carGrid = document.querySelector('.car-grid');
    carGrid.innerHTML = featuredCars.map(car => `
        <div class="car-card">
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <div class="car-details">
                <span>₹${car.price}</span>
                <span>${car.km} KM</span>
                <span>${car.fuel}</span>
            </div>
            <a href="contact.html" class="contact-button">Contact Now</a>
        </div>
    `).join('');
}

// Populate Testimonials
function populateTestimonials() {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    testimonialSlider.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
            <p class="testimonial-quote">${testimonial.quote}</p>
            <div class="testimonial-author">
                <h4>${testimonial.name}</h4>
                <p>${testimonial.car}</p>
            </div>
        </div>
    `).join('');
}

// FAQ Accordion
function initializeAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all accordion items
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't already open
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Scroll Animation
function initializeScrollAnimation() {
    const elements = document.querySelectorAll('.about, .featured-cars, .process, .why-choose-us, .testimonials, .finance, .faq');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateFeaturedCars();
    populateTestimonials();
    initializeAccordion();
    initializeScrollAnimation();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});