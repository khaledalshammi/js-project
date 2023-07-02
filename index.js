let myinput = document.querySelector("input");
let mybotn1 = document.querySelector("button");
let myform = document.querySelector("form");
let myul = document.createElement("ul");
myul.classList.add("stand");
let mydilt = [];
let myindex = 0;
if (!localStorage.getItem("mydiclist")){
    localStorage.setItem("mydiclist", JSON.stringify(mydilt));
}else{
    mydilt = JSON.parse(localStorage.getItem("mydiclist"));
    mydilt.forEach(e => {
        let mybbttnn = document.createElement("button");
        let myttxt = document.createTextNode("X");
        mybbttnn.appendChild(myttxt);
        let myeee = document.createElement("li");
        myeee.textContent = e["task"];
        myeee.appendChild(mybbttnn);
        myul.appendChild(myeee);
        mybbttnn.addEventListener("click",()=>{
            let nrekk = mydilt.filter(i=>i.id !== e["id"]);
            localStorage.setItem("mydiclist", JSON.stringify(nrekk));
            location.reload();
        })
    })
}
if (!localStorage.getItem("index")){
    localStorage.setItem("index", myindex);
}else{
    myindex = parseInt(localStorage.getItem("index"));
}
myform.addEventListener("submit",function(e){
    e.preventDefault();
    let mineen = myinput.value;
    if (mineen !== ""){
        let newObj = {"id":myindex, "task":mineen};
        mydilt.push(newObj);
        myindex++;
        localStorage.setItem("mydiclist", JSON.stringify(mydilt));
        localStorage.setItem("index", myindex);
        myform.submit();
    }
})
document.body.appendChild(myul);