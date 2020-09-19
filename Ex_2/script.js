txt = prompt("Digite alguma coisa");

function pParag() {
    p1.innerHTML = txt;
}

function PTresParag() {
    p2.innerHTML = txt;
    p3.innerHTML = txt;
    p4.innerHTML = txt;
}

function dellParag() {
    p2.innerHTML = "";
}

function newAlert() {
    alert(txt);
}

function styleCor() {
    p4.classList.add("btnParag")
}

function styleSize() {
    p1.classList.add("btnSize")
}

function cor() {
    p0.style.color = "black";
}

function reload() {
    document.location.reload(true)
}