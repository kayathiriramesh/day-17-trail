var div=document.createElement("div");
div.setAttribute("id","main");
var div1=document.createElement("div");
div1.setAttribute("class","main1");
div1.innerHTML=count();
div.append(div1,span);
document.body.append(div);

function count(){
    for(var i=10;i<0;i--){
        setTimeout(()=>{
            div1.innerHTML=`${i}`
            },1000);
    }
    var span=document.createElement("span");
    span.innerText="HAPPY Independence Day";
    }
    