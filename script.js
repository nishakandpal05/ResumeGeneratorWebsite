function AddNewAQ() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function AddNewI() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('iField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let iOb = document.getElementById("i");
    let iAddButtonOb = document.getElementById("iAddButton");

    iOb.insertBefore(newNode, iAddButtonOb);
}

function AddNewP() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('pField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let pOb = document.getElementById("p");
    let pAddButtonOb = document.getElementById("pAddButton");

    pOb.insertBefore(newNode, pAddButtonOb);
}

function AddNewSE() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('seField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let seOb = document.getElementById("se");
    let seAddButtonOb = document.getElementById("seAddButton");

    seOb.insertBefore(newNode, seAddButtonOb);
}
