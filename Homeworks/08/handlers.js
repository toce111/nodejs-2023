const fs = require('fs');

const home = (req, res) => {
  res.send("welcome to the student page, proceed to /student.");
};

const students = (req, res) => {
  const { name, average } = req.body;

  let studentsData;

  if (fs.existsSync("students.json")) {
    const data = fs.readFileSync("students.json", 'utf8');
    console.log(data);
    studentsData = JSON.parse(data);
  }

  studentsData.push({ name, average });
  
  fs.writeFile("students.json", JSON.stringify(studentsData), (err) => {
    if(err) {
      console.error(err);
      res.status(500).send("Error writing to file");
    } else {
      res.send("Student was added successfully!");
    }
  });
};

module.exports = {
  home,
  students,
};