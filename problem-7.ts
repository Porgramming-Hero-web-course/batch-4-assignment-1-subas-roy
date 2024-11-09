{
  //
  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge(): number {
      const currentYear = new Date().getFullYear();;
      const year = currentYear - this.year;
      return year;
    }
  }

  const car = new Car("BMW", "M7", 2018);
  console.log(car.getCarAge());







  //
}