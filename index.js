$(document).ready(function() {
    
    $(window).keydown(function (event) {
        var x = event.which || event.keyCode;

        switch(x) {
            case 97:
                $("#output").append("1");
                var audio = new Audio("sounds/one.ogg");
                audio.play();
                setTimeout(() => { audio.pause(); audio.currentTime = 0; }, 500);
                break;
            case 98:
                $("#output").append("2");
                var audio = new Audio("sounds/two.ogg");
                audio.play();
                setTimeout(() => { audio.pause(); audio.currentTime = 0; }, 500);
                break;
            case 99:
                $("#output").append("3"); 
                var audio = new Audio("sounds/three.ogg");
                audio.play();
                setTimeout(() => { audio.pause(); audio.currentTime = 0; }, 500);
                break;   
            case 100:
                $("#output").append("4");
                var audio = new Audio("sounds/four.ogg");
                audio.play();
                setTimeout(() => { audio.pause(); audio.currentTime = 0; }, 500);
                break;
            case 101:
                $("#output").append("5");
                var audio = new Audio("sounds/five.ogg");
                audio.play();
                setTimeout(() => { audio.pause(); audio.currentTime = 0; }, 500);
                break;
            case 102:
                $("#output").append("6");
                var audio = new Audio("sounds/six.ogg");
                audio.play();
                setTimeout(() => { audio.pause(); audio.currentTime = 0; }, 500);
                break; 
            case 103:
                $("#output").append("7");
                var audio = new Audio("sounds/seven.ogg");
                audio.play();
                setTimeout(() => { audio.pause(); audio.currentTime = 0; }, 500);
                break;   
            case 104:
                $("#output").append("8");
                var audio = new Audio("sounds/eight.ogg");
                audio.play();
                setTimeout(() => { audio.pause(); audio.currentTime = 0; }, 500);
                break;
            case 105:
                $("#output").append("9");
                var audio = new Audio("sounds/nine.ogg");
                audio.play();
                setTimeout(() => { audio.pause(); audio.currentTime = 0; }, 500);
                break;
            case 106:
                $("#output").append("*");
                var audio = new Audio("sounds/star.ogg");
                audio.play();
                setTimeout(() => { audio.pause(); audio.currentTime = 0; }, 500);
                break;
            case 96:
                $("#output").append("0");
                var audio = new Audio("sounds/zero.ogg");
                audio.play();
                setTimeout(() => { audio.pause(); audio.currentTime = 0; }, 500);
                break;
            case 51:
                $("#output").append("#");
                var audio = new Audio("sounds/pound.oga");
                audio.play();
                setTimeout(() => { audio.pause(); audio.currentTime = 0; }, 500);
                break;
        };

        if (x == 13) {
            var output = $("#output").text();
            if(output.length >= 3) {
                $("#output").empty();
                var audio = [];
                audio[0] = new Audio();
                audio[0].src = "sounds/busy-signal.mp3";
                audio[1] = new Audio();
                audio[1].src = "sounds/phone-ringing.mp3"

                let random =  Math.floor(Math.random() * 1000) % audio.length;
                audio[random].play();
                setTimeout(() => { audio[random].pause(); audio[random].currentTime = 0; }, 12000);
            } else {
                alert("Enter the right number!");
            }
        };
    })
    
    $(".nums").click(function() {
        var num = $(this).text();
        $("#output").append(num);

        if(num == 1) {
            var audio = new Audio("sounds/one.ogg");
            audio.play();
        } else if(num == 2) {
            var audio = new Audio("sounds/two.ogg");
            audio.play();
        } else if(num == 3) {
            var audio = new Audio("sounds/three.ogg");
            audio.play();
        } else if(num == 4) {
            var audio = new Audio("sounds/four.ogg");
            audio.play();
        } else if(num == 5) {
            var audio = new Audio("sounds/five.ogg");
            audio.play();
        } else if(num == 6) {
            var audio = new Audio("sounds/six.ogg");
            audio.play();
        } else if(num == 7) {
            var audio = new Audio("sounds/seven.ogg");
            audio.play();
        } else if(num == 8) {
            var audio = new Audio("sounds/eight.ogg");
            audio.play();
        } else if(num == 9) {
            var audio = new Audio("sounds/nine.ogg");
            audio.play();
        } else if(num == "*") {
            var audio = new Audio("sounds/star.ogg");
            audio.play();
        } else if(num == 0) {
            var audio = new Audio("sounds/zero.ogg");
            audio.play();
        } else if(num == "#") {
            var audio = new Audio("sounds/pound.oga");
            audio.play();
        }
        setTimeout(function() {
            audio.pause();
            audio.currentTime = 0;
        }, 200);
    });

    $(".call").click(function() {
        var output = $("#output").text();
        if(output.length >= 3) {
            $("#output").empty();
            var audio = [];
            audio[0] = new Audio();
            audio[0].src = "sounds/busy-signal.mp3";
            audio[1] = new Audio();
            audio[1].src = "sounds/phone-ringing.mp3"

            let random =  Math.floor(Math.random() * 1000) % audio.length;
            audio[random].play();
            setTimeout(() => { audio[random].pause(); audio[random].currentTime = 0; }, 12000);
        } else {
            alert("Enter the right number!");
        };
    });
})