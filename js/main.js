$(document).ready(function () {
    $('.wrong-text').hide();
    $('.correct-text').hide();
    $('.final').hide();
    var count = 0;
    var $clicked = 0;
//q1
    $('.correct-1').click(function () {
        $(this).css('background-color', '#57BC90');
        $('.wrong-1').off('click');
        $('.correct-1').off('click');
        $('.correct-text-1').show();
        count++;
        $clicked++;
        console.log($clicked);
        $('.actual-score').text(count);
    });
    $('.wrong-1').click(function () {
        $(this).css('background-color', '#CF6766');
        $('.wrong-1').off('click');
        $('.correct-1').off('click');
        $('.wrong-text-1').show();
        $clicked++;
        console.log($clicked);
    });
//q2
       $('.correct-2').click(function () {
        $(this).css('background-color', '#57BC90');
        $('.wrong-2').off('click');
        $('.correct-2').off('click');
        $('.correct-text-2').show();
        count++;
        $clicked++;
        console.log($clicked);
        $('.actual-score').text(count);
        
    });
    $('.wrong-2').click(function () {
        $(this).css('background-color', '#CF6766');
        $('.wrong-2').off('click');
        $('.correct-2').off('click');
        $('.wrong-text-2').show();
        $clicked++;
        console.log($clicked);
    });
//q3
    $('.correct-3').click(function () {
        $(this).css('background-color', '#57BC90');
        $('.wrong-3').off('click');
        $('.correct-3').off('click');
        $('.correct-text-3').show();
        count++;
        $clicked++;
        console.log($clicked);
        $('.actual-score').text(count);
    });
    $('.wrong-3').click(function () {
        $(this).css('background-color', '#CF6766');
        $('.wrong-3').off('click');
        $('.correct-3').off('click');
        $('.wrong-text-3').show();
        $clicked++;
        console.log($clicked);
    });

//q4
    $('.correct-4').click(function () {
        $(this).css('background-color', '#57BC90');
        $('.wrong-4').off('click');
        $('.correct-4').off('click');
        $('.correct-text-4').show();
        count++;
        $clicked++;
        console.log($clicked);
        $('.actual-score').text(count);
    });
    $('.wrong-4').click(function () {
        $(this).css('background-color', '#CF6766');
        $('.wrong-4').off('click');
        $('.correct-4').off('click');
        $('.wrong-text-4').show();
        $clicked++;
        console.log($clicked);
    });

//q5
    $('.correct-5').click(function () {
        $(this).css('background-color', '#57BC90');
        $('.wrong-5').off('click');
        $('.correct-5').off('click');
        $('.correct-text-5').show();
        count++;
        $clicked++;
        console.log($clicked);
        $('.actual-score').text(count);
            if ($clicked === 5) {
                awesome();
            }
    });
    $('.wrong-5').click(function () {
        $(this).css('background-color', '#CF6766');
        $('.wrong-5').off('click');
        $('.correct-5').off('click');
        $('.wrong-text-5').show();
        $clicked++;
        console.log($clicked);
            if ($clicked === 5) {
                awesome();
            }
    });

function awesome() {
    console.log(count)
};








});
