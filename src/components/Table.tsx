  import React, {useState, useEffect} from 'react'
  import type { Course } from '../types/types';

  interface TableProps{
    courses: Course[]
  }

  const Table: React.FC<TableProps> = ({courses}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [totalGradePoints, setTotalGradePoints] = useState<number>(0);
    const [totalUnits, setTotalUnits] = useState<number>(0);
  
    // Define the Course type
  
    const filteredCourses = courses.filter((course) => {
      const courseNoMatch = course.courseNo.toLowerCase().includes(searchQuery.toLowerCase());
      const courseNameMatch = course.courseName.toLowerCase().includes(searchQuery.toLowerCase());
      return courseNoMatch || courseNameMatch;
    });

    useEffect(() => {
      // Calculate total grade points and total units
      let gradePointsSum = 0;
      let unitsSum = 0;
    
      courses.forEach((course) => {
        gradePointsSum += course.gradeValue * course.courseUnits;
        unitsSum += course.courseUnits;
      });
    
      setTotalGradePoints(gradePointsSum);
      setTotalUnits(unitsSum);
    }, [courses]);
  
    return (
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-semibold">Course List</h2>
        <div className="mt-4 mb-4">
          <input
            type="text"
            placeholder="Search by Course No or Course Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
            {filteredCourses.map((course, index) => (
              <tr key={index}>
                <td className="p-2 border">{course.courseNo}</td>
                <td className="p-2 border">{course.courseName}</td>
                <td className="p-2 border">{course.courseUnits}</td>
                <td className="p-2 border">{course.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Total QPI */}
        <div className="mt-4 text-right">
        <div>
          <p>Total Grade Points: {totalGradePoints}</p>
          <p>Total Units: {totalUnits}</p>
          <p>Total QPI: {totalUnits === 0 ? 'N/A' : (totalGradePoints / totalUnits).toFixed(2)}</p>
        </div>
        </div>
      </div>
      
    );
  };

  export default Table