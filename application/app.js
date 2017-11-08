//https://developers.themoviedb.org/3/getting-started/search-and-query-for-details THE BEST DOCUMENTATION
//API key cfaf5a037f8e81c516eb5dbc1c98908f
    
var idJSON = new XMLHttpRequest();
        var address = "https://api.themoviedb.org/3/search/movie?api_key=cfaf5a037f8e81c516eb5dbc1c98908f&query=jack+reacher";
        
        idJSON.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 200) {
                var data = JSON.parse(this.responseText);
               var id = data.results[0].id;
               localStorage.setItem('movieId', id);
               // document.getElementById("recipes").innerHTML = id;
                
            }
        }
        idJSON.open("GET", address, true);
        idJSON.send();

var movJSON = new XMLHttpRequest();
    
    var begin="https://api.themoviedb.org/3/movie/"
    var mId = localStorage.getItem("movieId");
    //var search = "/images"
    var api = "?api_key=cfaf5a037f8e81c516eb5dbc1c98908f"
    
    var address2 = begin + mId + api;

    document.getElementById("output").innerHTML = address2

    movJSON.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200) {
        var data2 = JSON.parse(this.responseText);
            var title = data2.original_title;
            var ove = data2.overview;
            document.getElementById("title").innerHTML = title;
            document.getElementById("overview").innerHTML=ove;
        }
    }
    movJSON.open("GET", address2, true);
        movJSON.send();
    

