var foods = [
  {
    name: "Burger",
    price: 200,
  },
  {
    name: "Chowmein",
    price: 50,
  },
  {
    name: "Momo",
    price: 140,
  },

  {
    name: "Chowmein",
    price: 50,
  },
  {
    name: "Momo",
    price: 140,
  },
  {
    name: "Chowmein",
    price: 50,
  },
  {
    name: "Momo",
    price: 140,
  },
];

function Generate() {
  console.log("Generated");
  let myTab = `
  <table>
        <tr>
            <td>Name</td>
            <td>Price</td>
        </tr>
  `;
  foods.forEach((e) => {
    myTab += `
    <tr>
            <td> ${e.name}</td>
            <td> ${e.price}</td>
    </tr>
    `;
  });
  myTab += "</table>";

  document.getElementById("dynamicTab").innerHTML = myTab;
}

// var names = prompt("Enter the name");
// var value = confirm("Is this really you " + names);
// alert(value);

function gali() {
  if (confirm("Do you want to close.")) {
    newWindow.close();
  } else {
    newWindow = window.open("", "myWindow", "width=200,height=100");
    newWindow.document.write("<p>New videos ..</p>");
  }
}
