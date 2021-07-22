
function calculate(){
    var paperPrice=document.getElementById("paperPrice").value;
var outs=document.getElementById("outs").value;
var quantity=document.getElementById("quantity").value;
var color=document.getElementById("color").value;
var side=document.getElementById("side").value;
var lamination=document.getElementById("lamination").value;
var pages=document.getElementById("pages").value;
var total=document.getElementById("total");
var paperCost=quantity*pages/outs/2*paperPrice/2;
paperCost=paperCost+(paperCost*.1);
var initialRunningCost=quantity/outs*side;
runningCost=(Math.round(initialRunningCost*side/1000))*225*color+900;
runningCost=runningCost*Math.round(pages/outs);
var negative=300*color;
negative=Math.round(pages/outs)*negative;
var laminationCost=(18*24*0.0065*initialRunningCost*lamination);
laminationCost=laminationCost+(laminationCost*0.1)
var binding=4500;
var cutting=runningCost*0.05;
var delivery=(paperCost+runningCost+laminationCost+binding+negative+cutting)*0.01;

    total.value=Math.round((paperCost+runningCost+laminationCost+binding+negative+cutting+delivery)*100)/100;
    if(total.value==0){
        total.value=0;
    }
    // total.value=paperPrice+outs+quantity+color+side+lamination+pages;
}
