/**
 * Created by Administrator on 2017/1/6.
 */
const model = require('../model');
var
    Pet = model.Pet,
    User = model.User;
var fn_sql = async (ctx, next) => {
    var user = await User.create({
        name: 'John',
        gender: false,
        email: 'john-' + Date.now() + '@garfield.pet',
        passwd: 'hahaha'
    });
    console.log('created: ' + JSON.stringify(user));
    var cat = await Pet.create({
        ownerId: user.id,
        name: 'Garfield',
        gender: false,
        birth: '2007-07-07',
    });
    console.log('created: ' + JSON.stringify(cat));
    var dog = await Pet.create({
        ownerId: user.id,
        name: 'Odie',
        gender: false,
        birth: '2008-08-08',
    });
    console.log('created: ' + JSON.stringify(dog));
    var pets = await Pet.findAll({
        where: {
            name: 'Garfield'
        }
    });
    console.log(`find ${pets.length} pets:`);
    for (let p of pets) {
        console.log(JSON.stringify(p));
    }
    // ctx.response.body = `<h1>Hello, ${name}!</h1>`;
    ctx.render('sql.html', {
        title: 'sql',
        pets:pets
    });
};

module.exports = {
    'GET /sql': fn_sql
};