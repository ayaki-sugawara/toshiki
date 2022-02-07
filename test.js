function loadJSON(){
  const info = document.getElementById("info");
  $.getJSON("map.json", function(json){
    console.log(json);
    for(var item in json){
      for(var item2 in json[item]){
        var textNode = document.createTextNode(json[item][item2]);
        info.appendChild(textNode);
        var br = document.createElement( "br" );
        info.appendChild(br);
      }
    }
  });
}
window.onload = loadJSON();
