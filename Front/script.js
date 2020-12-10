window.onload = inicio()

function inicio() {
    let botonReq = document.getElementById("req");
    botonReq.addEventListener("click", clickReq);
}

function clickReq() {
    fetch("http://localhost:8080/greeting").
        then(response => response.json()).
        then(cargarJson);

}

function cargarJson(json) {
    let span1 = document.getElementById("id");
    let span2 = document.getElementById("content");

    let restful = json;

    span1.innerHTML = restful.id;
    span2.innerHTML = restful.content;
}