setInterval(function () {
  var d = new Date();

  clock = document.getElementById("clock");
  clock.style.border = "1px solid black";

  hr = d.getHours();

  if (hr > 5 && hr < 9) {
    greet = " Good Morning ";
  } else if (hr > 9 && hr < 18) {
    greet = " Good Afternoon ";
  } else if (hr > 18 && hr < 22) {
    greet = " Good Afternoon ";
  } else {
    greet = " Sutna Jaau ";
  }

  if (d.getHours() >= 12) {
    hour = d.getHours() % 12;
    indi = " PM";
  } else {
    hour = d.getHours();
    indi = " AM";
  }

  clock.innerHTML =
    "<h1>" +
    hour +
    " : " +
    d.getMinutes() +
    " : " +
    d.getSeconds() +
    indi +
    "</br>" +
    greet +
    "</h1>";
}, 1000);

i = 0;
while (i <= 1000) {
  console.log("I am learning JS " + i);
  i++;
}

var food = [
  {
    name: "momo",
    quantity: 2,
  },
  {
    name: "chowmein",
    quantity: 1,
  },
  {
    name: "samosa",
    quantity: 10,
  },
];

var tabs = document.getElementById("tab");

for (i = 0; i < 4; i++) {}

food.forEach((e) => {
  tabs =
    "<tr>" +
    "<td>" +
    e.name +
    "</td>" +
    "<td>" +
    e.quantity +
    "</td>" +
    "</tr>";
});
