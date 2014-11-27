jQuery.fn.getTitle = function(thisUrl) {
    var title = '';
    var returnTitle = '';
    $.when(
        $.ajax('http://query.yahooapis.com/v1/public/yql', {
            type: 'get',
            async:false,
            data: {
                q: "use 'http://www.datatables.org/data/htmlstring.xml' as htmlstring; select * from htmlstring where url='" + thisUrl + "'",
                format: 'json'
            },
            dataType: 'json'
        })).done(function(r) {
        var response,back;
        response = r.query.results;
        if (!response) {
            return thisUrl;
        }
        title = response.result.match(/<title[^>]*>([^<]+)<\/title>/)[1];
    });
         $(this).html(title);
};