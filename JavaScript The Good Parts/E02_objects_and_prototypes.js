/*
EXERCISE 02
Complete the "Shape" example to include circles and triangles.
Add a method to display each by console, and a method to scale each figure by a percentage.

Software Development Advanced Techniques and Technologies 2020
Autor: Nico Antonelli
*/

// Shape (Superclass)
function Shape() {
    this.x = 0;
    this.y = 0;
    this.name = "shape";
}

// Superclass Method Move
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info("Shape " + this.name + " moved to: (" + this.x + ", " + this.y + ")");
};

// Superclass Method Display
Shape.prototype.display = function() {
    let info = "Shape: " + this.name + ".";
    let position = "Position: " + "(X:" + this.x + ", Y:" + this.y + ")";
    console.log(info, position);
    // Superclass Method Extension for Scale/Size?
};

// Rectangle (Subclass)
function Rectangle(h, v) {
    Shape.call(this); // Call super constructor.
    this.name = "rectange";
    if (h > 0) { this.horizontal = h; } else { this.horizontal = 1; }
    if (v > 0) { this.vertical = v; } else { this.vertical = 1; }
}

// Subclass Method Scale
Rectangle.prototype.scale = function (percent) {
    this.horizontal *= (1+percent/100);
    this.vertical *= (1+percent/100);
    let scaled = "Shape scaled in a " + percent + "%.";
    let size = "Size :" + this.horizontal + "x" + this.vertical;
    console.log(scaled, size);
};

// Circle (Subclass)
function Circle(r) {
    Shape.call(this); // Call super constructor.
    this.name = "circle";
    if (r > 0) { this.radius = r; } else { this.radius = 1; }
}

// Subclass Method Scale
Circle.prototype.scale = function (percent) {
    this.radius *= (1+percent/100);
    let scaled = "Shape scaled in a " + percent + "%.";
    let size = "Radius :" + this.radius;
    console.log(scaled, size);
};

// Triangle (Subclass)
function Triangle(s1, s2, s3) {
    Shape.call(this); // Call super constructor.
    this.name = "triangle";
    if (s1 > 0) { this.side1 = s1; } else { this.side1 = 1; }
    if (s2 > 0) { this.side2 = s2; } else { this.side2 = 2; }
    if (s3 > 0) { this.side3 = s3; } else { this.side3 = 3; }
}

// Subclass Method Scale
Triangle.prototype.scale = function (percent) {
    this.s1 *= (1+percent/100);
    this.s2 *= (1+percent/100);
    this.s3 *= (1+percent/100);
    let scaled = "Shape scaled in a " + percent + "%.";
    let size = "Size :" + this.side1 + "x" + this.side2 + "x" + this.side3;
    console.log(scaled, size);
};

// Subclass extends Superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// New Instances
var rect = new Rectangle(10, 14);
var circ = new Circle(12);
var tri = new Triangle(5, 7, 9);

// Main Program
console.log("EXERCISE ONE: Objects & Prototypes");
console.log();
console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
console.log();
rect.move(1, 1);
rect.display();
rect.scale(100);
circ.move(2, 2);
// tri.scale(50);
tri.display();
