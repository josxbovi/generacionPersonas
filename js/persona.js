class Persona {
  constructor(nombre, edad, sexo, peso, altura, añoNacimiento, dni) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
    this.dni = this.generarDNI();
  }

  mostrarGeneracion() {
    let resultado = "";
    if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
      resultado += "Pertenece a la generación Silent Generation.";
      resultado += "\nRasgo característico:";
      resultado +=
        " La generación silenciosa es una generación de personas nacidas entre 1928 y 1945.";
      resultado += "\nAusteridad";
      resultado +=
        "\nLa circunstancia historica que los caracteriza son los Conflictos Bélicos.";
      alert(resultado);
    } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
      resultado += "Pertenece a la generación Baby Boom.";
      resultado += "\nRasgo característico:";
      resultado +=
        "La generación del baby boom es una generación de personas nacidas entre 1949 y 1968.";
      resultado +=
        "\nLa circunstancia histórica es la Paz y explosión demográfica";
      resultado +=
        "\nTambién se caracterizan por ser personas muy ambiciosas. ";
      alert(resultado);
    } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
      resultado += "Pertenece a la generación X.";
      resultado += "\nRasgo característico: ";
      resultado +=
        "La generación X es una generación de personas nacidas entre 1969 y 1980.";
      resultado +=
        "\nLa circunstancia histórica es la crisis del 73 y transición española";
      resultado +=
        "\nEsta generación se caracteriza por la obsesión con el éxito. ";
      alert(resultado);
    } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
      resultado += "Pertenece a la generación Y.";
      resultado += "\nRasgo característico:";
      resultado +=
        "La generación Y es una generación de personas nacidas entre 1981 y 1993.";
      resultado +=
        "\nLa circunstancia histórica es el inicio de la digitalización";
      resultado += "Esta generación se caracteriza por la frustración. ";
      alert(resultado);
    } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
      resultado += "Pertenece a la generación Z.";
      resultado += "\nRasgo característico:";
      resultado +=
        "La generación Z es una generación de personas nacidas entre 1994 y 2010.";
      resultado +=
        "\nLa circunstancia histórica es la expansión masiva de internet";
      resultado += "\nEsta generación se caracteriza por irreverencia. ";
      alert(resultado);
    }
    return resultado;
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      alert("Es mayor de edad.");
    } else {
      alert("No es mayor de edad.");
    }
  }

  generarDNI() {
    //genera un número aleatorio de 8 cifras
    let dni = Math.floor(Math.random() * (99999999 - 10000000)) + 10000000;
    return dni;
  }

  mostrarDatos() {
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad);
    console.log("Sexo: " + this.sexo);
    console.log("Peso: " + this.peso);
    console.log("Altura: " + this.altura);
    console.log("Año de nacimiento: " + this.añoNacimiento);
    console.log("DNI: " + this.dni);
  }
}

document.getElementById("personaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtener los valores del formulario
  var nombre = document.getElementById("nombre").value;
  var edad = document.getElementById("edad").value;
  var sexo = document.getElementById("sexo").value;
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;
  var añoNacimiento = document.getElementById("anioNacimiento").value;

  // Crear una instancia de Persona
  var persona = new Persona(nombre, edad, sexo, peso, altura, añoNacimiento);

  // Mostrar los datos en algún lugar, por ejemplo, en un div con el id 'datos'
  persona.mostrarDatos();

  // Agregar un evento al botón después de crear la instancia de Persona
  document
    .getElementById("mostrarGeneracion")
    .addEventListener("click", function () {
      console.log("Generación: " + persona.mostrarGeneracion());
      persona.mostrarGeneracion;
    });
    document.getElementById("mayorEdad").addEventListener("click", function () {
      console.log("Es mayor de edad: " + persona.esMayorDeEdad());
      persona.esMayorDeEdad;
    });

});
