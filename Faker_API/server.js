const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.number.int({max:1000})
    }
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id: faker.number.int({max:1000}),
        name: faker.company.name,
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
    return newCompany;
}

// req is shorthand for request
// res is shorthand for response
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello World" });
// });

app.get("/api/users/new", (req, res) => {
    const user = createUser();
    res.json({user});
});

app.get("/api/company/new", (req, res) => {
    const company = createCompany();
    res.json({company});
});

app.get("/api/user/company", (req, res) => {
    const user = createUser();
    const company = createCompany();
    res.json({ user, company });
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );