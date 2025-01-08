function upDate(previewPic) {
    console.log("Event triggered");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").innerHTML = previewPic.alt;
}

function undo() {
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
