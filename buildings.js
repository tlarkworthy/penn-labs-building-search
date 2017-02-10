

var toplevel = {};

var getApiData = function getApiData (name) {


    $.get('https://api.pennlabs.org/buildings/search?q=' + name, function (data) {
        //console.log(body);
        console.log(data);
        toplevel = data;
        //console.log(JSON.parse(body));
        console.log(toplevel);
        for (var i = 0; i < toplevel['result_data'].length; i++) {
            console.log(toplevel['result_data'][i]['title']);
        }

    }, 'JSON');
}


var onClick = function onClick () {
    $('.results').append('<p>Hello world</p>');
}
getApiData('hill');

$('body').on('click', '.search-button', onClick);

//console.log(toplevel);

