let changeImg = () => {
    let img = document.querySelector('img');
    
    let currentSrc = img.getAttribute("src");

    if (currentSrc == "images/1.jpg") {
        img.setAttribute("src", "images/2.avif");
    } else {
        img.setAttribute("src", "images/1.jpg");
    }
}