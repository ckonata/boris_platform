const controller = {};

controller.getCourses = (req, res) => {
  res.send("get courses");
}

controller.addCourses = (req, res) => {
 res.send("add courses");
}

controller.updateCourses = (req, res) => {
 res.send("update courses");
}

controller.deleteCourses = (req, res) => {
 res.send("delete courses");
}
module.exports = controller;