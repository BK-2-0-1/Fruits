// mongoose подключение
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// fruits collections
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        requireed: [true, "Enter the name!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);


const pineapple = new Fruit({
    name: 'Pineapple',
    rating: 6,
    review: 'Not so bad'
});

// pineapple.save();

const lemon = new Fruit({
    name: 'Lemon',
    rating: 10,
    review: 'With tea - its fuckin gr8!'
});

// lemon.save();


// const kiwi = new Fruit({
//     name: 'Kiwi',
//     rating: 8,
//     review: 'Not bad'
// });

// const orange = new Fruit({
//     name: 'Orange',
//     rating: 5,
//     review: 'I dont really like it'
// });

// const banana = new Fruit({
//     name: 'Banana',
//     rating: 9,
//     review: 'Thats nice!'
// });

// Fruit.insertMany([kiwi, orange, banana], (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully saved all the fruits to fruitsDB");
//     }
// });


// fruit.save().then(() => console.log('new fruit added and saved'));


// Fruit.find((err, fruits) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(fruits);
//     }
// });

// Fruit.find((err, fruits) => {
//     if (err) {
//         console.log(err);
//     } else {

//         mongoose.connection.close();

//         fruits.forEach(fruit => {
//             console.log(fruit.name);
//         });
//     }
// });


// Fruit.updateOne({_id: "60f55b92b97ee521bcd8e0f4"}, {name: "Peach"}, (err)=> {
    // if (err) {
    //     console.log(err);
    // } else {
    //     console.log("Succesfully updated the document!");
    // }
// });

// Fruit.deleteOne({name: "Peach"}, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Peach deleted");
//     }
// });


// person collections
// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// const Person = mongoose.model('Person', personSchema);

// const person = new Person({
//     name: 'John',
//     age: 37
// });

// person.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);


const person = new Person({
    name: 'John',
    age: 37
});

Person.updateOne({name: "John"}, {favouriteFruit: lemon}, (err)=> {
    if (err) {
        console.log(err);
    } else {
        console.log("Succesfully updated the document!");
    }
});





// const person = new Person({
//     name: 'Amy',
//     age: 12,
//     favouriteFruit: pineapple
// });


// Person.deleteMany({name: "Gin"}, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Gin's deleted!");
//     }
// });

// person.save().then(() => console.log('new person added and saved'));