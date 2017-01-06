/**
 * Created by Administrator on 2017/1/4.
 */
var fn_hello = async (ctx, next) => {
    var name = ctx.params.name;
    // ctx.response.body = `<h1>Hello, ${name}!</h1>`;
    ctx.render('hello.html', {
        title: 'Welcome',
        name:name
    });
};

module.exports = {
    'GET /hello/:name': fn_hello
};