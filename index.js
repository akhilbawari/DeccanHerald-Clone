
// slide nav bar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
document.querySelector("#newsletter").addEventListener("click",function(){
  window.location.href="www.google.com"
})
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  } 
});
}

let imagelink=[
  "https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/07/22/gold-reuters-1129075-1658489368.jpg?itok=vhaVGBFe",
  "https://www.deccanherald.com/sites/dh/files/styles/gallery_thumbnails/public/gallery_images/2022/07/22/National%20FIlm%20Awards.jpg",
  "https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/07/22/belagavi-dh-1129081-1658490159.jpg?itok=sVLTUnZl",
  "https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/07/22/dominos-reuters-1129090-1658492242.jpg?itok=_bcB1DSE",

]
let leftBtn=document.getElementById("left-btn");
let rightBtn=document.getElementById("right-btn");
let crauser=document.getElementById("crauser")
let imagestate=0;
rightBtn.addEventListener("click",function(){
  imagestate++
  if(imagestate===imagelink.length){
    imagestate=0;
  }
  crauser.src=imagelink[imagestate];

})
leftBtn.addEventListener("click",function(){
  imagestate--
  if(imagestate<0){
    imagestate=imagelink.length-1;
  }
  crauser.src=imagelink[imagestate];

})