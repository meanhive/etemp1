var obj;

function loadPage() {
    obj = setTimeout(displayPage,3000);
}


function displayPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
}