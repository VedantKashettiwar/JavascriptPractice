let a;
let b;
document.getElementById("Hsubmit").onclick = function(){
    a = document.getElementById("height").value;
    a=Number(a)
    b = document.getElementById("weight").value;
    b=Number(b)
    let bmi;
    a=(a/100)*(a/100);
    bmi=b/a
    bmi=parseFloat(bmi.toFixed(2))
    console.log(bmi)
    if(a==0 && b==0){
        document.getElementById("result").innerHTML = "Enter all values";
    }
    else{
        document.getElementById("result").innerHTML = "Your BMI is " + bmi;
    }
    if(bmi<18.5){
        document.getElementById("feedback").innerHTML = "Underweight";
    }
    else if(bmi>18.5 && bmi<24.9){
        document.getElementById("feedback").innerHTML = "Normal Weight";
    }
    else if(bmi>25 && bmi<29.9){
        document.getElementById("feedback").innerHTML = "OverWeight";
    }
    else if(bmi>=30){
        document.getElementById("feedback").innerHTML = "Obesity";
    }
}