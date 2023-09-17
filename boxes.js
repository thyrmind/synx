function toggleBoxes() {
  var checkBox = document.getElementById("showidentity");
  var div = document.getElementById("identity");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showcthulhu");
  var div = document.getElementById("cthulhu");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showaxsys");
  var div = document.getElementById("axsys");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showatlantis");
  var div = document.getElementById("atlantis");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showbarker");
  var div = document.getElementById("barker");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showsarkon");
  var div = document.getElementById("sarkon");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showcybergothic");
  var div = document.getElementById("cybergothic");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showpandemonium");
  var div = document.getElementById("pandemonium");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showqabbala");
  var div = document.getElementById("qabbala");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showcalend");
  var div = document.getElementById("calend");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showphyl");
  var div = document.getElementById("phyl");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showchasm");
  var div = document.getElementById("chasm");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showcanon");
  var div = document.getElementById("canon");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showspiral");
  var div = document.getElementById("spiral");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showdevil");
  var div = document.getElementById("devil");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  input.dispatchEvent(new Event('input'));
}
document.addEventListener('DOMContentLoaded', function() {
   toggleBoxes();
}, false);
