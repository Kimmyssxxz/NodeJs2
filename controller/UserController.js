const print = {
    index:(req, res) => {
        res.render('index');
    },
    vegetables:(req, res) => {
        res.render('vegetables');
    },
    about:(req, res) => {
        res.render('about');
    },
    contact:(req, res) => {
        res.render('contact');
    },
    shop:(req, res) => {
        res.render('shop');
    }
}


module.exports = print;