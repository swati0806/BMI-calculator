
function cal_BMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let bmi = (weight / height / height) * 10000;
    let detail = " ";
    document.getElementById("R_BMI").innerHTML = bmi;
    if (bmi<=18.5) {
        detail="Underweight";
    }
    else if (bmi>18.5 && bmi<24.9) {
        detail="Normal weight";
    }
    else if (bmi>24.9 && bmi<29.9) {
        detail="Overweight";
    } else {
        detail="Obesity";
    } 
    document.getElementById("R_detail").innerHTML = detail;
}