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
  });

});
