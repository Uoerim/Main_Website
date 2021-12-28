$('#logo').click(function() {
    window.open('main','_blank');
});
$('#services').click(function() {
    window.open('services','_blank');
});
$('#about').click(function() {
    $('.about')[0].scrollIntoView();
});
$('#contact').click(function() {
    $('.contact')[0].scrollIntoView();
});
$('#loginBtn').click(function() {
    window.open('auth','_blank');
});

$('.discord').click(function() {
    window.open('https://discord.gg/GdxnspKYva','_blank');
});
$('.github').click(function() {
    window.open('https://github.com/Uoerim','_blank');
});
$('.twitter').click(function() {
    window.open('https://twitter.com/UsifFar','_blank');
});

function mobileclick(x) {
    x.classList.toggle("change");
    if($(x).hasClass('change')){
       $('.menu').css('display', 'block');
    }else{
        $('.menu').css('display', 'none');
    }
}
//add all clicks