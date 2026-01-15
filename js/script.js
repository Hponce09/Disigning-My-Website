
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');
    
    // Toggle del menú
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Cerrar menú al hacer click en un enlace
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
});

const textsToChange = document.querySelectorAll("[data-section]")

const changeLanguage = async (language) =>{
    const requestJson = await fetch(`./lenguajes/${language}.json`)
    const texts = await requestJson.json()

    //console.log(texts)

    for(const textToChange of textsToChange){

        const section = textToChange.dataset.section
        const value = textToChange.dataset.value

        textToChange.innerHTML=texts[section][value]

    }
    
}

const falgsElement = document.getElementById('lenguajes');
 
falgsElement.addEventListener('click', (e) => {

    //console.dir(e.target)
    changeLanguage(e.target.parentElement.dataset.lang);

})
