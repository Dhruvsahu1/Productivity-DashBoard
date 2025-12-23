function openFeature() {
  var allElems = document.querySelectorAll(".elems");
  var fullElemPage = document.querySelectorAll(".fullElem");
  var fullElemPageBack = document.querySelectorAll(".fullElem .back");

  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      fullElemPage[elem.id].style.display = "block";
    });
  });
  fullElemPageBack.forEach(function (elem) {
    elem.addEventListener("click", function () {
      fullElemPage[elem.id].style.display = "none";
    });
  });
}
openFeature();