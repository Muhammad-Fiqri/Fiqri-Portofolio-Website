function scrollDown()
{
    window.scroll(0,661);
}

function GoHome()
{
    window.scroll(0,0);
}

function GoMyWorks()
{
    window.scroll(0,661);
}

window.onscroll = function() {
    let scroll_value = document.documentElement.scrollTop;
    console.log(scroll_value);
    if (scroll_value > 1000) {
        console.log("in skill godot");
        $("document").ready(() => {
            $("#godot-skill-level").css("animation","slide_fade 0.5s");
            $("#godot-header").css("animation","slide_fade 0.5s");
            $("#skill-level-indicator > #level-1 img").css("animation","star-pop-up 1s")
            $("#skill-level-indicator > #level-2 img").css("animation","star-pop-up 2s")
            $("#skill-level-indicator > #level-3 img").css("animation","star-pop-up 3s")
            $("#skill-level-indicator > #level-4 img").css("animation","star-pop-up 4s")
        });
    }
}

let current_slide = 1

function changeSlide(move)
{
    current_slide += move;
    if (current_slide >= 5){
        current_slide = 1
    }
    if (current_slide <= 0){
        current_slide = 4
    }

    showSlide(current_slide)
    console.log(current_slide);
}

function showSlide(current_slide)
{
    $("document").ready(() => {
        $("#slide-" + current_slide).show();
        $("#dot-" + current_slide).css("opacity","100%");


        switch(current_slide){
            case 1:
                $("#slide-2").hide();
                $("#slide-3").hide();
                $("#slide-4").hide();

                $("#dot-2").css("opacity","50%");
                $("#dot-3").css("opacity","50%");
                $("#dot-4").css("opacity","50%");

                $("#game-description").text("Wide Walking");
                break;
            case 2:
                $("#slide-1").hide();
                $("#slide-3").hide();
                $("#slide-4").hide();

                $("#dot-1").css("opacity","50%");
                $("#dot-3").css("opacity","50%");
                $("#dot-4").css("opacity","50%");

                $("#game-description").text("Wide Walking");
                break;
            case 3:
                $("#slide-4").hide();
                $("#slide-1").hide();
                $("#slide-2").hide();
                $("#dot-4").css("opacity","50%");
                $("#dot-1").css("opacity","50%");
                $("#dot-2").css("opacity","50%");

                $("#game-description").text("Just Survive Bro");
                break;
            case 4:
                $("#slide-2").hide();
                $("#slide-3").hide();
                $("#slide-1").hide();
                $("#dot-2").css("opacity","50%");
                $("#dot-3").css("opacity","50%");
                $("#dot-1").css("opacity","50%");

                $("#game-description").text("Risiko");
                break;
        }
    });
}

function goToSlide(slide)
{
    current_slide = slide
    showSlide(current_slide)
    console.log("test")
}