function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
  return str1.length === str2.length;
    // porque el operador de comparación === ya devuelve un booleano
    // si son iguales devuelve true, si no false
    // por lo tanto no es necesario hacer una comparación
    // y devolver el resultado de esa comparación
    // ya que el operador de comparación ya devuelve un booleano
    // que es lo que se necesita
    // por lo tanto se puede devolver directamente la comparación
    // sin necesidad de un if
    // .length es una propiedad de los strings que devuelve la cantidad de caracteres
    // que tiene el string
    // por lo tanto se puede comparar la cantidad de caracteres de dos strings
    // para saber si tienen la misma longitud
    // y devolver un booleano

}

module.exports = tienenMismaLongitud;