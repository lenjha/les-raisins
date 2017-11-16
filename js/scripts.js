var movies = [];

function Movie(title, year, score) {
  this.title = title;
  this.year = year;
  this.score = score;
}


$(document).ready(function() {
  $(".movie-form").submit(function() {
    event.preventDefault();
    var title = $("#title").val();
    var year = $("#year").val();
    var score = parseInt($("#score").val());
    var newMovie = new Movie(title, year, score);

    movies.push(newMovie);
    console.log(movies);
    $(".tbody").append(
      `<tr>
      <td>` + newMovie.title + `</td>
      <td>`+ newMovie.year +`</td>
      <td>`+ newMovie.score +`</td>
      </tr>`);
      $(".table").show();
  });
  $("#sort").click(function(){
    movies.sort(function(a, b) {
      return b.score - a.score;
    });
    console.log(movies);
    $(".tbody").empty();
    movies.forEach(function(movie) {
      $(".tbody").append(
        `<tr>
        <td>` + movie.title + `</td>
        <td>`+ movie.year +`</td>
        <td>`+ movie.score +`</td>
        </tr>`);
      });
    });
});
