// Sample car data (in a real application, this would come from a backend)
const cars = [
    {
        id: 1,
        name: '2018 Honda City V',
        price: 550000,
        km: 45000,
        fuel: 'Petrol',
        transmission: 'Manual',
        brand: 'honda',
        image: 'https://source.unsplash.com/featured/?honda,car'
    },
    {
        id: 2,
        name: '2020 Hyundai i20 Sportz',
        price: 750000,
        km: 25000,
        fuel: 'Petrol',
        transmission: 'Manual',
        brand: 'hyundai',
        image: 'https://source.unsplash.com/featured/?hyundai,car'
    },
    {
        id: 3,
        name: '2019 Toyota Innova Crysta',
        price: 1200000,
        km: 35000,
        fuel: 'Diesel',
        transmission: 'Automatic',
        brand: 'toyota',
        image: 'https://source.unsplash.com/featured/?toyota,car'
    },
    {
        id: 4,
        name: '2021 Maruti Swift ZXi',
        price: 650000,
        km: 15000,
        fuel: 'Petrol',
        transmission: 'Manual',
        brand: 'maruti',
        image: 'https://source.unsplash.com/featured/?suzuki,car'
    },
    {
        id: 5,
        name: '2017 Honda Jazz',
        price: 450000,
        km: 55000,
        fuel: 'Petrol',
        transmission: 'Manual',
        brand: 'honda',
        image: 'https://source.unsplash.com/featured/?honda,jazz'
    },
    {
        id: 6,
        name: '2020 Toyota Fortuner',
        price: 2800000,
        km: 20000,
        fuel: 'Diesel',
        transmission: 'Automatic',
        brand: 'toyota',
        image: 'https://source.unsplash.com/featured/?toyota,suv'
    }
];

// DOM Elements
const carGrid = document.getElementById('carGrid');
const searchInput = document.getElementById('searchInput');
const brandFilter = document.getElementById('brandFilter');
const fuelFilter = document.getElementById('fuelFilter');
const priceFilter = document.getElementById('priceFilter');
const sortFilter = document.getElementById('sortFilter');

// Filter and display cars
function filterAndDisplayCars() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedBrand = brandFilter.value;
    const selectedFuel = fuelFilter.value;
    const selectedPrice = priceFilter.value;
    const sortBy = sortFilter.value;

    let filteredCars = cars.filter(car => {
        // Search filter
        if (!car.name.toLowerCase().includes(searchTerm)) return false;

        // Brand filter
        if (selectedBrand && car.brand !== selectedBrand) return false;

        // Fuel filter
        if (selectedFuel && car.fuel.toLowerCase() !== selectedFuel) return false;

        // Price filter
        if (selectedPrice) {
            const [min, max] = selectedPrice.split('-').map(Number);
            if (max) {
                if (car.price < min || car.price > max) return false;
            } else {
                if (car.price < min) return false;
            }
        }

        return true;
    });

    // Sort cars
    filteredCars.sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'recent':
                return b.id - a.id;
            default:
                return 0;
        }
    });

    displayCars(filteredCars);
}

// Display cars in the grid
function displayCars(carsToDisplay) {
    carGrid.innerHTML = carsToDisplay.map(car => `
        <div class="car-card">
            <img src="${car.image}" alt="${car.name}">
            <div class="car-info">
                <h3>${car.name}</h3>
                <div class="car-specs">
                    <span>${car.km.toLocaleString()} KM</span>
                    <span>${car.fuel}</span>
                    <span>${car.transmission}</span>
                </div>
                <div class="car-price">₹${(car.price).toLocaleString()}</div>
                <a href="contact.html" class="cta-button">Enquire</a>
            </div>
        </div>
    `).join('');
}

// Event listeners
searchInput.addEventListener('input', filterAndDisplayCars);
brandFilter.addEventListener('change', filterAndDisplayCars);
fuelFilter.addEventListener('change', filterAndDisplayCars);
priceFilter.addEventListener('change', filterAndDisplayCars);
sortFilter.addEventListener('change', filterAndDisplayCars);

// Initial display
document.addEventListener('DOMContentLoaded', () => {
    filterAndDisplayCars();
});