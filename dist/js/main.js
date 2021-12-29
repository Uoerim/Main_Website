
// $(window).scroll(function () {
//     if ($(window).width() < 834) {
//         if ($(this).scrollTop() <= 0) {
//             $('.header').css('background-color', 'var(--primarycolor)');
//             $('.header').css('border-bottom', 'solid 1px var(--secondarycolor)');
//             $('.header').addClass('hidden');

//         } else {
//             $('.header').css('background-color', 'var(--thirdcolor)');
//             $('.header').css('border-bottom', 'none');
//             $('.header').addClass('hidden');

//         }
//     } else {
//         if ($(this).scrollTop() <= 0) {
//             $('.header').css('background-color', 'var(--primarycolor)');
//             $('.header').removeClass('hidden');
//             $('.header').css('border-bottom', 'none');
//         } else {
//             $('.header').css('background-color', 'var(--thirdcolor)');
//             $('.header').addClass('hidden');
//             $('.header').css('border-bottom', 'none');
//         }
//     }
// });

document.body.addEventListener("focus", event => {
    const target = event.target;
    switch (target.tagName) {
        case "INPUT":
        case "TEXTAREA":
        case "SELECT":
            document.body.classList.add("keyboard");
    }
}, true); 
document.body.addEventListener("blur", () => {
    document.body.classList.remove("keyboard");
}, true); 

setInterval(() => {
    if ($(window).width() < 834) {
        if ($(this).scrollTop() <= 0) {
            $('.header').css('background-color', 'var(--primarycolor)');
            $('.header').addClass('hidden');
            $('.logo').css('left', '0');
            $('.menunav').css('right', '0');
            $('.header').css('border-bottom', 'solid 1px var(--secondarycolor)');
        }else{
            $('.header').css('background-color', 'var(--thirdcolor)');
            $('.header').css('border-bottom', 'none');
        }
    } else {
        if ($(this).scrollTop() <= 0) {
            $('.header').css('background-color', 'var(--primarycolor)');
            $('.header').css('border-bottom', 'none');
            $('.logo').css('left', '15.1%');
            $('.menunav').css('right', '13.5%');
            $('.header').removeClass('hidden');
        }else{
            $('.header').css('background-color', 'var(--thirdcolor)');
            $('.logo').css('left', '0');
            $('.menunav').css('right', '0');
            $('.header').addClass('hidden');
        }
    }
    if ($(window).width() > 600) {
        $('.menunav').css('display', 'inline');
        $('.menunav').css('opacity', '100%');
    }
}, 100);

$('.hamburg').click(function (e) {
    e.preventDefault();
    $('.menunav').css('display', 'inline');
    setTimeout(function () {
        $('.menunav').css('opacity', '100%');
    }, 100)
});
$('.closeBtn').click(function (e) {
    e.preventDefault();
    $('.menunav').css('opacity', '0%');
    setTimeout(function () {
        $('.menunav').css('display', 'none');
    }, 200)
});

$('#services').click(function() {
    window.open('services','_blank');
});
$('#about').click(function() {
    $('.about')[0].scrollIntoView();
});
$('#lastmenuitem').click(function() {
    $('.contact')[0].scrollIntoView();
});
$('#loginBtn').click(function() {
    window.open('auth','_blank');
});
$('.logo').click(function() {
    window.open('main','_blank');
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