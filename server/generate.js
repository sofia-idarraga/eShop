const faker = require('@faker-js/faker');
const fs = require('fs');

var database = {products: []};

for(var i = 1; i<=21; i++){
    database.products.push({
        id: i,
        name: faker.faker.commerce.productName(),
        description: faker.faker.commerce.productDescription(),
        price: faker.faker.commerce.price(10,150,2,'$'),
        quantity: faker.faker.datatype.number({min: 1, max: 100}),
        image: faker.faker.image.cats(640,480,true)
    });
}

fs.writeFileSync('./server/database.json', JSON.stringify(database,null,"\t"));
