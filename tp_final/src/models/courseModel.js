var pool = require("../database.js");

const getCourses = async () => {
 let selectQuery = "SELECT * FROM courses ORDER BY id DESC";
 return await pool.query(selectQuery);
}

const getCourse = async (courseId) => {
 let query = 'SELECT * FROM courses WHERE id = ?';
 let course = await pool.query(query, [courseId]);
 return course[0];
}

const addCourses = async (course) => {
 let query = "INSERT INTO courses SET ?";
 return await pool.query(query, [course]);
};

const deleteCourse = async (courseId) => {
 let query = 'DELETE FROM courses WHERE id = ?';
 return await pool.query(query, [courseId]);
};

const updateCourse = async (course, courseId) => {
 let query = 'UPDATE courses SET ? WHERE id = ?';
 return await pool.query(query, [course, courseId]);
};

module.exports = { getCourses, getCourse, addCourses, deleteCourse, updateCourse };