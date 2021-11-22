// Bind()
const auto = {
    brand: 'BMW',
    drive(){
        return `Let's have fun with riding ${this.brand}`;
    }
}
const motorcycle = {
    brand: 'Indian'
}
const autoDrive = auto.drive.bind(auto);
const motoDrive = auto.drive.bind(motorcycle);
console.log(motoDrive()); //Let's have fun with riding Indian

const bill = {
    tip: 0.1,
    calculate(total){
        console.log(this);
        return total + total * this.tip;
    }

}
const pay = bill .calculate(1000);
const payCount = bill.calculate.bind(bill);
console.log(pay); // 1100
console.log(payCount(1000));// 1100

 // Apply()
const bill2 = {
    tip: 0.1,
    calculate(total){
        return total + total * this.tip;
    },
    detail (dish1, dish2, sum) {
        return `Your breakfast (${dish1},${dish2} cost ${this.calculate(sum)})`
    }

}

const pay = bill2.detail('pizza', 'salad', 1000);
const pay2 = bill2.calculate.bind(bill2);

const payCount2 = bill2.detail.call(bill2, 'pizza', 'salad', 1000); //Your breakfast (pizza,salad cost 1100)
const payCount3 = bill2.calculate.apply(bill2, [1000]);

console.log(pay);
console.log(pay2(1000)); // 1100
console.log(payCount2);// 1100
console.log(payCount3); //1100 


const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2

// Call()
const bill1 = {
    tip: 0.1,
    calculate(total){
        return total + total * this.tip;
    }

}
const pay1 = bill1 .calculate.bind(bill1);
const payCount1 = bill1.calculate.call(bill1,1000);
console.log(pay1(1000)); // 1100
console.log(payCount1);// 1100


	
function Product(name, price) {
    this.name = name;
    this.price = price;
  }
   
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
   
  console.log(new Food('cheese', 5).name);
  // expected output: "cheese"

