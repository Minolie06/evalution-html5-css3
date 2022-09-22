function showOverlay(overlayToShow) {
    const overlays = document.querySelectorAll('.overlay')
    overlays.forEach(overlay => {
        overlay.classList.remove('visible')
    })
    overlayToShow.classList.add('visible')
}

const portfolioFilterItems = document.querySelectorAll('.portfolio-filter-item')
const portfolioItems = document.querySelectorAll('.portfolio-grid-item')
const blogItems = document.querySelectorAll('.blog-grid-item-illustration')


for (let i = 0; i < portfolioFilterItems.length; i++) {
    const filterItem = portfolioFilterItems[i];
    filterItem.addEventListener('click', () => {
        //fonction de filtre à implémenter ici
        for (let j = 0; j < portfolioFilterItems.length; j++) {
            portfolioFilterItems[j].classList.remove('active')
        }
        filterItem.classList.add('active')
    })
    
}

portfolioItems.forEach(item => {
    item.addEventListener('click', (event) => {
        const overlay = event.target.previousElementSibling
        showOverlay(overlay)
    })
});

blogItems.forEach(item => {
    item.addEventListener('click', (event) => {
        const overlay = event.target.nextElementSibling.children[0];
        showOverlay(overlay)
    })
});


document.getElementById('contact-btn-send').addEventListener('click', () => {
    document.getElementById('contact-form').submit();
})