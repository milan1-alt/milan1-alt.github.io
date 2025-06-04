function buttonclick(val)
    { 
        document.getElementById("screen").value+=val;
    }
function cccclear() {
    
    document.getElementById("screen").value='';

}
function calclick() {
    var text= document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result;
    
}