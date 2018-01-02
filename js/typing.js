/* TYPING */

$(document).ready(function () {
    var text = $('.typing').data('text');
    var text2 = $('.typing2').data('text');

    function typeWriter(options, cb) {
        if (options.index < options.text.length) {
            $(options.selector).text(options.text.substr(0, options.index + 1));
            options.index++;
            setTimeout(function () {
                typeWriter(options, cb);
            }, 100);
        } else if (typeof (cb) === 'function') {
            cb();
        }
    }

    typeWriter({
        index: 0,
        text: text,
        selector: '.typing'
    }, function () {
        typeWriter({
            index: 0,
            text: text2,
            selector: '.typing2'
        });
    });
});
