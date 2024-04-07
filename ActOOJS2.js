// Definición de la clase Shape
class Shape {
    // Constructor de la clase Shape
    constructor(name, sides, sideLength) {
      // Inicialización de las propiedades name, sides, y sideLength
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
  
    // Método para calcular el perímetro de la forma
    calcPerimeter() {
      // Cálculo del perímetro multiplicando el número de lados por la longitud de cada lado
      const perimeter = this.sides * this.sideLength;
      // Registro del resultado en la consola
      console.log(`Perimeter of ${this.name}: ${perimeter}`);
    }
  }
  
  // Definición de la clase Square que hereda de Shape
  class Square extends Shape {
    // Constructor de la clase Square
    constructor(sideLength) {
      // Llama al constructor de la clase padre (Shape) con los valores predeterminados para name y sides
      super("square", 4, sideLength);
    }
  
    // Método para calcular el área del cuadrado
    calcArea() {
      // Cálculo del área, que es el cuadrado de la longitud del lado
      const area = this.sideLength ** 2;
      // Registro del resultado en la consola
      console.log(`Area of ${this.name}: ${area}`);
    }
  }
  
  // Creación de una instancia de la clase Square llamada square con un lado de longitud 5
  const square = new Square(5);
  // Llamada al método calcPerimeter() en la instancia square para calcular y mostrar el perímetro
  square.calcPerimeter();
  // Llamada al método calcArea() en la instancia square para calcular y mostrar el área
  square.calcArea();
  