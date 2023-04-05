const mongoose = require("mongoose");

const init = () => {
    const dns = "mongodb+srv://nestorovantonio:KxsQkZLToOJBmhOy@javascriptakademija.3ida2ea.mongodb.net/JavascriptAcademy?retryWrites=true&w=majority";
    mongoose.connect(dns);
};

module.exports = {
    init
};