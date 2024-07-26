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

function AddNewS(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('sseField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let sseOb = document.getElementById("sse");
    let sseAddButtonOb = document.getElementById("sseAddButton");

    sseOb.insertBefore(newNode, sseAddButtonOb);

}

function generateResume(){
    let name = document.getElementById('name').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = name;

    document.getElementById('nameT2').innerHTML = name;

    document.getElementById('emailT').innerHTML = document.getElementById('email').value;

    document.getElementById('contactT').innerHTML = document.getElementById('mnumber').value;

    document.getElementById('addressT').innerHTML = document.getElementById('address').value;

    document.getElementById('linkedinT').innerHTML = document.getElementById('liid').value;

    document.getElementById('githubT').innerHTML = document.getElementById('git').value;

    document.getElementById('leetcodeT').innerHTML = document.getElementById('lc').value;

    document.getElementById('objectiveT').innerHTML = document.getElementById('objective').value;

    let ss = document.getElementsByClassName('sseField');
    let strr = '';
    for(let s of ss){
        strr = strr + `<li> ${s.value} </li>`;
    }
    document.getElementById('sT').innerHTML=strr;

    let aqs = document.getElementsByClassName('aqField');
    let str = '';
    for(let aq of aqs){
        str = str + `<li> ${aq.value} </li>`;
    }
    document.getElementById('aqT').innerHTML=str;

    let is = document.getElementsByClassName('iField');
    let str1 = '';
    for(let i of is){
        str1 = str1 + `<li> ${i.value} </li>`;
    }
    document.getElementById('iT').innerHTML=str1;

    let ps = document.getElementsByClassName('pField');
    let str2 = '';
    for(let p of ps){
        str2 = str2 + `<li> ${p.value} </li>`;
    }
    document.getElementById('pT').innerHTML=str2;

    let exps = document.getElementsByClassName('seField');
    let str3 = '';
    for(let e of exps){
        str3 = str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById('eT').innerHTML=str3;

    let file = document.getElementById('img').files[0];
    console.log(file);
    let reader= new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend=function(){
        document.getElementById('imgT').src=reader.result;
    }


    document.getElementById('resume-form').style.display="none";
    document.getElementById('resume-template').style.display="block";

}

function printResume(){
    window.print();
}
