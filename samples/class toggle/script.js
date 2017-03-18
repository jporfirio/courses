document.querySelector("h1").addEventListener("click", function(){change();});

function change(){
  var h1 = document.querySelector("h1");
  var body = document.querySelector("body");
  if(h1.classList.contains("yellow")){
    h1.classList.remove("yellow");
    h1.classList.add("black");
    body.style.backgroundColor = "black";
  } else {
    h1.classList.remove("black");
    h1.classList.add("yellow");
    body.style.backgroundColor = "yellow";
  }
}

var dog = {
  name: "Travis", age: 30, bark: function() {console.log("woof!")}
};

function kebab_to_snake(str){
  return str.replace(/-/g, "_");
}

function factorial(factor){
  if(factor <= 1){
    return 1;
  } else {
    return factor * factorial(factor -1);
  }
}
