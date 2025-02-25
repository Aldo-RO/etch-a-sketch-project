const canvas=document.querySelector("#sketch");
const bs=document.getElementById("size");
const bm=document.getElementById("mode");
let normalMode=true;
let randomColorR;
let randomColorG;
let randomColorB;
function getRandomColor(color){
    return Math.floor(Math.random() * color);
}
bm.setAttribute("style", "background-color: blue; color: aliceblue; border-color: lightcyan");
bm.innerText="Normal Mode";
bm.onmouseover=function(){
    bm.setAttribute("style", "background-color: aliceblue; color: blue; border-color: blue");
}
bm.onmouseleave=function(){
    bm.setAttribute("style", "background-color: blue; color: aliceblue; border-color: lightcyan");
}
bm.addEventListener("click", ()=>{
    if (normalMode===true){
        normalMode=false;
        bm.setAttribute("style", "background-color: orange; color: aliceblue; border-color: lightcyan");
        bm.innerText="Advanced Mode";
        bm.onmouseover=function(){
            bm.setAttribute("style", "background-color: aliceblue; color: orange; border-color: orange");
        }
        bm.onmouseleave=function(){
            bm.setAttribute("style", "background-color: orange; color: aliceblue; border-color: lightcyan");
        }
    }else{
        normalMode=true;
        bm.setAttribute("style", "background-color: blue; color: aliceblue; border-color: lightcyan");
        bm.innerText="Normal Mode";
        bm.onmouseover=function(){
            bm.setAttribute("style", "background-color: aliceblue; color: blue; border-color: blue");
        }
        bm.onmouseleave=function(){
            bm.setAttribute("style", "background-color: blue; color: aliceblue; border-color: lightcyan");
        }
    }
});
for(let i=0; i<16; i++){
    let square=document.createElement("div");
    square.id="row";
    for(let j=0; j<16; j++){
        let column=document.createElement("div");
        let height=480/16;
        let width=480/16;
        column.setAttribute("style","background-color: white; height: "+height+"px; width: "+width+"px");
        column.id="column";
        column.style.opacity=0;
        column.onmouseover=function(){
            if (normalMode===true){
                column.style.backgroundColor="black";
                column.style.opacity=1;
            }else{
                let op=column.style.opacity*10;
                if(column.style.backgroundColor==="white"){
                    randomColorR=getRandomColor(256);
                    randomColorG=getRandomColor(256);
                    randomColorB=getRandomColor(256);
                    column.style.backgroundColor="rgb("+randomColorR+","+randomColorG+","+randomColorB+")";
                }
                switch(op){
                    case 0:
                        column.style.opacity=0.1;
                        break;
                    case 1:
                        column.style.opacity=0.2;
                        break;
                    case 2:
                        column.style.opacity=0.3;
                        break;
                    case 3:
                        column.style.opacity=0.4;
                        break;
                    case 4:
                        column.style.opacity=0.5;
                        break;
                    case 5:
                        column.style.opacity=0.6;
                        break;
                    case 6:
                        column.style.opacity=0.7;
                        break;
                    case 7:
                        column.style.opacity=0.8;
                        break;
                    case 8:
                        column.style.opacity=0.9;
                        break;
                    case 9:
                        column.style.opacity=1;
                        break;
                    default:
                        column.style.opacity=1;
                }
            }
        }
        square.appendChild(column);
    }
    canvas.appendChild(square);
}
let i=16;
bs.addEventListener("click", ()=>{
    let rows=prompt("Type the resolution of the square canvas");
    if(rows>100){
        alert("You can't use a resolution larger than 100");
    }else if (isNaN(rows)||rows==0||rows==""){
        alert("You have to use numbers to set the resolution");
    }else if(rows!=null){
        for(;i>0; i--){
            let square=document.getElementById("row");
            square.remove();
        }
        for(let i=0; i<rows; i++){
            const square=document.createElement("div");
            square.id="row";
            for(let j=0; j<rows; j++){
                const column=document.createElement("div");
                let height=480/rows;
                let width=480/rows;
                column.setAttribute("style","background-color: white; height: "+height+"px; width: "+width+"px");
                column.id="column";
                column.style.opacity=0;
                column.onmouseover=function(){
                    if (normalMode===true){
                        if (column.style.backgroundColor==="white"){
                            column.style.backgroundColor="black";
                            column.style.opacity=1;
                        }
                    }else{
                        let op=column.style.opacity*10;
                        if (column.style.backgroundColor==="white"){
                            randomColorR=getRandomColor(256);
                            randomColorG=getRandomColor(256);
                            randomColorB=getRandomColor(256);
                            column.style.backgroundColor="rgb("+randomColorR+","+randomColorG+","+randomColorB+")";
                        }
                        switch(op){
                            case 0:
                                column.style.opacity=0.1;
                                break;
                            case 1:
                                column.style.opacity=0.2;
                                break;
                            case 2:
                                column.style.opacity=0.3;
                                break;
                            case 3:
                                column.style.opacity=0.4;
                                break;
                            case 4:
                                column.style.opacity=0.5;
                                break;
                            case 5:
                                column.style.opacity=0.6;
                                break;
                            case 6:
                                column.style.opacity=0.7;
                                break;
                            case 7:
                                column.style.opacity=0.8;
                                break;
                            case 8:
                                column.style.opacity=0.9;
                                break;
                            case 9:
                                column.style.opacity=1;
                                break;
                            default:
                                column.style.opacity=1;
                        }
                    }
                }
                square.appendChild(column);
            }
            canvas.appendChild(square);
        }
        i=rows;
    }
});

//padding: 3mm;; border: 1mm solid lightgray 
