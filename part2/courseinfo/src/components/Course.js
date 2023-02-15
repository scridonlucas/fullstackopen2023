const Header = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
const Content = ({ courses }) => {
  return (
    <>
      <ul>
        {courses.map((course) => (
          <Part
            key={course.id}
            name={course.name}
            exercises={course.exercises}
          />
        ))}
      </ul>
    </>
  );
};

const Total = ({ courses }) => {
  const sum = courses.reduce((total, course) => {
    return total + course.exercises;
  }, 0);

  return (
    <>
      <h4>total of {sum} exercises</h4>
    </>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <>
      <li>
        {name} {exercises}
      </li>
    </>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header title={course.name} />
      <Content courses={course.parts} />
      <Total courses={course.parts} />
    </div>
  );
};

export default Course;
