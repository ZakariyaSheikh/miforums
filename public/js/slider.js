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
  $("#getValue").on("click", function () {
    var tkdArray = []
    $(".tkd:checked").each(function () {
      tkdArray.push($(this).val())
    })
    var selected
    selected = tkdArray.join(";")
    if (selected.length > 0) {
      $(".fillTerritories").html(selected)
    } else {
    }
  })
})



$(document).ready(function () {
$("#sectionForm").submit(function(){
  if ( $("#Lead-Source").val().length === 0 ) 
         $("#Lead-Source").val('Web');
});
})


$(document).ready(function () {
  $("input[name='section").on("click", function () {
    var val = $(this).val()
    var parent = $(this)
    $("input[value='" + val + "']").each(function () {
      $(this).not(parent).attr("readonly", parent.is(":checked"))
    })

    $("input[type=checkbox]").click(function () {
      var isReadOnly = $(this).attr("readonly") === undefined ? false : true
      if (isReadOnly) {
        $(this).removeAttr("readonly")
        return false
      }
    })
  })
})


// $(document).ready(function () {
//     $("#getValue").click(function(event){
//         $('communityForm').submit();
//     });
//   $('#communityForm').submit(function(event){
//        $('#getValue').val('done!');
//     });
// });


$(document).ready(function(){

  $('.mobileSavingsButton').on( "click", function() {
    $(".savings-arrow").addClass("flip")
});
});


$(document).ready(function () {
  $("#dropcheck").on("change", function () {
    if ($(this).is(":checked")) {
      $(".dropcheckLabel").addClass("activeMenu")
    } else {
      $(".dropcheckLabel").removeClass("activeMenu")
    }
  })
  $("#dropcheckPerson").on("change", function () {
    if ($(this).is(":checked")) {
      $(".dropcheckLabelPerson").addClass("activeMenu")
    } else {
      $(".dropcheckLabelPerson").removeClass("activeMenu")
    }
  })
  $("#dropcheckPerson2021").on("change", function () {
    if ($(this).is(":checked")) {
      $(".dropcheckLabelPerson2021").addClass("activeMenu")
    } else {
      $(".dropcheckLabelPerson2021").removeClass("activeMenu")
    }
  })
  $("#dropcheckPerson2022").on("change", function () {
    if ($(this).is(":checked")) {
      $(".dropcheckLabelPerson2022").addClass("activeMenu")
    } else {
      $(".dropcheckLabelPerson2022").removeClass("activeMenu")
    }
  })

  $("#dropcheckPersonMobile").on("change", function () {
    if ($(this).is(":checked")) {
      $(".dropcheckLabelPersonMobile").addClass("activeMenu")
    } else {
      $(".dropcheckLabelPersonMobile").removeClass("activeMenu")
    }
  })

  $("#dropcheckMobile").on("change", function () {
    if ($(this).is(":checked")) {
      $(".dropcheckLabelMobile").addClass("activeMenu")
    } else {
      $(".dropcheckLabelMobile").removeClass("activeMenu")
    }
  })

  $("#dropcheckPersonMobile2").on("change", function () {
    if ($(this).is(":checked")) {
      $(".dropcheckLabelPersonMobile2").addClass("activeMenu")
    } else {
      $(".dropcheckLabelPersonMobile2").removeClass("activeMenu")
    }
  })

  $("#dropcheckMobile2").on("change", function () {
    if ($(this).is(":checked")) {
      $(".dropcheckLabelMobile2").addClass("activeMenu")
    } else {
      $(".dropcheckLabelMobile2").removeClass("activeMenu")
    }
  })

  $(".has-children").hover(
    function () {
      $(".has-children a.nav").addClass("activeMenu")
    },
    function () {
      $(".has-children a.nav").removeClass("activeMenu")
    }
  )

  

  $('#modal2').modal().on('shown', function(){
    $('body').css('overflow', 'hidden');
}).on('hidden', function(){
    $('body').css('overflow', 'auto');
})
}) // End offunction

//
//   if ($('.site-navbar .site-navigation .site-menu .dropcheck:checked').css('display') == "contents"){
//         $('.dropcheckLabel').addClass("openedArrow");
//    }
// });

g_timer = null
$(document).ready(function () {
  startTimer1()
  startTimer2()
  startTimer3()
})

function startTimer1() {
  $(document).ready(function () {
    timer1 = setTimeout(function () {
      $(".hero-slider").addClass("hideBanner")
      $(".hero-slider2").removeClass("hideBanner")
      // $(".hero-slider3").removeClass("hideBanner")
    }, 6000)
  })
}

function startTimer2() {
  $(document).ready(function () {
    timer2 = setTimeout(function () {
      $(".hero-slider2").addClass("hideBanner")
      $(".hero-sliderFuture").removeClass("hideBanner")
    }, 11000)
  })
}

function startTimer3() {
  $(document).ready(function () {
    timer3 = setTimeout(function () {
      $(".hero-sliderFuture").addClass("hideBanner")
      // $(".hero-slider4").removeClass("hideBanner")
      $(".hero-slider").removeClass("hideBanner").fadeIn("slow")
    clearTimeout(g_timer)
      startTimer1()
      startTimer2()
    startTimer3()
    }, 16000)
  })
}
// Timer 3 usually 16000

// $(document).ready(function () {
//   timer3 = setInterval(function () {
//     $(".hero-slider3").addClass("hideBanner")
//     // $(".hero-slider4").addClass("hideBanner")
//     $(".hero-slider").removeClass("hideBanner").fadeIn("slow")
//     clearTimeout(g_timer)
//     startTimer1()
//     startTimer2()
//     startTimer3()
//   }, 21000)
// })


