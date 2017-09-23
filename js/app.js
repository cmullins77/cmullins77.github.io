function goToPortfolio() {
    window.location.href = "https://personal-website-cmullins7.c9users.io/portfolio.html";
}

function goToHome() {
    window.location.href = "https://personal-website-cmullins7.c9users.io/index.html";
}
function goToBio() {
    window.location.href = "https://personal-website-cmullins7.c9users.io/bio.html";
}
function goToContact() {
    window.location.href = "https://personal-website-cmullins7.c9users.io/contact.html";
}
function goToResume() {
    window.location.href = "https://personal-website-cmullins7.c9users.io/resume.html";
}

function nextImage() {
    var image = document.getElementsByClassName("image1");
    var style = window.getComputedStyle(image);
    var value = style.getPropertyValue("visibility")
    if (value == "visible") {
        document.getElementsByClassName("image1").style.visibility = "hidden";
        document.getElementsByClassName("image2").style.visibility = "visible";
    } else {
        document.getElementsByClassName("image1").style.visibility = "visible";
        document.getElementsByClassName("image2").style.visibility = "hidden";
    }
    
    
    
}