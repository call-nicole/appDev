//https://developers.themoviedb.org/3/getting-started/search-and-query-for-details THE BEST DOCUMENTATION

//Function Called with the Details Button
function setup(){
//This gets the movie id to set up the address to get the details
    document.getElementById("addinfo").style.display="inline-block";
    var y = document.forms["form1"]["movie"].value;
        localStorage.setItem("search", y);
    var mv = localStorage.getItem("search");
    document.getElementById("output").innerHTML=mv;
//xmlhttp request for the ID
var idJSON = new XMLHttpRequest();
        
        var address = "https://api.themoviedb.org/3/search/movie?api_key=cfaf5a037f8e81c516eb5dbc1c98908f&query=" + y;
        
        idJSON.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 200) {
                var data = JSON.parse(this.responseText);
               var id = data.results[0].id;
               localStorage.setItem('movieId', id);  
            }
        }
        idJSON.open("GET", address, true);
        idJSON.send();
//xml http request for the deatils
var movJSON = new XMLHttpRequest();
    
    var begin="https://api.themoviedb.org/3/movie/"
    var mId = localStorage.getItem("movieId");
    var api = "?api_key=cfaf5a037f8e81c516eb5dbc1c98908f"
    var img = "&append_to_response=images"
    
    var address2 = begin + mId + api + img;
   

    document.getElementById("output").innerHTML = address2

    movJSON.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200) {
        var data2 = JSON.parse(this.responseText);
            var title = data2.original_title;
            var ove = data2.overview;
            var tag = data2.tagline;
            var back = "http://image.tmdb.org/t/p/w500" + data2.images.posters[0].file_path;
            document.getElementById("title").innerHTML = title;
            document.getElementById("tagline").innerHTML = tag;
            document.getElementById("overview").innerHTML=ove;
            document.getElementById("back").src = back;
            
        
        }
    }
    movJSON.open("GET", address2, true);
        movJSON.send();
    
    
}
//Show Release Information
function showRelease(){
    document.getElementById("addRelease").style.display="inline";
     document.getElementById("addimages").style.display="none";
     document.getElementById("addRec").style.display="none";
     document.getElementById("actors").style.display="none";
    
    var relJSON = new XMLHttpRequest();
    
    var begin="https://api.themoviedb.org/3/movie/"
    var mId = localStorage.getItem("movieId");
    var api = "?api_key=cfaf5a037f8e81c516eb5dbc1c98908f"
    var cred = "&append_to_response=credits"
    
    var address = begin + mId + api + cred;
    
    document.getElementById("address").innerHTML = address;

    relJSON.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200) {
        var data = JSON.parse(this.responseText);
            var release = data.release_date;
            var budget = data.budget;
            var revenue = data.revenue;
            var runtime = data.runtime
            
            document.getElementById("release").innerHTML = "It was released on " + release;
            document.getElementById("budget").innerHTML = "Their budget was $" + budget;
            document.getElementById("revenue").innerHTML = "It Made $" + revenue + " in Revenue";
            document.getElementById("runtime").innerHTML = "The Runtime is " + runtime + " Minutes";
        
        }
    }
    relJSON.open("GET", address, true);
        relJSON.send();
}

//Show Additional Images    
function showImages(){
    document.getElementById("addRelease").style.display="none";
     document.getElementById("addimages").style.display="inline";
     document.getElementById("addRec").style.display="none";
     document.getElementById("actors").style.display="none";
    var imgJSON = new XMLHttpRequest();
    
    var begin="https://api.themoviedb.org/3/movie/"
    var mId = localStorage.getItem("movieId");
    var api = "?api_key=cfaf5a037f8e81c516eb5dbc1c98908f"
    var img = "&append_to_response=images"
    
    var addressimg = begin + mId + api + img;

    imgJSON.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200) {
        var data3 = JSON.parse(this.responseText);
             var img1 = "http://image.tmdb.org/t/p/w300" + data3.images.backdrops[0].file_path;
            var img2 = "http://image.tmdb.org/t/p/w300" + data3.images.backdrops[1].file_path;
            var img3 = "http://image.tmdb.org/t/p/w300" + data3.images.backdrops[2].file_path;
            var img4 = "http://image.tmdb.org/t/p/w300" + data3.images.backdrops[3].file_path;
            var img5 = "http://image.tmdb.org/t/p/w300" + data3.images.backdrops[4].file_path;
             document.getElementById("img1").src = img1;
            document.getElementById("img2").src = img2;
            document.getElementById("img3").src = img3;
            document.getElementById("img4").src = img4;
            document.getElementById("img5").src = img5;  
        }
    }
    imgJSON.open("GET", addressimg, true);
        imgJSON.send();
}
//Show Movie Recommendations
function showRec(){
    document.getElementById("addRelease").style.display="none";
     document.getElementById("addimages").style.display="none";
     document.getElementById("addRec").style.display="inline";
     document.getElementById("actors").style.display="none";
    var recJSON = new XMLHttpRequest();
    
    var begin="https://api.themoviedb.org/3/movie/"
    var mId = localStorage.getItem("movieId");
    var api = "?api_key=cfaf5a037f8e81c516eb5dbc1c98908f"
    var rec = "&append_to_response=recommendations"
    
    var address = begin + mId + api + rec;

    recJSON.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200) {
        var data4 = JSON.parse(this.responseText);
            //Recommendation 1 
            var rec1 = data4.recommendations.results[0].original_title;
            var rec1In = data4.recommendations.results[0].overview;
            var rec1img = "http://image.tmdb.org/t/p/w300" + data4.recommendations.results[0].poster_path;
            document.getElementById("rec1").innerHTML = "<h3>" + rec1 + "</h3>" + rec1In;
            document.getElementById("rec1img").src = rec1img; 
            
            //Recommendation 2 
            var rec2 = data4.recommendations.results[1].original_title;
            var rec2In = data4.recommendations.results[1].overview;
            var rec2img = "http://image.tmdb.org/t/p/w300" + data4.recommendations.results[1].poster_path;
            document.getElementById("rec2").innerHTML = "<h3>" + rec2 + "</h3>" + rec2In;
            document.getElementById("rec2img").src = rec2img; 
            
            //Recommendation 3 
            var rec3 = data4.recommendations.results[2].original_title;
            var rec3In = data4.recommendations.results[2].overview;
            var rec3img = "http://image.tmdb.org/t/p/w300" + data4.recommendations.results[2].poster_path;
            document.getElementById("rec3").innerHTML = "<h3>" + rec3 + "</h3>" + rec3In;
            document.getElementById("rec3img").src = rec3img; 
            
            
        
        }
    }
    recJSON.open("GET", address, true);
        recJSON.send();
}

function showActors(){
    document.getElementById("addRelease").style.display="none";
     document.getElementById("addimages").style.display="none";
     document.getElementById("addRec").style.display="none";
     document.getElementById("actors").style.display="inline";
     var actJSON = new XMLHttpRequest();
    
    var begin="https://api.themoviedb.org/3/movie/"
    var mId = localStorage.getItem("movieId");
    var api = "?api_key=cfaf5a037f8e81c516eb5dbc1c98908f"
    var cred = "&append_to_response=credits"
    
    var address = begin + mId + api + cred;
    
    document.getElementById("address").innerHTML = address;

    actJSON.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200) {
        var dataAct = JSON.parse(this.responseText);
            var cast = dataAct.credits.cast;
            var showTopCast;
            var compCast
            for (i = 0; i<=5; i++){
                var name = dataAct.credits.cast[i].name;
                var character = dataAct.credits.cast[i].character;
                var headShot =  "http://image.tmdb.org/t/p/w300" + dataAct.credits.cast[i].profile_path;
                showTopCast += "<p> <img class='actorimg' src='" + headShot + "' > <br>" + name + " - " + character;
            }
            for (i = 6; i<cast.length; i++){
                var name = dataAct.credits.cast[i].name;
                var character = dataAct.credits.cast[i].character;
                compCast += "<p>" + name + " - " + character + "</p>";
            }
            
            document.getElementById("actors").innerHTML = "<h3>The Top Cast is </h3>" + showTopCast + "<h3> The Rest of the Cast </h3>" + compCast;
            
            
        
        }
    }
    actJSON.open("GET", address, true);
        actJSON.send();
}

