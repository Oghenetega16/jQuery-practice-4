$('#fadeoutbox').click(function (){
    $('#box').fadeOut(2000);
});

$('#fadeinbox').click(function (){
    $('#box').fadeIn('slow');
});

$('#fadeto20box').click(function (){
    $('#box').fadeTo(3000, 0.2);
});

$('#fadeto100box').click(function (){
    $('#box').fadeTo(3000, 1);
});