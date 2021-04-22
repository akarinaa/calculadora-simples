function mySum(n1,n2) {
    var n1 = Number(document.getElementById("elemUm").value);
    var n2 = Number(document.getElementById("elemDois").value);
    var mySumResult = n1 + n2;

    document.getElementById("campoRes").innerHTML = "O resultado é " + mySumResult + ".";
}

function mySub(n1, n2) {
    var n1 = Number(document.getElementById("elemUm").value);
    var n2 = Number(document.getElementById("elemDois").value);
    var mySumResult = n1 - n2;

    document.getElementById("campoRes").innerHTML = "O resultado é " + mySumResult + ".";
}

function myProd(n1, n2) {
    var n1 = Number(document.getElementById("elemUm").value);
    var n2 = Number(document.getElementById("elemDois").value);
    var mySumResult = n1 * n2;

    document.getElementById("campoRes").innerHTML = "O resultado é " + mySumResult + ".";
}

function myDivi(n1, n2) {
    var n1 = Number(document.getElementById("elemUm").value);
    var n2 = Number(document.getElementById("elemDois").value);
    var mySumResult = n1 / n2;

    document.getElementById("campoRes").innerHTML = "O resultado é " + mySumResult + ".";
}