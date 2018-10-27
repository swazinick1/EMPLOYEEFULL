


    $('#submit').on('click', function(event){
        event.preventDefault();
        console.log("hello")

        const userData = {
            name:$("#name").val(),
            photo:$("#photo").val(),
            scores: [
                $("q1").val(),
                $("q2").val(),
                $("q3").val(),
                $("q4").val(),
                $("q5").val(),
                $("q6").val(),
                $("q7").val(),
                $("q8").val(),
                $("q9").val(),
                $("q10").val()
            ]
        }



        console.log(userData);
        // //ajax post the data to the friends API
    
        $.post("/api/employer", userData, function(data){
            console.log(data)
    
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);
        
        });
    });
