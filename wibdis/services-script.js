$(document).ready(function(){

    $("#select-glossy").click(function(){
        // Check if the glossy item is already visible
        if ($("#digital-printing-item-glossy").hasClass("hidden")) {
            // Hide all digital printing items
            $(".digital-printing-item").addClass("hidden");
        
            // Show the glossy item
            $("#digital-printing-item-glossy").removeClass("hidden");

            // Highlight the clicked button and remove highlighting from others
            $("#select-glossy").addClass("highlighted");
            $("#select-matte, #select-textured").removeClass("highlighted");
        } else {
            // Toggle the visibility of the glossy item
            $("#digital-printing-item-glossy").toggleClass("hidden");
            
            // Remove highlighting from the button
            $(this).removeClass("highlighted");
        }
    });

    $("#select-matte").click(function(){
        // Check if the matte item is already visible
        if ($("#digital-printing-item-matte").hasClass("hidden")) {
            // Hide all digital printing items
            $(".digital-printing-item").addClass("hidden");
        
            // Show the matte item
            $("#digital-printing-item-matte").removeClass("hidden");

            // Highlight the clicked button and remove highlighting from others
            $("#select-matte").addClass("highlighted");
            $("#select-glossy, #select-textured").removeClass("highlighted");
        } else {
            // Toggle the visibility of the matte item
            $("#digital-printing-item-matte").toggleClass("hidden");
            
            // Remove highlighting from the button
            $(this).removeClass("highlighted");
        }
    });

    $("#select-textured").click(function(){
        // Check if the textured item is already visible
        if ($("#digital-printing-item-textured").hasClass("hidden")) {
            // Hide all digital printing items
            $(".digital-printing-item").addClass("hidden");
        
            // Show the textured item
            $("#digital-printing-item-textured").removeClass("hidden");

            // Highlight the clicked button and remove highlighting from others
            $("#select-textured").addClass("highlighted");
            $("#select-glossy, #select-matte").removeClass("highlighted");
        } else {
            // Toggle the visibility of the textured item
            $("#digital-printing-item-textured").toggleClass("hidden");
            
            // Remove highlighting from the button
            $(this).removeClass("highlighted");
        }
    });

    $("#select-hp").click(function(){
        // Check if the glossy item is already visible
        if ($("#digital-printing-item-hp").hasClass("hidden")) {
            // Hide all digital printing items
            $(".digital-printing-item").addClass("hidden");
        
            // Show the glossy item
            $("#digital-printing-item-hp").removeClass("hidden");

            // Highlight the clicked button and remove highlighting from others
            $("#select-hp").addClass("highlighted");
            $("#select-epson, #select-canon").removeClass("highlighted");
        } else {
            // Toggle the visibility of the glossy item
            $("#digital-printing-item-hp").toggleClass("hidden");
            
            // Remove highlighting from the button
            $(this).removeClass("highlighted");
        }
    });

    $("#select-epson").click(function(){
        // Check if the matte item is already visible
        if ($("#digital-printing-item-epson").hasClass("hidden")) {
            // Hide all digital printing items
            $(".digital-printing-item").addClass("hidden");
        
            // Show the matte item
            $("#digital-printing-item-epson").removeClass("hidden");

            // Highlight the clicked button and remove highlighting from others
            $("#select-epson").addClass("highlighted");
            $("#select-hp, #select-canon").removeClass("highlighted");
        } else {
            // Toggle the visibility of the matte item
            $("#digital-printing-item-epson").toggleClass("hidden");
            
            // Remove highlighting from the button
            $(this).removeClass("highlighted");
        }
    });

    $("#select-canon").click(function(){
        // Check if the textured item is already visible
        if ($("#digital-printing-item-canon").hasClass("hidden")) {
            // Hide all digital printing items
            $(".digital-printing-item").addClass("hidden");
        
            // Show the textured item
            $("#digital-printing-item-canon").removeClass("hidden");

            // Highlight the clicked button and remove highlighting from others
            $("#select-canon").addClass("highlighted");
            $("#select-hp, #select-epson").removeClass("highlighted");
        } else {
            // Toggle the visibility of the textured item
            $("#digital-printing-item-canon").toggleClass("hidden");
            
            // Remove highlighting from the button
            $(this).removeClass("highlighted");
        }
    });

    $(".laminating-card").hover(function(){
        $(this).find(".laminating-desc").toggleClass("hidden");
    });

    $("#binding-select-saddle").click(function(){
        // Check if the glossy item is already visible
        if ($("#saddle-stitch-desc").hasClass("hidden")) {
            // Hide all digital printing items
            $(".binding-type").addClass("hidden");
        
            // Show the glossy item
            $("#saddle-stitch-desc").removeClass("hidden");

            // Highlight the clicked button and remove highlighting from others
            $("#binding-select-saddle").addClass("highlighted");
            $("#binding-select-heated, #binding-select-wired").removeClass("highlighted");
        } else {
            // Toggle the visibility of the glossy item
            $("#saddle-stitch-desc").toggleClass("hidden");
            
            // Remove highlighting from the button
            $(this).removeClass("highlighted");
        }
    });

    
    $("#binding-select-heated").click(function(){
        // Check if the glossy item is already visible
        if ($("#heated-stitch-desc").hasClass("hidden")) {
            // Hide all digital printing items
            $(".binding-type").addClass("hidden");
        
            // Show the glossy item
            $("#heated-stitch-desc").removeClass("hidden");

            // Highlight the clicked button and remove highlighting from others
            $("#binding-select-heated").addClass("highlighted");
            $("#binding-select-saddle, #binding-select-wired").removeClass("highlighted");
        } else {
            // Toggle the visibility of the glossy item
            $("#heated-stitch-desc").toggleClass("hidden");
            
            // Remove highlighting from the button
            $(this).removeClass("highlighted");
        }
    });

    
    $("#binding-select-wired").click(function(){
        // Check if the glossy item is already visible
        if ($("#wired-stitch-desc").hasClass("hidden")) {
            // Hide all digital printing items
            $(".binding-type").addClass("hidden");
        
            // Show the glossy item
            $("#wired-stitch-desc").removeClass("hidden");

            // Highlight the clicked button and remove highlighting from others
            $("#binding-select-wired").addClass("highlighted");
            $("#binding-select-saddle, #binding-select-heated").removeClass("highlighted");
        } else {
            // Toggle the visibility of the glossy item
            $("#wired-stitch-desc").toggleClass("hidden");
            
            // Remove highlighting from the button
            $(this).removeClass("highlighted");
        }
    });
});
