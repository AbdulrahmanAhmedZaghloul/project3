let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menuIcon.onclick = () => {
menuIcon.classList.toggle("fa-xmark");
  navlist.classList.toggle("open");
};

$(document).ready(function () {
  $("#loed").fadeOut(2000, function () {
    $("body").css("overflow", "auto");
  });
});
// /////////////////// toggle icon navbar transparent  ////////////////////////

let x = setTimeout(function () {console.log('hllol')},3000);
$(window).scroll(function () {
  let doscroll = $(window).scrollTop();
  if (doscroll > teoset - 50) {
    $("header").css("backgroundColor", "rgba(0, 0, 0)");
    $("#butup").fadeIn(500);
  } else {
    $("header").css("backgroundColor", "rgba(0, 0, 0, 0.4)");
    $("#butup").fadeOut(500);
  }
});
// /////////////////// toggle icon navbar transparent  ////////////////////////
// /////////////////// toggle icon navbar   ////////////////////////

// ////..../////////////////////////////
// /////////////////// ready load fadeout  ////////////////////////

// /////////////////// ready load fadeout  ////////////////////////
// ////..../////////////////////////////

  ////////////////////colorbox///////////////////////////////
  let boxwidth = $("#colorboxw").outerWidth();
  $("#side").animate({ left: `-${boxwidth}` }, 0); // يبقي جوه اول م افتح الموقع Boxده علشان ال
  $("#toggln").click(function () {
    if ($("#side").css("left") == "0px") {
      $("#side").animate({ left: `-${boxwidth}` }, 1000);
    } else {
      $("#side").animate({ left: `0px` }, 1000);
    }
  });

  for (let i = 0; i < $(".item").length; i++) {
    let red = Math.round(Math.random() * 255);
    let red1 = Math.round(Math.random() * 255);
    let red2 = Math.round(Math.random() * 255);
    $(".item").eq(i).css("backgroundColor", `rgb(${red},${red1},${red2})`);
  }
  $(".item").click(function () {
    let xcolor = $(this).css("backgroundColor");
    $("p ,h1 ,h2,h3,h4,h5,h6,a").css("color", xcolor);
  });
// ////////////////////colorbox///////////////////////////////

// ////////////////////........///////////////////////////////

let colorBoxWidth = $("#colorBox").outerWidth(); //colorBoxWidth واحطها في colorBoxانا كده بجيب عرض ال innerWidth
$("#sideBar").animate({ right: `-${colorBoxWidth}` }, 0); // يبقي جوه اول م اف  الموقع Boxده علشان ال
$("#sideBarToggle").click(function () {
    if ($('#sideBar').css("right") == "0px")//البوكس كده بره
    {
        $("#sideBar").animate({ right: `-${colorBoxWidth}` }, 2000);//right ب السالب ل colorBoxWidthكده لم اضغط علي الاعدادت داخل ال
    }
    else {
        $('#sideBar').animate({ right: `0px` }, 2000);//ده كده يبقي بره	0 = right ب sideBar انا كده بقول لو البوكس
    }

})
// // Background-img

$(".box-image img").click(function () {
    let imgSrc = $(this).attr("src");
    $(".home2").css("backgroundImage", `url(${imgSrc})`);
});



