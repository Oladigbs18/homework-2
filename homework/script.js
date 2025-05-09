//to hover over an image below to display hereboth name and the alt text
function showPreview(preview){
    document.getElementById("image").style.backgroundImage = 'url('+preview.src + ')';

    document.getElementById("image").innerText = preview.alt;
    document.getElementById("image").style.color = "white";
}

function clearPreview(preview) {
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerText = "Hover over an image below to display here";
}