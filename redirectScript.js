
function redirect() {
    var query;
    query = document.getElementById("fk-top-search-box").value;
    switch (query) {
        case "sarees":
            window.location.replace("Sarees.html");
            break;
        case "handicraft":
            window.location.replace("http://www.flipkart.com/search?q=jeans&as=off&as-show=on&otracker=start");
            break;
        case "jeans":
            window.location.replace("jeans.html");
            break;
        default:
            window.location.replace("http://www.flipkart.com/");
    }
    return false;
}
