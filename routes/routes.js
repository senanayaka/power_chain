var faker = require("faker");

var appRouter = function (app) {
    app.get("/", function(req, res) {
        res.status(200).send("Block chain for power data");
    });


    app.get("/power/:num", function (req, res) {
        var users = [];
        var num = req.params.num;

        if (isFinite(num) && num  > 0 ) {
            for (i = 0; i <= num-1; i++) {
                users.push({
                    product: faker.company.companyName(),
                    place: faker.address.zipCode(),
                    power_outlet: faker.random.number()
                });
            }

            res.status(200).send(users);

        } else {
            res.status(400).send({ message: 'invalid number supplied' });
        }

    });

}


module.exports = appRouter;