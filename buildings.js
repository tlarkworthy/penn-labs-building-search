

var displayData = function displayData (data) {

    $('#results-body').remove(); //clear whatever search results were there previously


    var $results = $('<div id="results-body">');
    $results.append('<ul>');

    //default in case no results are returned
    var topTitle = "University+of+Pennsylvania";

    for (var i = 0; i < data['result_data'].length; i++) {

        topTitle = data['result_data'][0]['title']; //store name of first result

        var title = data['result_data'][i]['title'];
        var address = data['result_data'][i]['address'];
        var link = data['result_data'][i]['http_link'];
        var anchor = '<a href="' + link + '" target="_blank" >';

        //only put parens if address exists
        if (address.length > 0) {
            address = ' (' + address + ')';
        }
        
        //make sure link exists
        if (link.length > 0) { 
            title = anchor + title + address + '</a>';
        }

        $results.append('<li>' + title + '</li>');
    }

    $results.append('</ul>');
    $('.results').append($results);


    //update map with search for name of first result
    $('iframe').attr('src','https://www.google.com/maps/embed/v1/search?key=AIzaSyC4HCSfVL66wCJA24BoYvQw8pCksc5cM0g&q='+ topTitle + '+in+Philadelphia');
}

var searchApi = function searchApi (name) {
    $.get('https://api.pennlabs.org/buildings/search?q=' + name, displayData, 'JSON');
}

var update = function update (e) {
    e.preventDefault();
    searchApi($('#building-name').val());
};


$('form').on('submit', update);
$('#building-name').on('keyup', update);



