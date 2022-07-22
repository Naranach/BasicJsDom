function enable(){
   if(document.getElementById("first").checked){
    console.log("log 1")
    document.getElementById("second").disabled=true
    document.getElementById("secim").disabled=true
}   else if (document.getElementById("second").checked){
    console.log("log 2")
    document.getElementById("first").disabled=true
    document.getElementById("secim").disabled=false
}   else {
    console.log("log 3")
    document.getElementById("secim").disabled=true
    document.getElementById("second").disabled=false
    document.getElementById("first").disabled=false
    return(enable)
}

}

function sbmt (){
    if( document.getElementById("first").checked){
        console.log("all")
    } else if (document.getElementById("second").checked){
        console.log(document.getElementById("secim").value)
    } else{
        console.log("null")
    }
}