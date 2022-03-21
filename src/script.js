var str = "";
function addtostring(str, id){
    if(id == "="){
        str = document.getElementById("input").value;
        document.getElementById("input").value = eval(str);
    }
    else{
        document.getElementById("input").value += id; 
    }
}