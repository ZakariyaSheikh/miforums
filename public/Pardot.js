$(document).ready(function () {
  $("#getValue").on("click", function () {
    // Declare a checkbox array
    var chkArray = []
    // Look for all checkboxes that have a specific class and was checked
    $(".chk:checked").each(function () {
      chkArray.push($(this).val())
    })
    // Join the array separated by the comma
    var selected
    selected = chkArray.join(",")
    // Check if there are selected checkboxes
    if (selected.length > 0) {
      $(".fill").html(selected)
    } else {
    }
  })
})

$(document).ready(function () {

  $("select[name='event-names']").on('change', function() {
    $('#fill').val($(this).val());
  });
});
