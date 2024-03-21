function calculateChangeFood() {
    var totalFood = 0;
    $("#col1 .menu-item").each(function() {
        var quantity = parseInt($(this).find(".item-quantity").val());
        var price = parseFloat($(this).find(".input-group-text").text().replace("₱", ""));
        totalFood += quantity * price;
    });
    var cashInputFood = parseFloat($("#payment-food").val()) || 0;
    var changeFood = cashInputFood - totalFood;
    $("#total-bill-food").val(totalFood.toFixed(2));
    $("#change-food").val(changeFood.toFixed(2));
}

function calculateChangeServices() {
    var totalServices = 0;
    $("#col2 .menu-item").each(function() {
        var quantity = parseInt($(this).find(".item-quantity").val());
        var price = parseFloat($(this).find(".input-group-text").text().replace("₱", ""));
        totalServices += quantity * price;
    });
    var cashInputServices = parseFloat($("#payment-services").val()) || 0;
    var changeServices = cashInputServices - totalServices;
    $("#total-bill-services").val(totalServices.toFixed(2));
    $("#change-services").val(changeServices.toFixed(2));
}

function calculateTotal() {
    var totalFood = parseFloat($("#total-bill-food").val()) || 0;
    var totalServices = parseFloat($("#total-bill-services").val()) || 0;
    var total = totalFood + totalServices;
    var cashInputCustomer = parseFloat($("#cash").val()) || 0;
    var changeCustomer = cashInputCustomer - total;
    $("#total-bill-customer").val(total.toFixed(2));
    $("#change-customer").val(changeCustomer.toFixed(2));
}

function orderProcessed(formId) {
    // Get customer information
    var firstName = $("#" + formId + " #first_name").val();
    var lastName = $("#" + formId + " #last_name").val();
    var email = $("#" + formId + " #email").val();
    var phone = $("#" + formId + " #phone").val();
    var region = $("#" + formId + " #region").val();
    var city = $("#" + formId + " #city").val();
    var street = $("#" + formId + " #street").val();
    var postalCode = $("#" + formId + " #postal_code").val();
    var cash = $("#" + formId + " #cash").val(); // Get cash input

    // Get order details
    var foodTotal = parseFloat($("#" + formId + " #total-bill-food").val()) || 0;
    var servicesTotal = parseFloat($("#" + formId + " #total-bill-services").val()) || 0;
    var total = foodTotal + servicesTotal;

    // Display order confirmation or perform further processing as needed
    if (!isNaN(total)) {
        alert("Thank you, " + firstName + " " + lastName + ", for your order!\n\nTotal amount: ₱" + total.toFixed(2));
    } else {
        alert("There was an error processing your order. Please try again.");
    }
}

$(document).ready(function() {
    // Populate cities on region change
    $("#region").change(function() {
        populateCities();
    });

    $("#cash").on("input", function() {
        calculateTotal();
    });

    // Calculate changes and totals on input change
    $(".item-quantity, #payment-food, #payment-services, #payment-customer").on("input", function() {
        calculateChangeFood();
        calculateChangeServices();
        calculateTotal();
    });

    $("#foodForm, #servicesForm, #customerInfoForm").submit(function() {
        var formId = $(this).attr("id");
        orderProcessed(formId);
        return false; // Prevent form submission
    });

    // Initialize cities on page load
    populateCities();

    calculateTotal();
});


function populateCities() {
    var regionSelect = document.getElementById("region");
    var citySelect = document.getElementById("city");
    var region = regionSelect.value;

    // Clear existing options
    citySelect.innerHTML = "";

    // Populate cities based on selected region
    var cities = [];
    switch (region) {
        case "CAR":
            cities = ["Abra", "Apayao", "Benguet", "Ifugao", "Kalinga", "Mountain Province"];
            break;
        case "NCR":
            cities = ["Caloocan", "Las Piñas", "Makati", "Malabon", "Mandaluyong", "Manila", "Marikina", "Muntinlupa", "Navotas", "Parañaque", "Pasay", "Pasig", "Quezon City", "San Juan", "Taguig", "Valenzuela"];
            break;
        case "Region I":
            cities = ["Ilocos Norte", "Ilocos Sur", "La Union", "Pangasinan"];
            break;
        case "Region II":
            cities = ["Batanes", "Cagayan", "Isabela", "Nueva Vizcaya", "Quirino"];
            break;
        case "Region III":
            cities = ["Aurora", "Bataan", "Bulacan", "Nueva Ecija", "Pampanga", "Tarlac", "Zambales"];
            break;
        case "Region IV-A":
            cities = ["Batangas", "Cavite", "Laguna", "Quezon", "Rizal"];
            break;
        case "Region IV-B":
            cities = ["Marinduque", "Occidental Mindoro", "Oriental Mindoro", "Palawan", "Romblon"];
            break;
        case "Region V":
            cities = ["Albay", "Camarines Norte", "Camarines Sur", "Catanduanes", "Masbate", "Sorsogon"];
            break;
        case "Region VI":
            cities = ["Aklan", "Antique", "Capiz", "Guimaras", "Iloilo", "Negros Occidental"];
            break;
        case "Region VII":
            cities = ["Bohol", "Cebu", "Negros Oriental", "Siquijor"];
            break;
        case "Region VIII":
            cities = ["Biliran", "Eastern Samar", "Leyte", "Northern Samar", "Samar", "Southern Leyte"];
            break;
        case "Region IX":
            cities = ["Zamboanga del Norte", "Zamboanga del Sur", "Zamboanga Sibugay"];
            break;
        case "Region X":
            cities = ["Bukidnon", "Camiguin", "Lanao del Norte", "Misamis Occidental", "Misamis Oriental"];
            break;
        case "Region XI":
            cities = ["Compostela Valley", "Davao del Norte", "Davao del Sur", "Davao Occidental", "Davao Oriental"];
            break;
        case "Region XII":
            cities = ["Cotabato", "Sarangani", "South Cotabato", "Sultan Kudarat"];
            break;
        case "Region XIII":
            cities = ["Agusan del Norte", "Agusan del Sur", "Dinagat Islands", "Surigao del Norte", "Surigao del Sur"];
            break;
        case "BARMM":
            cities = ["Basilan", "Lanao del Sur", "Maguindanao", "Sulu", "Tawi-Tawi"];
            break;
        default:
            cities = [];
            break;
    }

    // Add cities as options to the city select element
    for (var i = 0; i < cities.length; i++) {
        var option = document.createElement("option");
        option.text = cities[i];
        option.value = cities[i];
        citySelect.add(option);
    }
}

// Add cities as options to the city select element
for (var i = 0; i < cities.length; i++) {
    var option = document.createElement("option");
    option.text = cities[i];
    option.value = cities[i];
    citySelect.add(option);
}



