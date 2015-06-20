(function(){
  var modules = ["person", "app"];
  var docFrag = document.createDocumentFragment();
  for(module in modules){
      var script = document.createElement("script");
      docFrag.appendChild(script);
      script.src = "scripts/" + modules[module] + ".js";
  }
  var body = document.body;
  body.appendChild(docFrag);
})();
