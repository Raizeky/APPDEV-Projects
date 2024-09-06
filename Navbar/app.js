const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
navToggle.addEventListener('click',() => {
    console.log(links.classList)
    //console.log(links.classList) //controls the element link
    //console.log(links.classLinks.contains('links')) //this references our specific element links
    /*if(links.classList.contains('show-links')){
        links.classList.remove('show-links')
    }
    else{
        links.classList.add('show-links')
    }*/
    links.classList.toggle('show-links') //the same as our if statement onb line 6 to 11
})