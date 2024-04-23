const container = document.querySelector(".container");
const inputBox = document.querySelector("#input-box");
const list = document.querySelector("#list-container");
const addBtn = document.querySelector("#add");
const delBtn = document.querySelector("#del-all");
function addTask(){

    if(inputBox.value !== ""){
        let item = document.createElement("li");
        item.textContent = inputBox.value;
        list.appendChild(item);






        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        item.appendChild(delBtn);


        delBtn.className = "del";
        delBtn.addEventListener("click",()=>{
            list.removeChild(item);

        })
        let editBtn = document.createElement("button");

        editBtn.className = "edit";
        editBtn.innerText = "Edit";
        item.appendChild(editBtn);
        editBtn.addEventListener("click",function (){
            addBtn.innerText = "編輯";
            addBtn.addEventListener("click",function (){
                item.textContent = inputBox.value;
                list.removeChild(item);

                addBtn.innerText = "新增";
            });

        });




    }

    inputBox.value= "";
}

inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

delBtn.addEventListener("click",function (){
    list.innerHTML = "";
})