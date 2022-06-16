$(function () {
    $('#portfolio').fullpage({
        anchors: ['p01', 'p02', 'p03', 'p04', 'p05'],
        afterLoad: function (anchorLink, index) {
            $(this).addClass('on').siblings().removeClass('on');
            $('.nb li').eq(index - 1).addClass('on').siblings().removeClass('on');
        },
    });

    $('.cover_open').on('click', function () {
        $('#cover').toggleClass('on')
    });

    $('#cover a').on('click', function () {
        $('#cover').removeClass('on')
    })
})