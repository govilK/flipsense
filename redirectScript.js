
function redirect() {
    var query;
    query = document.getElementById("fk-top-search-box").value;
    switch (query) {
        case "sarees":
            window.location.replace("Sarees.html");
            break;
        case "handicrafts":
            window.location.replace("FlipkartHomePage.html");
            break;
        case "jeans":
            window.location.replace("jeans.html");
            break;
        default:
            window.location.replace("FlipkartHomePage.html");
    }
    return false;
}
