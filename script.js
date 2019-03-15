"use strict"

function Telebe(ad, soyad, telebeclass) {
    this.name = ad,
    this.surname = soyad,
    this.Telebeclass = telebeclass

}

function Telebeclass(sinif, otag, komekci, muellim) {
    this.className = sinif,
    this.roomName = otag,
    this.mentor = komekci,
    this.instructor = muellim
}

let telebeArray = [];
let divForList = document.getElementById('peopleList');


function addTelebe() {
    let name = document.getElementById('nameIn').value;
    let surname = document.getElementById('surnameIn').value;
    let className = document.getElementById('classIn').value;
    let roomName = document.getElementById('roomIn').value;
    let mentor = document.getElementById('mentorIn').value;
    let instructor = document.getElementById('instructorIn').value;

    let tclass = new Telebeclass(className, roomName, mentor , instructor);
    let newTelebe = new Telebe(name, surname, tclass);
    telebeArray.push(newTelebe);
    showTelebe();
}

function showTelebe() {


    let list = "";

    list += "<ul>";
    for (let i = 0; i < telebeArray.length; i++) {
        list += "<li>" + telebeArray[i].name + "<br>" +
            telebeArray[i].surname + "<br>" + 
            telebeArray[i].Telebeclass.className +
            telebeArray[i].Telebeclass.roomName + "<br>" + 
            telebeArray[i].Telebeclass.mentor + "<br>" + 
            telebeArray[i].Telebeclass.instructor + "</li>";

    };
    list += '</ul>';
    divForList.innerHTML = list;
    console.log(list);
}