(function($) {


    function loadHtmlAsync (_url,  _el) {

        var _content = "";

        var jqxhr = $.ajax({ url: _url });

        jqxhr.done(function (_data) {
            $(_el).append($.parseHTML(_data));
        });

    };

    loadHtmlAsync('html/header.html', '#header')
})(jQuery);

