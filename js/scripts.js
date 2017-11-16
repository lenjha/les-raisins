function Movie(title, year, score) {
  this.title = title;
  this.year = year;
  this.score = score;
}

Movie.prototype.input = function() {

}

$(document).ready(function() {
  $(".movie-form").submit(function() {
    event.preventDefault();
    var title = $("#title").val();
    var year = $("#year").val();
    var score = $("#score").val();
    var newMovie = new Movie(title, year, score);

    $(".tbody").append(
      `<tr>
      <td>` + newMovie.title + `</td>
      <td>`+ newMovie.year +`</td>
      <td>`+ newMovie.score +`</td>
      </tr>`);
  });
});
