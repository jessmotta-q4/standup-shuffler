let value1 = 0;
let value2 = 0;

var speakers1 = shuffle([{ name: 'Julia Joachimowicz', img: '/src/img/Julia.png' }, { name: 'Emma Mallon', img: '/src/img/Emma.png' }, { name: 'Jen Grajkowski', img: '/src/img/Jen_Grajkowski.png' }, { name: 'Jennifer Guo', img: '/src/img/Jen_Guo.png' }, { name: 'Luis Díaz', img: '/src/img/Luis.png' }, { name: 'Julianna Hindemith', img: '/src/img/Julianna.png' }, { name: 'Eduardo Arrangóiz', img: '/src/img/Eduardo.png' }]);


var speakers2 = shuffle([{ name: 'Abner Rojas', img: '/src/img/Abner.png' }, { name: 'Augusto Pavía Rosas', img: '/src/img/Augusto.png' }, { name: 'Cesar Villegas', img: '/src/img/Cesar.png' }, { name: 'Michael Li', img: '/src/img/Michael.png' }, { name: 'Jéssica Motta', img: '/src/img/Jessica.png' }, { name: 'Kathryn Robertson', img: '/src/img/Kathryn.png' }, { name: 'Marcos Herrera', img: '/src/img/Marcos.png' }, { name: 'Shaun Seeram', img: '/src/img/Shaun.png' }, { name: 'Enrique Lozano', img: '/src/img/Enrique.png' }, { name: 'Filip Swierczynski', img: '/src/img/Filip.png' }, { name: 'João Dantas', img: '/src/img/Joao.png' }, { name: 'Robert Ling', img: '/src/img/Robert.png' }]);



function *shuffle(arr) {
    var arrLen = arr.length;
    console.log(arrLen);
    while (arrLen--) {
        yield arr.splice(Math.floor(Math.random() * (arrLen + 1)), 1)[0];
    }
}



let shuffler1 = () => {
    value1 = speakers1.next().value;
    if (typeof value1 !== 'undefined') {
        document.getElementById("speakerName").innerHTML = value1.name;
        /* document.getElementById("speakerImage").style.display = 'flex'; */
        document.getElementById("speakerImage").setAttribute("src", value1.img);
    } else if (typeof value1 === 'undefined') {
        document.getElementById("speakerName").innerHTML = "End of list";
        document.getElementById("speakerImage").setAttribute("src", "/src/img/finished_list.jpg");
    }
}

let shuffler2 = () => {
    value2 = speakers2.next().value;
    if (typeof value2 !== 'undefined') {
        document.getElementById("speakerName").innerHTML = value2.name;
        document.getElementById("speakerImage").setAttribute("src", value2.img);
    } else if (typeof value2 === 'undefined') {
        document.getElementById("speakerName").innerHTML = "End of list";
        document.getElementById("speakerImage").setAttribute("src", "/src/img/finished_list.jpg");
    }
}