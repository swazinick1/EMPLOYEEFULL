const displayEmp = function(){

    

$.ajax({
    url: '/api/employer',
    method: 'GET',

}).then(function(response){
    console.log(response);
    $("#match-name").append(response.bestMatch);
});


$('#submit').on('click', function(event){
    event.preventDefault();
    console.log()
});
}

$.ajax
