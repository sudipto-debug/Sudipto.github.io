window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }
    else{
        header.style.boxShadow = "none";
    }
});
