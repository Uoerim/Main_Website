$('.selectable').click(function (e) {
    e.preventDefault();
    $('div').removeClass('visible');
    $('.selectable').removeClass('selected');
    $(this).addClass('selected');
    if ($(this).hasClass('reportbtn')) {
        $('.report').addClass('visible');
    } else if ($(this).hasClass('knownbtn')) {
        $('.known').addClass('visible');
    } else if ($(this).hasClass('fixedbtn')) {
        $('.fixed').addClass('visible');
    }
});