const home = (req, res) => {
  res.send("welcome to the student page, proceed to /student.");
};
const students = (req, res) => {
  const { name, average } = req.body;

  let studentsData = [];
  if (fs.existsSync("./students.json")) {
    const data = fs.readFileSync("./students.json");
    studentsData = JSON.parse(data);
  }
  studentsData.push({ name, average });
  fs.writeFileSync("./students.json", JSON.stringify(studentsData));

  res.send("Student was added successfully!");
};

module.exports = {
  home,
  students,
};