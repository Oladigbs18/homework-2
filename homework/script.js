//to hover over an image below to display hereboth name and the alt text
function showPreview(event) {
    const preview = event.target;
    const imageBox = document.getElementById("image");
    imageBox.style.backgroundImage = 'url(' + preview.src + ')';
    imageBox.innerText = preview.alt;
    imageBox.style.color = "white";
}

function clearPreview(event) {
    const imageBox = document.getElementById("image");
    imageBox.style.backgroundImage = "url('')";
    imageBox.innerText = "Hover over an image below to display here";
}

    // Function to run on page load
    function SetupImage() {
        const images = document.querySelectorAll(".view");

        for (let i = 0; i < images.length; i++) {
            const img = images[i];

          // Add tabindex so they can be focused by keyboard
        img.setAttribute("tabindex", "0");

          // Add mouse events
        img.addEventListener("mouseover", showPreview);
        img.addEventListener("mouseleave", clearPreview);

          // Add keyboard focus events
        img.addEventListener("focus", showPreview);
        img.addEventListener("blur", clearPreview);
        }

        console.log("SetupImage() completed — tabfocus added");
    }