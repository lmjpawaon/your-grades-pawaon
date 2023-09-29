import React, {useState, useEffect} from 'react'

const Table: React.FC  = () => {

  // const [courses, setCourses] = useState<string[]>(() => {
  //   const storedCourses = JSON.parse(localStorage.getItem('courses') || '[]');
  //   return storedCourses;
  // });
  // const [searchQuery, setSearchQuery] = useState('');
  
  // useEffect(() => {
  //   const storedCourses = JSON.parse(localStorage.getItem('courses') || '[]');
  //   setCourses(storedCourses);
  // }, []);

  // const filteredCourses = courses.filter((course) => {
  //   const courseNoMatch = course.courseNo.toLowerCase().includes(searchQuery.toLowerCase());
  //   const courseNameMatch = course.courseName.toLowerCase().includes(searchQuery.toLowerCase());
  //   return courseNoMatch || courseNameMatch;
  // });
  return (
    <div className="w-1/2 p-4">
      <h2 className="text-2xl font-semibold">Course List</h2>
      <div className="mt-4 mb-4">
        <input
          type="text"
          placeholder="Search by Course No or Course Name"
          // value={searchQuery}
          // onChange={(e) => setSearchQuery(e.target.value)}
           className="w-full px-4 py-2 border rounded-md"
        />
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="p-2 border">Course No</th>
            <th className="p-2 border">Course Name</th>
            <th className="p-2 border">Units</th>
            <th className="p-2 border">Grade</th>
          </tr>
        </thead>
        <tbody>
          {/* {filteredCourses.map((course) => (
            <tr key={course.courseNo}>
              <td className="p-2 border">{course.courseNo}</td>
              <td className="p-2 border">{course.courseName}</td>
              <td className="p-2 border">{course.units}</td>
              <td className="p-2 border">{course.grade}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  )
}

export default Table