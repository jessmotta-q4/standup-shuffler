let group = 0;
let counter = 0;

var speakers = [
  [
    { name: "Julia Joachimowicz", img: "./src/img/Julia.png", job: "Implementation Coordinator" },
    { name: "Emma Mallon", img: "./src/img/Emma.png", job: "Implementation Coordinator"},
    { name: "Jen Grajkowski", img: "./src/img/Jen_Grajkowski.png", job: "Implementation Manager" },
    { name: "Jennifer Guo", img: "./src/img/Jen_Guo.png", job: "Implementation Manager" },
    { name: "Luis Díaz", img: "./src/img/Luis.png", job: "Implementation Coordinator" },
    { name: "Julianna Hindemith", img: "./src/img/Julianna.png", job: "Implementation Manager" },
    { name: "Eduardo Arrangóiz", img: "./src/img/Eduardo.png", job: "Implementation Coordinator" },
  ],
  [
    { name: "Abner Rojas", img: "./src/img/Abner.png", job: "Web Developer III" },
    { name: "Augusto Pavía Rosas", img: "./src/img/Augusto.png", job: "Quality Assurance Analyst" },
    { name: "Cesar Villegas", img: "./src/img/Cesar.png", job: "Web Developer I" },
    { name: "Michael Li", img: "./src/img/Michael.png", job: "Web Developer I" },
    { name: "Jéssica Motta", img: "./src/img/Jessica.png", job: "Web Developer I" },
    { name: "Kathryn Robertson", img: "./src/img/Kathryn.png", job: "Data Entry Specialist" },
    { name: "Marcos Herrera", img: "./src/img/Marcos.png", job: "Web Developer II" },
    { name: "Shaun Seeram", img: "./src/img/Shaun.png", job: "Web Developer I" },
    { name: "Enrique Lozano", img: "./src/img/Enrique.png", job: "Data Entry Specialist" },
    { name: "Filip Swierczynski", img: "./src/img/Filip.png", job: "Web Developer II" },
    { name: "João Dantas", img: "./src/img/Joao.png", job: "Web Developer II" },
    { name: "Robert Ling", img: "./src/img/Robert.png", job: "Quality Assurance Analyst"},
  ],
];


function* shuffle(arr) {
  var arrLen = arr.length;
  console.log(arrLen);
  while (arrLen--) {
    yield arr.splice(Math.floor(Math.random() * (arrLen + 1)), 1)[0];
  }
}

group = shuffle(speakers[0]);

let shuffler = () => {
  let speaker = group.next().value;
  counter++;
  
  if (counter <= 6) {
    document.getElementById("speakerName").innerHTML = speaker.name;
    document.getElementById("speakerJob").innerHTML = speaker.job;
    document.getElementById("speakerImage").setAttribute("src", speaker.img);
  } else {
    group = shuffle(speakers[1]);
    if (typeof speaker !== "undefined") {
      document.getElementById("speakerName").innerHTML = speaker.name;
      document.getElementById("speakerJob").innerHTML = speaker.job;
      document.getElementById("speakerImage").setAttribute("src", speaker.img);
    } else {
      document.getElementById("speakerName").innerHTML = "End of list";
      document.getElementById("speakerJob").innerHTML = "";
      document
        .getElementById("speakerImage")
        .setAttribute("src", "/src/img/finished_list.jpg");
    }
  }
};

