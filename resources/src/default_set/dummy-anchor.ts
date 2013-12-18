module DEFAULT_SET {
  // ダミーアンカー無効
  export function disableDummyAnchor(){
    var anc: any = document.getElementsByTagName("a"),
        ancVal;
    for (var i = 0, I = anc.length; i < I; i++) {
      ancVal = anc[i].getAttribute("href");
      if (ancVal == "#" || ancVal == "") {
        anc[i].addEventListener("click", function(e) {
          e.preventDefault();
          e.stopPropagation();
        }, false);
      }
    }
  }

  disableDummyAnchor();

}
