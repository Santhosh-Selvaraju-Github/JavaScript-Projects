let kgValue,kgValue1,mValue,mValue1;

const reset =()=>{
    document.querySelector("#i1").value = ""
    document.querySelector("#i2").value = ""
}

const cal =()=>{
    let a = parseInt(document.getElementById("i1").value)
    let b = parseInt(document.getElementById("i2").value)

    let s1 = document.getElementById("s1").value
    let s2 = document.getElementById("s2").value

    if((a>0 && a<1000) && (b>0 && b<1000)){
        if (s1 === "value1") {
            let cmValue = parseInt(document.getElementById("i1").value)
            mValue1 = cmValue * 0.01
        }else if(s1 === "value2"){
            mValue = parseFloat(document.getElementById("i1").value)
        }
        if (s2 === "value3") {
            kgValue = parseFloat(document.getElementById("i2").value)
        }else if(s2 === "value4"){
            let poValue = parseFloat(document.getElementById("i2").value)
            kgValue1 = poValue * 0.454
        }
        let kg1 = kgValue || kgValue1
        let m1 = mValue || mValue1

        let bmi = (kg1 / (m1 * m1)).toFixed(2)
        console.log(bmi)
        document.getElementById("ha").innerHTML = `Your BMI Score: ${bmi}`
    }else{
        document.getElementById("ha").innerHTML = "Invalid details"
    }
}