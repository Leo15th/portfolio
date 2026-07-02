import './style.css'

// mobile menu icon
const mobileMenuIcon = document.getElementById("mobile-menu-icon")
const line1 = document.getElementById("line-1")
const line2 = document.getElementById("line-2")
const line3 = document.getElementById("line-3")
const mobileMenu = document.getElementById("mobile-menu")
let isOpen = false;
mobileMenuIcon.addEventListener("click",()=>{
    isOpen = !isOpen;

    if(isOpen){
        line1.style.transform = "rotate(45deg) translate(5px, 6px)"
        line2.style.transform ="translateX(30px)"
        setTimeout(() => {
            line2.style.opacity = "0"
        }, 50);
        line3.style.transform = "rotate(-45deg) translate(5px, -6px)"
        mobileMenu.classList.remove("hidden", "translate-x-full", "opacity-0", "pointer-events-none")
        mobileMenu.classList.add("translate-x-0", "opacity-100", "pointer-events-auto")
    }else{
        line1.style.transform = "rotate(0deg) translate(0, 0)"
        line2.style.transform= "translateX(0)"
        setTimeout(()=>{
            line2.style.opacity = "1"
        },50);
        line3.style.transform = "rotate(0deg) translate(0,0)"
        mobileMenu.classList.remove("translate-x-0", "opacity-100", "pointer-events-auto")
        mobileMenu.classList.add("translate-x-full", "opacity-0", "pointer-events-none")
    }
})

// web 3 form js start
const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "7a4773e1-2a94-4ac8-a815-c84bcbd652ab");

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
            form.reset();
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
// web 3 form js end