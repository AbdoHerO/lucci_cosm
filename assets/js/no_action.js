document.addEventListener("DOMContentLoaded", function () {
    var colorSelect = document.getElementById("product_color");
    var sizeSelect = document.getElementById("product_size");
    var orderButton = document.getElementById("save_guest_order");

    function checkAvailability() {
        var selectedColor = colorSelect.value;
        var selectedSize = sizeSelect.value;

        // Vérifiez si la couleur est "gris" et la taille est "M" ou "L"
        if (selectedColor === "gris" && (selectedSize === "M" || selectedSize === "L")) {
            // Désactivez le bouton de commande et affichez un message
            orderButton.disabled = true;
            // colorSelect.value = "";
            sizeSelect.value = "";

            alert("اللون الرمادي غير متوفر في هذا المقاس. المرجو إختيار لون آخر.");
        } else {
            // Activez le bouton de commande si la condition n'est pas remplie
            orderButton.disabled = false;
        }
    }

    // Vérifiez l'indisponibilité au chargement de la page
    checkAvailability();

    // Ajoutez un événement "change" aux sélecteurs de couleur et de taille
    colorSelect.addEventListener("change", checkAvailability);
    sizeSelect.addEventListener("change", checkAvailability);
});