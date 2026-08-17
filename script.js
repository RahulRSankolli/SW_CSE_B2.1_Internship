//script.js- First connection to portfolio !
 
//1. Check that JS is working
console.log("Javascript is connected!🚀");
 
//2.Display the current year in the footer
const footerYear = document.querySelector('.footer-year');
console.log(footerYear);
if(footerYear){
    footerYear.textContent = new Date().getFullYear();
}
 
//3. Greeting based on time of day
const getGreeting = () => {
    const hour = new Date().getHours();
    console.log(hour);
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
}
const heroTitle = document.querySelector('.hero-section h1');
console.log(heroTitle);
if(heroTitle){
    heroTitle.textContent = `${getGreeting()}, I'm Rahul 👋`;
}
// ==== MOBILE MENU TOGGLE ===
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () =>{
    navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',navLinks.classList.contains('open'));
});

// === SCROLL-BASED NAVBAR STYLING ====
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () =>{
    if (window.scrollY > 50){
        header.classList.add('scrolled')
    }
    else{
        header.classList.remove('scrolled')
    }
})

// === ACTIVE NAV LINK on scroll ====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () =>{
    let current ='';
    sections.forEach(section =>{
        if(window.scrollY >= section.offsetTop-100){
            current=section.getAttribute('id');
        }
    })
    navItems.forEach(link =>{
        link.classList.remove('active');
        if(link.getAttribute('href') === #${current}) {
            link.classList.add('active');
        }
    })
})

/ === FORM & INPUT HANDLING ===
const myForm = document.querySelector('#myForm');
const userInput = document.querySelector('#userInput');

if (myForm) {
    myForm.addEventListener('submit', (e) => {
        // 1. Prevent form submission (stops page refresh)
        e.preventDefault();

        // Get the current value from the input box
        const inputValue = userInput.value;

        // 2. Print input value in console
        console.log("User Input:", inputValue);

        // 3. Show alert on button click
        alert(Entered Value: ${inputValue});
    });
}
// === FORM & INPUT HANDLING ===
const myForm = document.querySelector('#myForm');
const userInput = document.querySelector('#userInput');

if (myForm) {
    myForm.addEventListener('submit', (e) => {
        // 1. Prevent form submission (stops page refresh)
        e.preventDefault();

        // Get the current value from the input box
        const inputValue = userInput.value;

        // 2. Print input value in console
        console.log("User Input:", inputValue);

        // 3. Show alert on button click
        alert(Entered Value: ${inputValue});
    });
}
// === DAY 11: ASYNC, FETCH & LOCAL STORAGE ===

// --- 1. setTimeout ---
const asyncOutput = document.querySelector('#async-output');
const btnPizza = document.querySelector('#btn-pizza');
const btnSalad = document.querySelector('#btn-salad');

if (btnPizza && btnSalad) {
    btnPizza.addEventListener('click', () => {
        asyncOutput.textContent += "\n> 🍕 Pizza ordered! Cooking...";
        setTimeout(() => {
            asyncOutput.textContent += "\n> ✅ DING! Pizza is ready!";
        }, 3000);
    });

    btnSalad.addEventListener('click', () => {
        asyncOutput.textContent += "\n> 🥗 Salad prepared instantly!";
    });
}

// --- 2. Fetch API ---
const btnFetch = document.querySelector('#btn-fetch');

if (btnFetch) {
    btnFetch.addEventListener('click', async () => {
        const fetchText = document.querySelector('#fetch-text');
        const loader = document.querySelector('#loader');

        btnFetch.disabled = true;
        fetchText.style.display = 'none';
        loader.style.display = 'block';

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            if (!response.ok) throw new Error(HTTP ${response.status});

            const user = await response.json();
            console.log('User Data:', user);

            fetchText.style.display = 'block';
            fetchText.textContent = Name: ${user.name}\nEmail: ${user.email}\nCity: ${user.address.city};
        } catch (error) {
            fetchText.style.display = 'block';
            fetchText.textContent = "❌ Error fetching data!";
            console.error(error);
        } finally {
            loader.style.display = 'none';
            btnFetch.disabled = false;
        }
    });
}

// --- 3. Local Storage ---
const secretInput = document.querySelector('#secret-input');
const savedText = document.querySelector('#saved-text');
const btnSave = document.querySelector('#btn-save');
const btnClear = document.querySelector('#btn-clear');

if (btnSave && btnClear) {
    const saved = localStorage.getItem('mySecret');
    if (saved) savedText.textContent = saved;

    btnSave.addEventListener('click', () => {
        const value = secretInput.value.trim();
        if (!value) return;
        localStorage.setItem('mySecret', value);
        savedText.textContent = value;
        secretInput.value = '';
    });

    btnClear.addEventListener('click', () => {
        localStorage.removeItem('mySecret');
        savedText.textContent = 'None';
    });
}