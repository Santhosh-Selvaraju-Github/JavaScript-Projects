var input = document.getElementById('input').value

function a1() {
    var numbers = document.getElementById('d111').innerHTML
    document.getElementById('input').value += numbers    
}nn
function a2() {
    var numbers = document.getElementById('d211').innerHTML
    document.getElementById('input').value += numbers    
}
function a3() {
    var numbers = document.getElementById('d311').innerHTML
    document.getElementById('input').value += numbers    
}
function a4() {
    var numbers = document.getElementById('d11').innerHTML
    document.getElementById('input').value += numbers    
}
function a5() {
    var numbers = document.getElementById('d21').innerHTML
    document.getElementById('input').value += numbers    
}
function a6() {
    var numbers = document.getElementById('d31').innerHTML
    document.getElementById('input').value += numbers    
}
function a7() {
    var numbers = document.getElementById('d1').innerHTML
    document.getElementById('input').value += numbers    
}
function a8() {
    var numbers = document.getElementById('d2').innerHTML
    document.getElementById('input').value += numbers    
}
function a9() {
    var numbers = document.getElementById('d3').innerHTML
    document.getElementById('input').value += numbers
}    
function a0() {
    var numbers = document.getElementById('d2111').innerHTML
    document.getElementById('input').value += numbers    
}
function cl() {
    document.getElementById('input').value = ""    
}
function pl() {
    document.getElementById('input').value += "+"    
}
function sub() {
    document.getElementById('input').value += "-"    
}
function mul() {
    document.getElementById('input').value += "*"    
}
function div() {
    document.getElementById('input').value += "/"    
}
function per() {
    document.getElementById('input').value += "%"    
}
function eq() {
    input = document.getElementById('input').value
    document.getElementById('input').value = eval(input)
}
function dot() {
    document.getElementById('input').value += "."
}
function del() {
    var del = document.getElementById('input').value

    console.log(del.length)
    del = del.slice(0,del.length-1)
    
    document.getElementById('input').value = del
}

