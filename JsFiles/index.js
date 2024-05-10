// The block below is the defination for math stuff
// define that use '$' or '\\(' to show inline equations 
// For example: you are able to use $x^3$ directly.
// Please keep them if you want to use such stuff
MathJax = {
    tex: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
    },
    svg: {
      fontCache: "global",
    },
  };
// End of this block



$(function () {
$(".toggle").on("click", function () {
    if ($(".item").hasClass("active")) {
    $(".item").removeClass("active");
    } else {
    $(".item").addClass("active");
    }
});
});

// The block below is for the button function in the Hint page
// If you want to add more hints & check:
  // add: var hint_i = 0; var check_i = 0;
  // also add if conditions in function var_change_hint & var_change_check
var show_all_hint = 0; var show_all_check = 0;
var hint_1 = 0; var hint_2 = 0; var hint_3 = 0; var hint_4 = 0; var hint_5 = 0;
var check_1 = 0; var check_2 = 0; var check_3 = 0; var check_4 = 0; var check_5 = 0;
var hint_6 = 0; var hint_7 = 0; var hint_8 = 0; var hint_9 = 0; var hint_10 = 0;
var check_6 = 0; var check_7 = 0; var check_8 = 0; var check_9 = 0; var check_10 = 0;



function var_change_hint(hint_num, hint_now) {
  if (hint_num == 1) {
    hint_1 = hint_now;
  }
  if (hint_num == 2) {
    hint_2 = hint_now;
  }
  if (hint_num == 3) {
    hint_3 = hint_now;
  }
  if (hint_num == 4) {
    hint_4 = hint_now;
  }
  if (hint_num == 5) {
    hint_5 = hint_now;
  }
  if (hint_num == 1) {
    hint_6 = hint_now;
  }
  if (hint_num == 2) {
    hint_7 = hint_now;
  }
  if (hint_num == 3) {
    hint_8 = hint_now;
  }
  if (hint_num == 4) {
    hint_9 = hint_now;
  }
  if (hint_num == 5) {
    hint_10 = hint_now;
  }
}

function var_change_check(check_num, check_now) {
  if (check_num == 1) {
    check_1 = check_now;
  }
  if (check_num == 2) {
    check_2 = check_now;
  }
  if (check_num == 3) {
    check_3 = check_now;
  }
  if (check_num == 4) {
    check_4 = check_now;
  }
  if (check_num == 5) {
    check_5 = check_now;
  }
  if (check_num == 1) {
    check_6 = check_now;
  }
  if (check_num == 2) {
    check_7 = check_now;
  }
  if (check_num == 3) {
    check_8 = check_now;
  }
  if (check_num == 4) {
    check_9 = check_now;
  }
  if (check_num == 5) {
    check_10 = check_now;
  }
}

function disp(collection, num) {
  if (num == 1) {
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.display = 'inline-block';
    }
  }
}

function HideShow(in_but, in_focus) {
  var elem = document.getElementById(in_but);
  const collection = document.getElementsByClassName(in_focus);

  if (in_focus == 'unsee_hint') {
    if (show_all_hint == 0) {
      elem.innerHTML = 'Hide Hints';
      elem.style.background = 'green';
      show_all_hint = 1;
      console.log(disp(collection, 1));
    }
    else {
      elem.innerHTML = 'Show Hints';
      elem.style.background = 'rgb(127, 121, 121)';
      show_all_hint = 0;
      for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = 'none';
      }
    }
  }
  if (in_focus == 'unsee_check') {
    if (show_all_check == 0) {
      elem.innerHTML = 'Hide Checks';
      elem.style.background = 'green';
      show_all_check = 1;
      // focus = 'inline-block';
    }
    else {
      elem.innerHTML = 'Show Checks';
      elem.style.background = 'rgb(127, 121, 121)';
      show_all_check = 0;
      // focus = 'none';
    }
  }
}

function hint_show(hint_num) {
  // show hints 
  var step_box = document.getElementById(hint_num);
  var hint_box = document.getElementById('hint_'+hint_num);
  var hint_but = document.getElementById('but_'+hint_num+'_1');
  var hint_now = eval('hint_'+hint_num)
  
  if (hint_now == 0) {
    hint_box.style.display = 'block';
    hint_but.style.background = "rgb(18, 231, 29)";
    step_box.style.display = 'flex';
    hint_now = 1;
  }

  else {
    hint_box.style.display = 'none';
    hint_but.style.background = "none";
    hint_now = 0;
  }
  console.log(var_change_hint(hint_num, hint_now));
}

function check_show(hint_num) {
  // show contents in check
  var step_box = document.getElementById(hint_num);
  var hint_box = document.getElementById('check_'+hint_num);
  var hint_but = document.getElementById('but_'+hint_num+'_2');
  var hint_now = eval('check_'+hint_num)

  if (hint_now == 0) {
    hint_box.style.display = 'block';
    hint_but.style.background = "rgb(18, 231, 29)";
    step_box.style.display = 'flex';
    hint_now = 1;
  }

  else {
    hint_box.style.display = 'none';
    hint_but.style.background = "none";
    hint_now = 0;
  }
  console.log(var_change_check(hint_num, hint_now));

}
// End of this block