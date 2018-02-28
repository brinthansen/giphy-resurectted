    	$(document).ready(function() {



     
      var gifTopics = [];
      console.log(gifTopics)
      

      
      
      


  function getGif(){

      var x = $(this).data("search");
      var offset = Math.floor((Math.random() * 300) + 1);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x 
         + "&offset=" + offset + "&api_key=dc6zaTOxFJmzC&limit=10";


        $.ajax({
          url: queryURL,  
          method: "GET"
      })
         

          .done(function(response) {
          $(".column").empty()
          var results = response.data;
          
          for (var i = 0; i <results.length; i++){

            

          var gifDiv = $("<div class=giff>" + i );
          var rating = results[i].rating;
          var animatedSrc = results[i].images.downsized_large.url;
          var staticSrc = results[i].images.downsized_still.url;
          var gifImage = $("<img>");
          var p = $("<p>");

          gifImage.attr("id","gifs");
          gifDiv.attr("id", "gif" + i );
          gifImage.attr("src", staticSrc);
          gifImage.addClass("gifGiphy");
          gifImage.attr("data-still", staticSrc);
          gifImage.attr("data-animate", animatedSrc);
          gifDiv.append(p);
          gifDiv.append(gifImage);


          $(".gifLook").width( "400px" );
          $(".gifLook").height( "400px" );
          $(".column").prepend(gifDiv);
          $(".column").val(''); 

                 
}                
  });
}




  $("#addGif").on("click", function(event) {
        event.preventDefault();
        var newGif = $("#gifInput").val().trim();
        gifTopics.push(newGif);
        var gifTopics2 = gifTopics.splice(0,4);
        
        console.log(gifTopics);

        $("#gifInput").val('');
        displayButtons();
      

      });


  function displayButtons() {
    $("#myButtons").empty();
    for (var i = 0; i < gifTopics.length; i++) {
      var a = $('<button class="btn btn-primary">');
      a.attr("id", "gif");
      a.attr("data-search", gifTopics[i]);
      a.text(gifTopics[i]);
      $("#myButtons").append(a);
    }
  }


  displayButtons();

 

  $(document).on("click", "#gif", getGif);

  
  $(document).on("click", "#gifs", pausePlayGifs);

  

 
  function pausePlayGifs() {
     var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } 
      else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
  }
}

console.log(gifTopics)




});
