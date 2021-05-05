function n_kerület() {
  var oldal_méret = document.getElementById("n_oldal").value;
  var oldal_mértékegy = document.getElementById("n_o_mértékegy").value;
  var kerület_mértékegy = document.getElementById("n_k_mértékegy").value;
  var tizedes_jegyek = document.getElementById("n_k_tizedes").value;
  var méret;
  if (kerület_mértékegy == "km") {
    //kilóméter
    if (oldal_mértékegy == "km") {
      méret = oldal_méret * 1;
    }
    if (oldal_mértékegy == "m") {
      méret = oldal_méret / 1000;
    }
    if (oldal_mértékegy == "dm") {
      méret = oldal_méret / 10000;
    }
    if (oldal_mértékegy == "cm") {
      méret = oldal_méret / 100000;
    }
    if (oldal_mértékegy == "mm") {
      méret = oldal_méret / 1000000;
    }
  }
  if (kerület_mértékegy == "m") {
    //méter
    if (oldal_mértékegy == "km") {
      méret = oldal_méret * 1000;
    }
    if (oldal_mértékegy == "m") {
      méret = oldal_méret * 1;
    }
    if (oldal_mértékegy == "dm") {
      méret = oldal_méret / 10;
    }
    if (oldal_mértékegy == "cm") {
      méret = oldal_méret / 100;
    }
    if (oldal_mértékegy == "mm") {
      méret = oldal_méret / 1000;
    }
  }
  if (kerület_mértékegy == "dm") {
    //deciméter
    if (oldal_mértékegy == "km") {
      méret = oldal_méret * 10000;
    }
    if (oldal_mértékegy == "m") {
      méret = oldal_méret * 1000;
    }
    if (oldal_mértékegy == "dm") {
      méret = oldal_méret * 1;
    }
    if (oldal_mértékegy == "cm") {
      méret = oldal_méret / 10;
    }
    if (oldal_mértékegy == "mm") {
      méret = oldal_méret / 100;
    }
  }
  if (kerület_mértékegy == "cm") {
    // centiméter
    if (oldal_mértékegy == "km") {
      méret = oldal_méret * 100000;
    }
    if (oldal_mértékegy == "m") {
      méret = oldal_méret * 100;
    }
    if (oldal_mértékegy == "dm") {
      méret = oldal_méret * 10;
    }
    if (oldal_mértékegy == "cm") {
      méret = oldal_méret * 1;
    }
    if (oldal_mértékegy == "mm") {
      méret = oldal_méret / 10;
    }
  }
  if (kerület_mértékegy == "mm") {
    // miliméter
    if (oldal_mértékegy == "km") {
      méret = oldal_méret * 1000000;
    }
    if (oldal_mértékegy == "m") {
      méret = oldal_méret * 1000;
    }
    if (oldal_mértékegy == "dm") {
      méret = oldal_méret * 100;
    }
    if (oldal_mértékegy == "cm") {
      méret = oldal_méret * 10;
    }
    if (oldal_mértékegy == "mm") {
      méret = oldal_méret * 1;
    }
  }

  var kerület = 4 * méret;
  if (oldal_méret > 0 && tizedes_jegyek != 0) {
    document.getElementById("n_kerület").innerHTML =
      kerület.toFixed(tizedes_jegyek) + kerület_mértékegy;
  }

  if (oldal_méret <= 0) {
    alert("Nem lehet nulla vagy annál kisebb az a oldal mérete!");
  }
  
  if (tizedes_jegyek == 0 && oldal_méret > 0) {
    document.getElementById("n_kerület").innerHTML =
      kerület + kerület_mértékegy;
  }
}

function n_terület() {
  var oldal_méret = document.getElementById("n_oldal").value;
  var oldal_mértékegy = document.getElementById("n_o_mértékegy").value;
  var terület_mértékegy = document.getElementById("n_t_mértékegy").value;
  var tizedes_jegyek = document.getElementById("n_t_tizedes").value;
  var méret;
  if (terület_mértékegy == "km") {
    //kilóméter
    if (oldal_mértékegy == "km") {
      méret = oldal_méret * 1;
    }
    if (oldal_mértékegy == "m") {
      méret = oldal_méret / 1000;
    }
    if (oldal_mértékegy == "dm") {
      méret = oldal_méret / 10000;
    }
    if (oldal_mértékegy == "cm") {
      méret = oldal_méret / 100000;
    }
    if (oldal_mértékegy == "mm") {
      méret = oldal_méret / 1000000;
    }
  }
  if (terület_mértékegy == "m") {
    //méter
    if (oldal_mértékegy == "km") {
      méret = oldal_méret * 1000;
    }
    if (oldal_mértékegy == "m") {
      méret = oldal_méret * 1;
    }
    if (oldal_mértékegy == "dm") {
      méret = oldal_méret / 10;
    }
    if (oldal_mértékegy == "cm") {
      méret = oldal_méret / 100;
    }
    if (oldal_mértékegy == "mm") {
      méret = oldal_méret / 1000;
    }
  }
  if (terület_mértékegy == "dm") {
    //deciméter
    if (oldal_mértékegy == "km") {
      méret = oldal_méret * 10000;
    }
    if (oldal_mértékegy == "m") {
      méret = oldal_méret * 1000;
    }
    if (oldal_mértékegy == "dm") {
      méret = oldal_méret * 1;
    }
    if (oldal_mértékegy == "cm") {
      méret = oldal_méret / 10;
    }
    if (oldal_mértékegy == "mm") {
      méret = oldal_méret / 100;
    }
  }
  if (terület_mértékegy == "cm") {
    // centiméter
    if (oldal_mértékegy == "km") {
      méret = oldal_méret * 100000;
    }
    if (oldal_mértékegy == "m") {
      méret = oldal_méret * 100;
    }
    if (oldal_mértékegy == "dm") {
      méret = oldal_méret * 10;
    }
    if (oldal_mértékegy == "cm") {
      méret = oldal_méret * 1;
    }
    if (oldal_mértékegy == "mm") {
      méret = oldal_méret / 10;
    }
  }
  if (terület_mértékegy == "mm") {
    // miliméter
    if (oldal_mértékegy == "km") {
      méret = oldal_méret * 1000000;
    }
    if (oldal_mértékegy == "m") {
      méret = oldal_méret * 1000;
    }
    if (oldal_mértékegy == "dm") {
      méret = oldal_méret * 100;
    }
    if (oldal_mértékegy == "cm") {
      méret = oldal_méret * 10;
    }
    if (oldal_mértékegy == "mm") {
      méret = oldal_méret * 1;
    }
  }
  var terület = méret * méret;

  if (oldal_méret > 0 && tizedes_jegyek != 0) {
    document.getElementById("n_terület").innerHTML =
      terület.toFixed(tizedes_jegyek) +
      terület_mértékegy +
      "<sup>" +
      2 +
      "</sup>";
  }

  if (oldal_méret <= 0) {
    alert("Nem lehet nulla vagy annál kisebb az a oldal mérete!");
  }
  if (tizedes_jegyek == 0 && oldal_méret > 0) {
    document.getElementById("n_terület").innerHTML =
      terület + terület_mértékegy + "<sup>" + 2 + "</sup>";
  }
}
function n_törlés() {
  document.getElementById("n_kerület").innerHTML = " ";
  document.getElementById("n_terület").innerHTML = " ";
}
function k_kerület() {
  var sugár_méret = document.getElementById("k_sugár").value;
  var sugár_mértékegy = document.getElementById("k_s_mértékegy").value;
  var kerület_mértékegy = document.getElementById("k_k_mértékegy").value;
  var tizedes_jegyek = document.getElementById("k_k_tizedes").value;
  var méret;
  if (kerület_mértékegy == "km") {
    //kilóméter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 1;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret / 1000;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret / 10000;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret / 100000;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret / 1000000;
    }
  }
  if (kerület_mértékegy == "m") {
    //méter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 1000;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret * 1;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret / 10;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret / 100;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret / 1000;
    }
  }
  if (kerület_mértékegy == "dm") {
    //deciméter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 10000;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret * 1000;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret * 1;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret / 10;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret / 100;
    }
  }
  if (kerület_mértékegy == "cm") {
    // centiméter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 100000;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret * 100;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret * 10;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret * 1;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret / 10;
    }
  }
  if (kerület_mértékegy == "mm") {
    // miliméter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 1000000;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret * 1000;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret * 100;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret * 10;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret * 1;
    }
  }
  var kerület = 2 * méret * Math.PI;
  if (sugár_méret > 0 && tizedes_jegyek != 0) {
    document.getElementById("k_kerület").innerHTML =
      kerület.toFixed(tizedes_jegyek) + kerület_mértékegy;
  }

  if (sugár_méret <= 0) {
    alert("Nem lehet nulla vagy annál kisebb az r sugár mérete!");
  }
  if (tizedes_jegyek == 0 && sugár_méret > 0) {
    document.getElementById("k_kerület").innerHTML =
      kerület + kerület_mértékegy;
  }
}
function k_terület() {
  var sugár_méret = document.getElementById("k_sugár").value;
  var sugár_mértékegy = document.getElementById("k_s_mértékegy").value;
  var terület_mértékegy = document.getElementById("k_t_mértékegy").value;
  var tizedes_jegyek = document.getElementById("k_t_tizedes").value;
  var méret;
  if (terület_mértékegy == "km") {
    //kilóméter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 1;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret / 1000;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret / 10000;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret / 100000;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret / 1000000;
    }
  }
  if (terület_mértékegy == "m") {
    //méter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 1000;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret * 1;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret / 10;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret / 100;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret / 1000;
    }
  }
  if (terület_mértékegy == "dm") {
    //deciméter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 10000;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret * 1000;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret * 1;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret / 10;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret / 100;
    }
  }
  if (terület_mértékegy == "cm") {
    // centiméter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 100000;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret * 100;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret * 10;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret * 1;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret / 10;
    }
  }
  if (terület_mértékegy == "mm") {
    // miliméter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 1000000;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret * 1000;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret * 100;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret * 10;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret * 1;
    }
  }
  var terület = Math.sqrt(méret, 2) * Math.PI;
  if (sugár_méret > 0 && tizedes_jegyek != 0) {
    document.getElementById("k_terület").innerHTML =
      terület.toFixed(tizedes_jegyek) +
      terület_mértékegy +
      "<sup>" +
      2 +
      "</sup>";
  }

  if (sugár_méret <= 0) {
    alert("Nem lehet nulla vagy annál kisebb az r sugár mérete!");
  }
  if (tizedes_jegyek == 0 && sugár_méret > 0) {
    document.getElementById("k_terület").innerHTML =
      terület + terület_mértékegy + "<sup>" + 2 + "</sup>";
  }
}
function k_törlés() {
  document.getElementById("k_kerület").innerHTML = "";
  document.getElementById("k_terület").innerHTML = "";
}

function t_felszin() {
  var a_oldal_méret = document.getElementById("t_a_oldal").value;
  var b_oldal_méret = document.getElementById("t_b_oldal").value;
  var c_oldal_méret = document.getElementById("t_c_oldal").value;
  var a_oldal_mértékegy = document.getElementById("t_a_mértékegy").value;
  var b_oldal_mértékegy = document.getElementById("t_b_mértékegy").value;
  var c_oldal_mértékegy = document.getElementById("t_c_mértékegy").value;
  var felszin_mértékegy = document.getElementById("t_f_mértékegy").value;
  var tizedes_jegyek = document.getElementById("t_f_tizedes").value;
  var méret_a;
  var méret_b;
  var méret_c;

  if (felszin_mértékegy == "km") {
    //kilóméter
    if (a_oldal_mértékegy == "km") {
      //kilóméter
      méret_a = a_oldal_méret * 1;
    }
    if (b_oldal_mértékegy == "km") {
      méret_b = b_oldal_méret * 1;
    }
    if (c_oldal_mértékegy == "km") {
      méret_c = c_oldal_méret * 1;
    }
    if (a_oldal_mértékegy == "m") {
      //méter
      méret_a = a_oldal_méret / 1000;
    }
    if (b_oldal_mértékegy == "m") {
      méret_b = b_oldal_méret / 1000;
    }
    if (c_oldal_mértékegy == "m") {
      méret_c = c_oldal_méret / 1000;
    }
    if (a_oldal_mértékegy == "dm") {
      // deciméter
      méret_a = a_oldal_méret / 10000;
    }
    if (b_oldal_mértékegy == "dm") {
      méret_b = b_oldal_méret / 10000;
    }
    if (c_oldal_mértékegy == "dm") {
      méret_c = c_oldal_méret / 10000;
    }
    if (a_oldal_mértékegy == "cm") {
      // centiméter
      méret_a = a_oldal_méret / 100000;
    }
    if (b_oldal_mértékegy == "cm") {
      méret_b = b_oldal_méret / 100000;
    }
    if (c_oldal_mértékegy == "cm") {
      méret_c = c_oldal_méret / 100000;
    }
    if (a_oldal_mértékegy == "mm") {
      //miliméter
      méret_a = a_oldal_méret / 1000000;
    }
    if (b_oldal_mértékegy == "mm") {
      méret_b = b_oldal_méret / 1000000;
    }
    if (c_oldal_mértékegy == "mm") {
      méret_c = c_oldal_méret / 1000000;
    }
  }
  if (felszin_mértékegy == "m") {
    //méter
    if (a_oldal_mértékegy == "km") {
      //kilóméter
      méret_a = a_oldal_méret * 1000;
    }
    if (b_oldal_mértékegy == "km") {
      méret_b = b_oldal_méret * 1000;
    }
    if (c_oldal_mértékegy == "km") {
      méret_c = c_oldal_méret * 1000;
    }
    if (a_oldal_mértékegy == "m") {
      //méter
      méret_a = a_oldal_méret * 1;
    }
    if (b_oldal_mértékegy == "m") {
      méret_b = b_oldal_méret * 1;
    }
    if (c_oldal_mértékegy == "m") {
      méret_c = c_oldal_méret * 1;
    }
    if (a_oldal_mértékegy == "dm") {
      // deciméter
      méret_a = a_oldal_méret / 10;
    }
    if (b_oldal_mértékegy == "dm") {
      méret_b = b_oldal_méret / 10;
    }
    if (c_oldal_mértékegy == "dm") {
      méret_c = c_oldal_méret / 10;
    }
    if (a_oldal_mértékegy == "cm") {
      // centiméter
      méret_a = a_oldal_méret / 100;
    }
    if (b_oldal_mértékegy == "cm") {
      méret_b = b_oldal_méret / 100;
    }
    if (c_oldal_mértékegy == "cm") {
      méret_c = c_oldal_méret / 100;
    }
    if (a_oldal_mértékegy == "mm") {
      //miliméter
      méret_a = a_oldal_méret / 1000;
    }
    if (b_oldal_mértékegy == "mm") {
      méret_b = b_oldal_méret / 1000;
    }
    if (c_oldal_mértékegy == "mm") {
      méret_c = c_oldal_méret / 1000;
    }
  }
  if (felszin_mértékegy == "dm") {
    //deciméter
    if (a_oldal_mértékegy == "km") {
      //kilóméter
      méret_a = a_oldal_méret * 10000;
    }
    if (b_oldal_mértékegy == "km") {
      méret_b = b_oldal_méret * 10000;
    }
    if (c_oldal_mértékegy == "km") {
      méret_c = c_oldal_méret * 10000;
    }
    if (a_oldal_mértékegy == "m") {
      //méter
      méret_a = a_oldal_méret * 10;
    }
    if (b_oldal_mértékegy == "m") {
      méret_b = b_oldal_méret * 10;
    }
    if (c_oldal_mértékegy == "m") {
      méret_c = c_oldal_méret * 10;
    }
    if (a_oldal_mértékegy == "dm") {
      // deciméter
      méret_a = a_oldal_méret * 1;
    }
    if (b_oldal_mértékegy == "dm") {
      méret_b = b_oldal_méret * 1;
    }
    if (c_oldal_mértékegy == "dm") {
      méret_c = c_oldal_méret * 1;
    }
    if (a_oldal_mértékegy == "cm") {
      // centiméter
      méret_a = a_oldal_méret / 10;
    }
    if (b_oldal_mértékegy == "cm") {
      méret_b = b_oldal_méret / 10;
    }
    if (c_oldal_mértékegy == "cm") {
      méret_c = c_oldal_méret / 10;
    }
    if (a_oldal_mértékegy == "mm") {
      //miliméter
      méret_a = a_oldal_méret / 100;
    }
    if (b_oldal_mértékegy == "mm") {
      méret_b = b_oldal_méret / 100;
    }
    if (c_oldal_mértékegy == "mm") {
      méret_c = c_oldal_méret / 100;
    }
  }
  if (felszin_mértékegy == "cm") {
    //centiméter
    if (a_oldal_mértékegy == "km") {
      // kilóméter
      méret_a = a_oldal_méret * 100000;
    }
    if (b_oldal_mértékegy == "km") {
      méret_b = b_oldal_méret * 100000;
    }
    if (c_oldal_mértékegy == "km") {
      méret_c = c_oldal_méret * 100000;
    }
    if (a_oldal_mértékegy == "m") {
      //méter
      méret_a = a_oldal_méret * 100;
    }
    if (b_oldal_mértékegy == "m") {
      méret_b = b_oldal_méret * 100;
    }
    if (c_oldal_mértékegy == "m") {
      méret_c = c_oldal_méret * 100;
    }
    if (a_oldal_mértékegy == "dm") {
      // deciméter
      méret_a = a_oldal_méret * 10;
    }
    if (b_oldal_mértékegy == "dm") {
      méret_b = b_oldal_méret * 10;
    }
    if (c_oldal_mértékegy == "dm") {
      méret_c = c_oldal_méret * 10;
    }
    if (a_oldal_mértékegy == "cm") {
      // centiméter
      méret_a = a_oldal_méret * 1;
    }
    if (b_oldal_mértékegy == "cm") {
      méret_b = b_oldal_méret * 1;
    }
    if (c_oldal_mértékegy == "cm") {
      méret_c = c_oldal_méret * 1;
    }
    if (a_oldal_mértékegy == "mm") {
      //miliméter
      méret_a = a_oldal_méret / 10;
    }
    if (b_oldal_mértékegy == "mm") {
      méret_b = b_oldal_méret / 10;
    }
    if (c_oldal_mértékegy == "mm") {
      méret_c = c_oldal_méret / 10;
    }
  }
  if (felszin_mértékegy == "mm") {
    //miliméter
    if (a_oldal_mértékegy == "km") {
      //kilométer
      méret_a = a_oldal_méret * 1000000;
    }
    if (b_oldal_mértékegy == "km") {
      méret_b = b_oldal_méret * 1000000;
    }
    if (c_oldal_mértékegy == "km") {
      méret_c = c_oldal_méret * 1000000;
    }
    if (a_oldal_mértékegy == "m") {
      //méter
      méret_a = a_oldal_méret * 1000;
    }
    if (b_oldal_mértékegy == "m") {
      méret_b = b_oldal_méret * 1000;
    }
    if (c_oldal_mértékegy == "m") {
      méret_c = c_oldal_méret * 1000;
    }
    if (a_oldal_mértékegy == "dm") {
      // deciméter
      méret_a = a_oldal_méret * 100;
    }
    if (b_oldal_mértékegy == "dm") {
      méret_b = b_oldal_méret * 100;
    }
    if (c_oldal_mértékegy == "dm") {
      méret_c = c_oldal_méret * 100;
    }
    if (a_oldal_mértékegy == "cm") {
      // centiméter
      méret_a = a_oldal_méret * 10;
    }
    if (b_oldal_mértékegy == "cm") {
      méret_b = b_oldal_méret * 10;
    }
    if (c_oldal_mértékegy == "cm") {
      méret_c = c_oldal_méret * 10;
    }
    if (a_oldal_mértékegy == "mm") {
      //miliméter
      méret_a = a_oldal_méret * 1;
    }
    if (b_oldal_mértékegy == "mm") {
      méret_b = b_oldal_méret * 1;
    }
    if (c_oldal_mértékegy == "mm") {
      méret_c = c_oldal_méret * 1;
    }
  }
  var felszin = 2 * (méret_a * méret_b + méret_a * méret_c + méret_c * méret_b);
  if (a_oldal_méret > 0 && b_oldal_méret > 0 && c_oldal_méret > 0 && tizedes_jegyek != 0) {
    document.getElementById("t_felszin").innerHTML =
      felszin.toFixed(tizedes_jegyek) +
      felszin_mértékegy +
      "<sup>" +
      2 +
      "</sup>";
  }

  if (a_oldal_méret <= 0) {
    alert("Nem lehet nulla vagy annál kisebb az a oldal mérete!");
  }
  if (b_oldal_méret <= 0) {
    alert("Nem lehet nulla vagy annál kisebb a b oldal mérete!");
  }
  if (c_oldal_méret <= 0) {
    alert("Nem lehet nulla vagy annál kisebb a c oldal mérete!");
  }
  if (
    tizedes_jegyek == 0 &&
    a_oldal_méret > 0 &&
    b_oldal_méret > 0 &&
    c_oldal_méret > 0
  ) {
    document.getElementById("t_felszin").innerHTML =
      felszin + felszin_mértékegy + "<sup>" + 2 + "</sup>";
  }
}
function t_térfogat() {
  var a_oldal_méret = document.getElementById("t_a_oldal").value;
  var b_oldal_méret = document.getElementById("t_b_oldal").value;
  var c_oldal_méret = document.getElementById("t_c_oldal").value;
  var a_oldal_mértékegy = document.getElementById("t_a_mértékegy").value;
  var b_oldal_mértékegy = document.getElementById("t_b_mértékegy").value;
  var c_oldal_mértékegy = document.getElementById("t_c_mértékegy").value;
  var térfogat_mértékegy = document.getElementById("t_t_mértékegy").value;
  var tizedes_jegyek = document.getElementById("t_t_tizedes").value;
  var méret_a;
  var méret_b;
  var méret_c;

  if (térfogat_mértékegy == "km") {
    //kilóméter
    if (a_oldal_mértékegy == "km") {
      //kilóméter
      méret_a = a_oldal_méret * 1;
    }
    if (b_oldal_mértékegy == "km") {
      méret_b = b_oldal_méret * 1;
    }
    if (c_oldal_mértékegy == "km") {
      méret_c = c_oldal_méret * 1;
    }
    if (a_oldal_mértékegy == "m") {
      //méter
      méret_a = a_oldal_méret / 1000;
    }
    if (b_oldal_mértékegy == "m") {
      méret_b = b_oldal_méret / 1000;
    }
    if (c_oldal_mértékegy == "m") {
      méret_c = c_oldal_méret / 1000;
    }
    if (a_oldal_mértékegy == "dm") {
      // deciméter
      méret_a = a_oldal_méret / 10000;
    }
    if (b_oldal_mértékegy == "dm") {
      méret_b = b_oldal_méret / 10000;
    }
    if (c_oldal_mértékegy == "dm") {
      méret_c = c_oldal_méret / 10000;
    }
    if (a_oldal_mértékegy == "cm") {
      // centiméter
      méret_a = a_oldal_méret / 100000;
    }
    if (b_oldal_mértékegy == "cm") {
      méret_b = b_oldal_méret / 100000;
    }
    if (c_oldal_mértékegy == "cm") {
      méret_c = c_oldal_méret / 100000;
    }
    if (a_oldal_mértékegy == "mm") {
      //miliméter
      méret_a = a_oldal_méret / 1000000;
    }
    if (b_oldal_mértékegy == "mm") {
      méret_b = b_oldal_méret / 1000000;
    }
    if (c_oldal_mértékegy == "mm") {
      méret_c = c_oldal_méret / 1000000;
    }
  }
  if (térfogat_mértékegy == "m") {
    //méter
    if (a_oldal_mértékegy == "km") {
      //kilóméter
      méret_a = a_oldal_méret * 1000;
    }
    if (b_oldal_mértékegy == "km") {
      méret_b = b_oldal_méret * 1000;
    }
    if (c_oldal_mértékegy == "km") {
      méret_c = c_oldal_méret * 1000;
    }
    if (a_oldal_mértékegy == "m") {
      //méter
      méret_a = a_oldal_méret * 1;
    }
    if (b_oldal_mértékegy == "m") {
      méret_b = b_oldal_méret * 1;
    }
    if (c_oldal_mértékegy == "m") {
      méret_c = c_oldal_méret * 1;
    }
    if (a_oldal_mértékegy == "dm") {
      // deciméter
      méret_a = a_oldal_méret / 10;
    }
    if (b_oldal_mértékegy == "dm") {
      méret_b = b_oldal_méret / 10;
    }
    if (c_oldal_mértékegy == "dm") {
      méret_c = c_oldal_méret / 10;
    }
    if (a_oldal_mértékegy == "cm") {
      // centiméter
      méret_a = a_oldal_méret / 100;
    }
    if (b_oldal_mértékegy == "cm") {
      méret_b = b_oldal_méret / 100;
    }
    if (c_oldal_mértékegy == "cm") {
      méret_c = c_oldal_méret / 100;
    }
    if (a_oldal_mértékegy == "mm") {
      //miliméter
      méret_a = a_oldal_méret / 1000;
    }
    if (b_oldal_mértékegy == "mm") {
      méret_b = b_oldal_méret / 1000;
    }
    if (c_oldal_mértékegy == "mm") {
      méret_c = c_oldal_méret / 1000;
    }
  }
  if (térfogat_mértékegy == "dm") {
    //deciméter
    if (a_oldal_mértékegy == "km") {
      //kilóméter
      méret_a = a_oldal_méret * 10000;
    }
    if (b_oldal_mértékegy == "km") {
      méret_b = b_oldal_méret * 10000;
    }
    if (c_oldal_mértékegy == "km") {
      méret_c = c_oldal_méret * 10000;
    }
    if (a_oldal_mértékegy == "m") {
      //méter
      méret_a = a_oldal_méret * 10;
    }
    if (b_oldal_mértékegy == "m") {
      méret_b = b_oldal_méret * 10;
    }
    if (c_oldal_mértékegy == "m") {
      méret_c = c_oldal_méret * 10;
    }
    if (a_oldal_mértékegy == "dm") {
      // deciméter
      méret_a = a_oldal_méret * 1;
    }
    if (b_oldal_mértékegy == "dm") {
      méret_b = b_oldal_méret * 1;
    }
    if (c_oldal_mértékegy == "dm") {
      méret_c = c_oldal_méret * 1;
    }
    if (a_oldal_mértékegy == "cm") {
      // centiméter
      méret_a = a_oldal_méret / 10;
    }
    if (b_oldal_mértékegy == "cm") {
      méret_b = b_oldal_méret / 10;
    }
    if (c_oldal_mértékegy == "cm") {
      méret_c = c_oldal_méret / 10;
    }
    if (a_oldal_mértékegy == "mm") {
      //miliméter
      méret_a = a_oldal_méret / 100;
    }
    if (b_oldal_mértékegy == "mm") {
      méret_b = b_oldal_méret / 100;
    }
    if (c_oldal_mértékegy == "mm") {
      méret_c = c_oldal_méret / 100;
    }
  }
  if (térfogat_mértékegy == "cm") {
    //centiméter
    if (a_oldal_mértékegy == "km") {
      // kilóméter
      méret_a = a_oldal_méret * 100000;
    }
    if (b_oldal_mértékegy == "km") {
      méret_b = b_oldal_méret * 100000;
    }
    if (c_oldal_mértékegy == "km") {
      méret_c = c_oldal_méret * 100000;
    }
    if (a_oldal_mértékegy == "m") {
      //méter
      méret_a = a_oldal_méret * 100;
    }
    if (b_oldal_mértékegy == "m") {
      méret_b = b_oldal_méret * 100;
    }
    if (c_oldal_mértékegy == "m") {
      méret_c = c_oldal_méret * 100;
    }
    if (a_oldal_mértékegy == "dm") {
      // deciméter
      méret_a = a_oldal_méret * 10;
    }
    if (b_oldal_mértékegy == "dm") {
      méret_b = b_oldal_méret * 10;
    }
    if (c_oldal_mértékegy == "dm") {
      méret_c = c_oldal_méret * 10;
    }
    if (a_oldal_mértékegy == "cm") {
      // centiméter
      méret_a = a_oldal_méret * 1;
    }
    if (b_oldal_mértékegy == "cm") {
      méret_b = b_oldal_méret * 1;
    }
    if (c_oldal_mértékegy == "cm") {
      méret_c = c_oldal_méret * 1;
    }
    if (a_oldal_mértékegy == "mm") {
      //miliméter
      méret_a = a_oldal_méret / 10;
    }
    if (b_oldal_mértékegy == "mm") {
      méret_b = b_oldal_méret / 10;
    }
    if (c_oldal_mértékegy == "mm") {
      méret_c = c_oldal_méret / 10;
    }
  }
  if (térfogat_mértékegy == "mm") {
    //miliméter
    if (a_oldal_mértékegy == "km") {
      //kilométer
      méret_a = a_oldal_méret * 1000000;
    }
    if (b_oldal_mértékegy == "km") {
      méret_b = b_oldal_méret * 1000000;
    }
    if (c_oldal_mértékegy == "km") {
      méret_c = c_oldal_méret * 1000000;
    }
    if (a_oldal_mértékegy == "m") {
      //méter
      méret_a = a_oldal_méret * 1000;
    }
    if (b_oldal_mértékegy == "m") {
      méret_b = b_oldal_méret * 1000;
    }
    if (c_oldal_mértékegy == "m") {
      méret_c = c_oldal_méret * 1000;
    }
    if (a_oldal_mértékegy == "dm") {
      // deciméter
      méret_a = a_oldal_méret * 100;
    }
    if (b_oldal_mértékegy == "dm") {
      méret_b = b_oldal_méret * 100;
    }
    if (c_oldal_mértékegy == "dm") {
      méret_c = c_oldal_méret * 100;
    }
    if (a_oldal_mértékegy == "cm") {
      // centiméter
      méret_a = a_oldal_méret * 10;
    }
    if (b_oldal_mértékegy == "cm") {
      méret_b = b_oldal_méret * 10;
    }
    if (c_oldal_mértékegy == "cm") {
      méret_c = c_oldal_méret * 10;
    }
    if (a_oldal_mértékegy == "mm") {
      //miliméter
      méret_a = a_oldal_méret * 1;
    }
    if (b_oldal_mértékegy == "mm") {
      méret_b = b_oldal_méret * 1;
    }
    if (c_oldal_mértékegy == "mm") {
      méret_c = c_oldal_méret * 1;
    }
  }
  var térfogat = méret_a * méret_b * méret_c;
  if (
    a_oldal_méret > 0 &&
    b_oldal_méret > 0 &&
    c_oldal_méret > 0 &&
    tizedes_jegyek != 0
  ) {
    document.getElementById("t_térfogat").innerHTML =
      térfogat.toFixed(tizedes_jegyek) +
      térfogat_mértékegy +
      "<sup>" +
      3 +
      "</sup>";
  }

  if (a_oldal_méret <= 0) {
    alert("Nem lehet nulla vagy annál kisebb az a oldal mérete!");
  }
  if (b_oldal_méret <= 0) {
    alert("Nem lehet nulla vagy annál kisebb a b oldal mérete!");
  }
  if (c_oldal_méret <= 0) {
    alert("Nem lehet nulla vagy annál kisebb a c oldal mérete!");
  }
  if (
    tizedes_jegyek == 0 &&
    a_oldal_méret > 0 &&
    b_oldal_méret > 0 &&
    c_oldal_méret > 0
  ) {
    document.getElementById("t_térfogat").innerHTML =
      térfogat + térfogat_mértékegy + "<sup>" + 3 + "</sup>";
  }
}
function t_törlés() {
  document.getElementById("t_térfogat").innerHTML = "";
  document.getElementById("t_felszin").innerHTML = "";
}

function g_felszin() {
  var sugár_méret = document.getElementById("g_sugár").value;
  var sugár_mértékegy = document.getElementById("g_s_mértékegy").value;
  var felszin_mértékegy = document.getElementById("g_f_mértékegy").value;
  var tizedes_jegyek = document.getElementById("g_f_tizedes").value;
  var méret;
  if (felszin_mértékegy == "km") {
    //kilóméter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 1;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret / 1000;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret / 10000;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret / 100000;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret / 1000000;
    }
  }
  if (felszin_mértékegy == "m") {
    //méter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 1000;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret * 1;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret / 10;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret / 100;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret / 1000;
    }
  }
  if (felszin_mértékegy == "dm") {
    //deciméter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 10000;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret * 1000;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret * 1;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret / 10;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret / 100;
    }
  }
  if (felszin_mértékegy == "cm") {
    // centiméter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 100000;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret * 100;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret * 10;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret * 1;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret / 10;
    }
  }
  if (felszin_mértékegy == "mm") {
    // miliméter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 1000000;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret * 1000;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret * 100;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret * 10;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret * 1;
    }
  }
  var felszin = 4 * Math.sqrt(méret, 2) * Math.PI;
  if (sugár_méret > 0 && tizedes_jegyek != 0) {
    document.getElementById("g_felszin").innerHTML =
      felszin.toFixed(tizedes_jegyek) +
      felszin_mértékegy +
      "<sup>" +
      2 +
      "</sup>";
  }

  if (sugár_méret <= 0) {
    alert("Nem lehet nulla vagy annál kisebb az r sugár mérete!");
  }
  if (tizedes_jegyek == 0 && sugár_méret > 0) {
    document.getElementById("g_felszin").innerHTML =
      felszin + felszin_mértékegy + "<sup>" + 2 + "</sup>";
  }
}

function g_térfogat() {
  var sugár_méret = document.getElementById("g_sugár").value;
  var sugár_mértékegy = document.getElementById("g_s_mértékegy").value;
  var térfogat_mértékegy = document.getElementById("g_t_mértékegy").value;
  var tizedes_jegyek = document.getElementById("g_t_tizedes").value;
  var méret;
  if (térfogat_mértékegy == "km") {
    //kilóméter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 1;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret / 1000;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret / 10000;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret / 100000;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret / 1000000;
    }
  }
  if (térfogat_mértékegy == "m") {
    //méter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 1000;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret * 1;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret / 10;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret / 100;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret / 1000;
    }
  }
  if (térfogat_mértékegy == "dm") {
    //deciméter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 10000;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret * 1000;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret * 1;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret / 10;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret / 100;
    }
  }
  if (térfogat_mértékegy == "cm") {
    // centiméter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 100000;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret * 100;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret * 10;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret * 1;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret / 10;
    }
  }
  if (térfogat_mértékegy == "mm") {
    // miliméter
    if (sugár_mértékegy == "km") {
      méret = sugár_méret * 1000000;
    }
    if (sugár_mértékegy == "m") {
      méret = sugár_méret * 1000;
    }
    if (sugár_mértékegy == "dm") {
      méret = sugár_méret * 100;
    }
    if (sugár_mértékegy == "cm") {
      méret = sugár_méret * 10;
    }
    if (sugár_mértékegy == "mm") {
      méret = sugár_méret * 1;
    }
  }
  var térfogat = (4 * Math.sqrt(méret, 3) * Math.PI) / 3;
  if (sugár_méret > 0 && tizedes_jegyek != 0) {
    document.getElementById("g_térfogat").innerHTML =
      térfogat.toFixed(tizedes_jegyek) +
      térfogat_mértékegy +
      "<sup>" +
      3 +
      "</sup>";
  }

  if (sugár_méret <= 0) {
    alert("Nem lehet nulla az r sugár mérete!");
  }
  if (tizedes_jegyek == 0 && sugár_méret > 0) {
    document.getElementById("g_térfogat").innerHTML =
    térfogat +
      térfogat_mértékegy +
      "<sup>" +
      3 +
      "</sup>";
      
  }
}
function g_törlés() {
  document.getElementById("g_térfogat").innerHTML = "";
  document.getElementById("g_felszin").innerHTML = "";
}
