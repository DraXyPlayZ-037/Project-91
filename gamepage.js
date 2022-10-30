p1n = localStorage.getItem("Player1");
p2n = localStorage.getItem("Player2");

document.getElementById("p1").innerHTML = p1n + " : ";
document.getElementById("p2").innerHTML = p2n + " : ";


p1s = 0;
p2s = 0;


document.getElementById("s1").innerHTML = p1s;
document.getElementById("s2").innerHTML = p2s;

function multian() {

    num1 = document.getElementById("number1k").value;
    num2 = document.getElementById("number2k").value;
    console.log(num1 + "x" + num2 + "=")

    ra12 = parseInt(num1) * parseInt(num2);
    console.log(ra12);

    htm1 = "<h4>" + num1 + "X" + num2 + "</h4>";
    htm2 = "<br> Answer: <input type='text' id='chek' class='form-control'> ";
    htm3 = "<br><br><button class='btn btn-info' onclick='checa()'>Check!</button>";
    end4 = htm1 + htm2 + htm3;

    document.getElementById("output").innerHTML = end4;

    document.getElementById("number1k").value = "";
    document.getElementById("number2k").value = "";
}