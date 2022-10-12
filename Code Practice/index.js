let i = 0;
let num = 5;
let random;
document.getElementById("Submit").onclick = function () {
  random = document.getElementById("number").value;
  random = Number(random);

  if (num == random) {
    document.getElementById("number").remove();
    document.getElementById("Submit").remove();
    document.getElementById("result").remove();
    document.getElementById("msg").remove();
    document.getElementById("last").innerHTML = "You won!";
  } else if (i < 4) {
    document.getElementById("last").innerHTML = "Try Again";
    let msg = `You have only ${4 - i} attempts remaining`;
    document.getElementById("msg").innerHTML = msg;
    i++;
  } else {
    document.getElementById("number").remove();
    document.getElementById("Submit").remove();
    document.getElementById("result").remove();
    document.getElementById("msg").remove();
    document.getElementById("last").innerHTML = "You Lost!";
  }
};
