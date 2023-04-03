const mongoose = require("mongoose");

const init = () => {
    const dsn = "mongodb+srv://nestorovantonio:KxsQkZLToOJBmhOy@javascriptakademija.3ida2ea.mongodb.net/JavascriptAcademy?retryWrites=true&w=majority";
    mongoose.connect(dns);
}

mongoose.connect(init);
