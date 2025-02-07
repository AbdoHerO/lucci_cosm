$(document).ready(function() {

    
$("#formInfo").submit(function(event) {
  // Function to get URL parameter by name
  var trafic_name = "";
  function hasFbclidParameter() {
      var url = window.location.href;
      url.indexOf('fbclid') !== -1 ? trafic_name = 'Facebook' : '';
      url.indexOf('ttclid') !== -1 ? trafic_name = 'Tiktok' : '';
      url.indexOf('gclid') !== -1 ? trafic_name = 'Google Ads' : '';
  }
  hasFbclidParameter();

  // show loading icon and disable the button
  $("#save_guest_order").prop("disabled", true);
  $("#span_loading").show();

  // Prevent the default form submission
  event.preventDefault();

  // Get the updated data from the form
  var fullname = $('#formInfo input[name="fullname"]').val();
  var phone = $('#formInfo input[name="phone"]').val();
  var adresse = $('#formInfo input[name="adresse"]').val();
  var ville = $('#formInfo input[name="ville"]').val();
  var variant = $('#tier_variante').val();
  var price = $('#price_tiers').val();

  // Check if the variant is selected
  if (!variant) {
      $("#save_guest_order").prop("disabled", false);
      $("#span_loading").hide();
      $('#error-message').show();
      return;
  }

  // Determine the value of 'marchandise' based on the selected variant
  var marchandise = "";
  switch (variant) {
      case "1":
          marchandise = "Shampoing + antichute";
          break;
      case "2":
          marchandise = "Shampoing + Après-Shampoing";
          break;
      case "3":
          marchandise = "Pack NIVANA antichute ";
          break;
      default:
          marchandise = "Pack NIVANA antichute";
  }

  var sheetDBData = {
    name: 'Nivana Pack',
    date: new Date().toString(),
    customer_name: fullname,
    phone: phone,
    city: "-",
    address: adresse,
    quantity: variant,
    price: price,
    product_notice: "",
    notice: marchandise,
    status: "pending",
    fees_shipping: "",
    size: "",
  };

  // Insert into SheetDB API
  fetch("https://sheetdb.io/api/v1/7fx0hvcoif8ln", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer ux1k9fr5xpgbxe16vl4gjdkk4aw5l32cnhwmtc16"
    },
    body: JSON.stringify({ data: sheetDBData }),
  })
  .then(function(response) {
      console.log("response", response);
      console.log("sent");
      if (response.ok) {
          console.log("Order added to SheetDB successfully");
          fbq("track", "Purchase", {
              value: 50,
              currency: "USD",
              content_name: "Brun",
              content_type: "Home & Kitchen",
              product_id: "1127",
          });

          document.location.href = "../pack/order_success.html";
      } else {
          console.log("Failed to add order to SheetDB");
          $("#save_guest_order").prop("disabled", false);
          $("#span_loading").hide();
          console.log("Error :", error);
      }
  })
  .catch(function(error) {
      console.log("NOT sent");
      console.log("Error:", error);
      
      $("#save_guest_order").prop("disabled", false);
      $("#span_loading").hide();
      console.log("Error :", error);
  });
});

// Update price and variant values on selection
const options = document.querySelectorAll('.option-item');
const hiddenInput = document.getElementById('tier_variante');
const priceDisplayed = document.getElementById('price_displayed');
const priceInput = document.getElementById('price_tiers');

options.forEach(option => {
  option.addEventListener('click', function() {
      options.forEach(opt => opt.classList.remove('selected'));
      this.classList.add('selected');
      hiddenInput.value = this.getAttribute('data-value');
      const price = this.getAttribute('data-price');
      priceDisplayed.innerText = price;
      priceInput.value = price;
  });
});
});