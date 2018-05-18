$( function() {
    var availableTags = [
      "Malang",
      "Paris",
      "Bali",
      "Dubai",
      "Minsk"
      ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );