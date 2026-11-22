import CoursesDao from "./dao";
export default function CourseRoutes(app, db) {
  const dao = CoursesDao(db);
  const findAllCourses = (req, res) => {
    res.json(dao.findAllCourses());
  };
  const createCourse = (req, res) => {
    const newCourse = dao.createCourse(req.body);
    res.json(newCourse);
  };
  const deleteCourse = (req, res) => {
    const { courseId } = req.params;
    dao.deleteCourse(courseId);
    res.sendStatus(200);
  };
  const updateCourse = (req, res) => {
    const { courseId } = req.params;
    const status = dao.updateCourse(courseId, req.body);
    res.json(status);
  };
  app.get("/api/courses", findAllCourses);
  app.post("/api/courses", createCourse);
  app.delete("/api/courses/:courseId", deleteCourse);
  app.put("/api/courses/:courseId", updateCourse);
}
