
$(function(){
    $('.ui.accordion').accordion();

    $('#switchAsideBtn').click(function(){
        $('#main').toggleClass('aside_closed');
        $('#switchAsideBtn i').toggleClass('right');
    })
})
