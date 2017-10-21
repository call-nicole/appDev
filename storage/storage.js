sessionStorage.colorSetting = '#a4509b';
localStorage.setItem('bgcolor', 'red');
localStorage.setItem('font', 'Helvetica');
localStorage.setItem('image', 'myCat.png');

function retrieve(){
    var currentColor = localStorage.getItem('bgcolor');
    document.getElementById('paragraph').style.color = currentColor;
}

var films = [
             {
              'id': 1,
              'title': 'Easy A',
              'Genre': 'Comedy',
              'Star': 'Emma Stone',
              'image': 'easyA.jpg'
             },
             {
              'id': 2,
              'title': 'My Big Fat Greek Wedding',
              'Genre': 'Romantic Comedy',
              'Star': 'Nia Vardalos and John Corbett',
              'image': 'mybfgWed.jpg'
             },
             {
              'id': 3,
              'title': 'Casa Blanca',
              'Genre': 'Drama, Romance, War',
               'Star': 'Humphrey Bogart and Ingrid Bergman',
              'image': 'casaBlanca.jpg'
             }
            ];

localStorage.setItem("films", JSON.stringify(films));
var movies = localStorage.getItem("films");
movies = JSON.parse(movies);
////var title = movies.title;

function getInfo(index){
    document.getElementById("movies").innerHTML = "Movie: " + movies[index].title + "<br> Genre: " + movies[index].Genre + "<br> Star: " + movies[index].Star;
    
    var cover = movies[index].image;
    document.getElementById('picture').src = cover;
}

//document.getElementById("movies").innerHTML = "Movie: " + movies[0].title + " Genre: " + movies[0].Genre + " star: " + movies[0].Star;
//
//var index = movies[0].image;
//document.getElementById('picture').src = index;