const movies = require("../pkg/movies");

const getAll = async (req, res) => {
  try {
    let data = await movies.getAll();
    res.send(data).status(200);
  } catch (err) {
    console.log(err);
    res.status(500).send("internal server error.");
  }
};

const getOne = async (req, res) => {
  try {
    let data = await movies.getOne(req.params.id);
    res.send(data).status(200);
  } catch (err) {
    console.log(err);
    res.status(500).send("internal server error.");
  }
};

const create = async (req, res) => {
  try {
    let data = req.body;
    await movies.create(data);
    res.send(data).status(201);
  } catch (err) {
    console.log(err);
    res.status(500).send("internal server error.");
  }
};

const updateOne = async (req, res) => {};
try {
    let id = req.params.id;
    let data = req.body;
    await moview.updateOne(id, data);
    res.send(data).status(204);
} catch (err) {
  console.log(err);
  res.status(500).send("internal server error.");
};
