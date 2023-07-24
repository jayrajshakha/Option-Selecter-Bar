
const select = document.querySelector("#select");
const selectText = document.querySelector("#selectText");
const list = document.querySelector("#list");
const options = document.querySelectorAll(".option");

     select.onclick = function(){
    list.classList.toggle("hide ")
     }

for(option of options){
    option.addEventListener(
        "click",
        function(){
            selectText.innerHTML = this.textContent;

            
        }
    )
}
