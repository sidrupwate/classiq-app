import './Courses.css';

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Learn to build a full stack web application from scratch",
    price: "$100",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&q=80", // replace with your image
    label: "3",
    category: "Web Dev."
  },
  {
    id: 2,
    title: "Data Science",
    description: "Learn to analyze data and build predictive models",
    price: "$400",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=600&q=80",
    label: "3",
    category: "Data"
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Learn to design beautiful user interfaces",
    price: "$800",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=600&q=80",
    label: "3",
    category: "UI/UX"
  },
  {
    id: 4,
    title: "HTML in 20 minutes",
    description: "Learn to design beautiful user interfaces",
    price: "$200",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&q=80",
    label: "ADVANCED"
  }
];

export default function Courses() {
  return (
    <div className="courses-main">
      <div className="courses-header">
        <span>All Courses</span>
        <span className="courses-arrow">↗</span>
      </div>
      <div className="courses-list">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <div className="course-img-wrap">
              <span className="course-label">{course.label}</span>
              <img className="course-img" src={course.img} alt={course.title} />
              {course.category && (
                <span className="course-category">{course.category}</span>
              )}
            </div>
            <div className="course-title">
              {course.title}
            </div>
            <div className="course-desc">
              {course.description}
            </div>
            <div className="course-bottom">
              <span className="course-price">{course.price}</span>
              <button className="course-enroll">Enroll</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
