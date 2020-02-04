$(".join-association a.add_fields").
  data("association-insertion-position", 'before').
  data("association-insertion-node", 'this');

$('.join-association').on('cocoon:after-insert',
  function () {
    $(".join-fields a.add_fields").
      data("association-insertion-position", 'before').
      data("association-insertion-node", 'this');
    $('.join-fields').on('cocoon:after-insert',
      function () {
        $(this).find(".from_list").remove();
        $(this).find("a.create_fields").hide();
      });
  });

