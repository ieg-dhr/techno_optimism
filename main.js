jQuery(document).ready(function($) {
    // navScroll();
    activeMove();
    navItems();
    scopriDiPiu();
    seeDayProgram();
    //privacy();
});

// Logo hide while scrolling the page and show at the beginning of the page
//function navScroll() {
//    $(window).scroll(function() {
//        $(".navbar-brand > img").hide();
//        if ($(window).scrollTop() < 50) {
//            $(".navbar-brand > img").show();
//        }
//    })
//}

// Dynamic active class on navbar items while scrolling the page ...I can do better, so do you!
function activeMove() {
    var heightHome = $("#home").offset().top;
    var heightAbout = $("#about").offset().top;
    var heightCfp = $("#cfp").offset().top;
    var heightSubmission = $("#submission").offset().top;
    var heightVenue = $("#venue").offset().top;
    var heightProceedings = $("#proceedings").offset().top;
    var heightContact = $("#contact").offset().top;
    $(window).scroll(function() {
        var windowPos = window.pageYOffset;
        if (windowPos > heightHome) {
            $(".home-li").addClass("active");
            $(".about-li").removeClass("active");
            $(".cfp-li").removeClass("active");
            $(".submission-li").removeClass("active");
            $(".venue-li").removeClass("active");
            $(".proceedings-li").removeClass("active");
            $(".contact-li").removeClass("active");
        }
        if (windowPos > heightAbout) {
            $(".home-li").removeClass("active");
            $(".about-li").addClass("active");
            $(".cfp-li").removeClass("active");
            $(".submission-li").removeClass("active");
            $(".venue-li").removeClass("active");
            $(".proceedings-li").removeClass("active");
            $(".contact-li").removeClass("active");
        }
        if (windowPos > heightCfp) {
            $(".about-li").removeClass("active");
            $(".cfp-li").addClass("active");
            $(".submission-li").removeClass("active");
            $(".venue-li").removeClass("active");
            $(".proceedings-li").removeClass("active");
            $(".contact-li").removeClass("active");
        }
        if (windowPos > heightSubmission) {
            $(".about-li").removeClass("active");
            $(".cfp-li").removeClass("active");
            $(".submission-li").addClass("active");
            $(".venue-li").removeClass("active");
            $(".proceedings-li").removeClass("active");
            $(".contact-li").removeClass("active");
        }
        if (windowPos > heightVenue) {
            $(".about-li").removeClass("active");
            $(".cfp-li").removeClass("active");
            $(".submission-li").removeClass("active");
            $(".venue-li").addClass("active");
            $(".proceedings-li").removeClass("active");
            $(".contact-li").removeClass("active");
        }
        if (windowPos > heightProceedings) {
            $(".about-li").removeClass("active");
            $(".cfp-li").removeClass("active");
            $(".submission-li").removeClass("active");
            $(".venue-li").removeClass("active");
            $(".proceedings-li").addClass("active");
            $(".contact-li").removeClass("active");
        }
        if (windowPos > heightContact) {
            $(".about-li").removeClass("active");
            $(".cfp-li").removeClass("active");
            $(".submission-li").removeClass("active");
            $(".venue-li").removeClass("active");
            $(".proceedings-li").removeClass("active");
            $(".contact-li").addClass("active");
        }
    })
}

// Navbar items click and scroll to corresponding id
function navItems() {
    $(".nav-item").click(function() {
        var divItem = $(this).attr("value");
        //$("a[value!='" + divItem + "']").parent().removeClass("active");  // non cancellare, potrebbe servire in altri progetti
        //$("a[value='" + divItem + "']").parent().addClass("active");
        $("html, body").animate({
            scrollTop: $("#" + divItem).offset().top + 1
        }, 800)
    })
}

// Learn more - Scopri di più button
function scopriDiPiu() {
    $("#find-more").click(function() {
        $("html, body").animate({
            scrollTop: $("#about").offset().top + 1
        }, 800)
    })
}

// Buttons to show different days of the program
function seeDayProgram() {
    // Klick auf den 1. Tag (15. April)
    $("#1st-program").click(function() {
        $(".1st-day-program").show();
        $(".2nd-day-program, .3rd-day-program").hide();
        // Button-Styles umschalten
        $("#1st-program").removeClass("button-round-empty-dimgray").addClass("button-round-dimgray");
        $("#2nd-program, #3rd-program").removeClass("button-round-dimgray").addClass("button-round-empty-dimgray");
    });

    // Klick auf den 2. Tag (16. April)
    $("#2nd-program").click(function() {
        $(".1st-day-program, .3rd-day-program").hide();
        $(".2nd-day-program").show();
        // Button-Styles umschalten
        $("#2nd-program").removeClass("button-round-empty-dimgray").addClass("button-round-dimgray");
        $("#1st-program, #3rd-program").removeClass("button-round-dimgray").addClass("button-round-empty-dimgray");
    });

    // Klick auf den 3. Tag (17. April)
    $("#3rd-program").click(function() {
        $(".1st-day-program, .2nd-day-program").hide();
        $(".3rd-day-program").show();
        // Button-Styles umschalten
        $("#3rd-program").removeClass("button-round-empty-dimgray").addClass("button-round-dimgray");
        $("#1st-program, #2nd-program").removeClass("button-round-dimgray").addClass("button-round-empty-dimgray");
    });
}

/* Privacy */ // Do not delete it, maybe it can be useful in other projects.
/*function privacy() {
    $("#privacy-button").click(function(){
        $("#privacy-info").toggle("slow");
    })
}*/

// Copy command
function copyURL() {
    var copyText = document.getElementById("copyURL");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.getElementById("copiedAlert").style.display = "block";
}

// Copied text alert
function outFunc() {
    document.getElementById("copiedAlert").style.display = "none";
}