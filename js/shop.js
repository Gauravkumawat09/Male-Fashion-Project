const button = document.getElementById("category");
const div = document.getElementById("first-category");
// const button1 = document.getElementById("branding");
// const div1 = document.getElementById("second-category");
button.addEventListener("click", function() {
  
  if (div.style.display === "none") {
    div.style.display = "block"; 
  } else {
    div.style.display = "none"; 
    }

    // if (div1.style.display === "none") {
    //   div1.style.display = "block"; 
    //   }
    //   else {
    //   div1.style.display = "none";  
    // }
});


// const button1 = document.getElementById("branding");
// const div1 = document.getElementById("second-category");
// button.addEventListener("click", function() {

//   if (div1.style.display === "none") {
//     div1.style.display = "block"; 
//     }
//     else {
//     div1.style.display = "none";  
//   }
// });



document.getElementById("branding").onclick = function(){
    document.getElementById("second-category").style.display = "block";
}

document.getElementById("prize").onclick = function(){
    document.getElementById("third-category").style.display = "block";
  }
  
  document.getElementById("size").onclick = function(){
      document.getElementById("fourth-category").style.display = "block";
  }

  document.getElementById("color").onclick = function(){
    document.getElementById("fifth-category").style.display = "block";
  }
  
  document.getElementById("tag").onclick = function(){
      document.getElementById("sixth-category").style.display = "block";
  }

  //jkjkj
  //klkllk

  //;';';;'