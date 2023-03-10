const menu = document.querySelectorAll('.collapsible');


menu.forEach((item) => {
    item.addEventListener('click', function ()  {
        this.classList.toggle("collapsible--expanded")
    })
})