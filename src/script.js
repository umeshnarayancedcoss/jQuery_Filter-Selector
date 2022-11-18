// --------Initilizing Product Array------
var products = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS"
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android"
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS"
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android"
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android"
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows"
  },
];

// ----Dropdown For Filtering Table Data-----------
$("div").append(
  "<select id='sel' onchange='filterText()'><option>-Select-</option><option>Apple</option><option>Motorola</option><option>Samsung</option><option>ASUS</option><option>Microsoft</option></select> <select id='sel1' onchange='filterText1()'><option>-Select-</option><option>iOS</option><option>Android</option><option>Windows</option></selection>"
);

//-----Appending Data into Table----------
$("thead").append(
  '<tr><th>ID</th><th>Name</th><th id="brand">Brand</th><th id="os">Operating System</th><th>Remove</th>'
);
products.forEach(function (item) {
  $("tbody").append(
    "<tr class='content'><td>" +
    item.id +
    "</td><td>" +
    item.name +
    "</td><td>" +
    item.brand +
    "</td><td>" +
    item.os +
    "</td><td>" +
    "<button>X</button>" +
    "</td></tr>"
  );
});

//---------Search Box Filter-------------------
$("#search").append('<input type="text" placeholder="Search" id="text"> ');

//---------functions to check empty value First dropdown----------
function filterText() {
  var rex = $("#sel").val();
  var rex1 = $("#sel1").val();
  let result = "-Select-";
  if (rex1 == result) {
    $("#display_none").css("display", "block");
  } else {
    $("#display_none").css("display", "none");
    show_result(rex, rex1);
  }
}
//-----functions to check empty value in second dropdown--------------

function filterText1() {
  var rex = $("#sel").val();
  var rex1 = $("#sel1").val();
  let result = "-Select-";
  if (rex == result) {
    $("#display_none").css("display", "block");
  } else {
    $("#display_none").css("display", "none");

    show_result(rex, rex1);
  }
}

// Function to check combinations
function show_result(rex, rex1) {
  if (rex == "Apple" && rex1 == "iOS") {
    $("#select_comb").css("display", "none");
    result(rex, rex1);
  } else if (rex == "Motorola" && rex1 == "Android") {
    $("#select_comb").css("display", "none");
    result(rex, rex1);
  } else if (rex == "Samsung" && rex1 == "Android") {
    $("#select_comb").css("display", "none");
    result(rex, rex1);
  } else if (rex == "ASUS" && rex1 == "Android") {
    $("#select_comb").css("display", "none");
    result(rex, rex1);
  } else if (rex == "Microsoft" && rex1 == "Windows") {
    $("#select_comb").css("display", "none");
    result(rex, rex1);
  } else {
    $("#select_comb").css("display", "block");
    $(".content").hide();
  }
}

//-----Function for print filtered result---------
function result(rex, rex1) {
  $(".content").hide();
  $("table tbody tr").each(function () {
    var one = $(this).find("td:eq(2)").text();
    var two = $(this).find("td:eq(3)").text();
    if (one == rex && two == rex1) {
      $(this).show();
    }
  });
}

// Search text at last value----------
$("#text").keyup(function () {
  var value = this.value;

  $("table tbody tr").each(function () {
    var found = false;
    $(this).each(function () {
      if ($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        found = "true";
      }
    });
    if (found == "true") {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});

//-----Hide Row on X button----------------
$(".content button").click(function () {
  $(this).closest("tr").hide();
});
// --------------------------------Script Ends Here----------------------
