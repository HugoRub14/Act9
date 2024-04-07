// Definición de la clase Shape
class Shape {
    // Constructor de la clase Shape que inicializa las propiedades name, sides y sideLength
    constructor(name, sides, sideLength) {
      this.name = name; // Nombre de la forma
      this.sides = sides; // Número de lados de la forma
      this.sideLength = sideLength; // Longitud de cada lado de la forma
    }
  
    // Método para calcular el perímetro de la forma
    calcPerimeter() {
      // Cálculo del perímetro multiplicando el número de lados por la longitud de cada lado
      const perimeter = this.sides * this.sideLength;
      // Registro del resultado en la consola
      console.log(`Perimeter of ${this.name}: ${perimeter}`);
    }
  }
  
  // Creación de una nueva instancia de Shape llamada square con nombre "square", 4 lados y longitud de lado 5
  const square = new Shape("square", 4, 5);
  // Llamada al método calcPerimeter() en la instancia square para calcular y mostrar el perímetro
  square.calcPerimeter();
  
  // Creación de una nueva instancia de Shape llamada triangle con nombre "triangle", 3 lados y longitud de lado 3
  const triangle = new Shape("triangle", 3, 3);
  // Llamada al método calcPerimeter() en la instancia triangle para calcular y mostrar el perímetro
  triangle.calcPerimeter();
  