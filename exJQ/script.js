$(document).ready(function () {
  $("#add").click(function (e) {
    e.preventDefault();
    let valor = $("#valor").val();
    $("#list").append(`
            <div class="item">
                    <input class="check" type="checkbox">
                    <p>${valor}</p>
                </div> 
            `);
    $("#valor").val("");
  });
  $("#list").on("change", ".check", function () {
    let texto = $(this).parent().find("p");
    if ($(this).prop("checked")) {
      texto.css("text-decoration", "line-through");
    } else {
      texto.css("text-decoration", "none");
    }
  });
});
