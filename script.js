let incrementbutton=document.querySelector(".incre");
let savebutton=document.querySelector(".save");
let countel=document.querySelector(".count");
let prev=document.querySelector(".phli");
let count=0;
//
const calculate=()=>{
    count++;
countel.innerText=count;

}
const pentity=()=>{
    prev.innerText+="{"+ count+  "}" +",";
}
//
savebutton.addEventListener("click",pentity);
incrementbutton.addEventListener("click",calculate);

