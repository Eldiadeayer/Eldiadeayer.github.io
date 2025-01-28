document.addEventListener("scroll", () => {
    const h1 = document.querySelector("h1");
    const scrollPosition = window.scrollY + window.innerHeight;
    const h1Position = h1.offsetTop + h1.clientHeight / 2; 

    if (scrollPosition >= h1Position) {
        h1.classList.add("visible");
    }
});
