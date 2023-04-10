function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    var bmi = weight / ((height / 100) ** 2);
    document.getElementById("result").value = bmi.toFixed(1);

    if (bmi < 18.5) {
        document.getElementById("status").value = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("status").value = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById("status").value = "Overweight";
    } else {
        document.getElementById("status").value = "Obesity";
    }
}