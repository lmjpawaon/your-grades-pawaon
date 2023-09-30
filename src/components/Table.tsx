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
      <div className="w-full p-4">
        <h2 className="text-3xl font-bold font-header uppercase">Course List</h2>
        <div className="mt-4 mb-4 font-body">
          <input
            type="text"
            placeholder="Search by Course No. or Course Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-md border-blue-ribbon-800"
          />
        </div>
        <table className="w-full border-collapse border border-gray-300 font-body">
          <thead>
            <tr className='bg-blue-ribbon-300'>
              <th className="p-2 border">Course No.</th>
              <th className="p-2 border">Course Name</th>
              <th className="p-2 border">Units</th>
              <th className="p-2 border">Grade</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course, index) => (
              <tr key={index} className='hover:bg-blue-200'>
                <td className="p-2 border">{course.courseNo}</td>
                <td className="p-2 border">{course.courseName}</td>
                <td className="p-2 border">{course.courseUnits}</td>
                <td className="p-2 border">{course.grade}</td>
              </tr>
            ))}
          <tr>
            <td className="p-2 border font-bold text-blue-ribbon-700" colSpan={3}>
              Total QPI:
            </td>
            <td className="p-2 border no-border-left font-semibold italic text-blue-ribbon-950">
              {totalUnits === 0 ? 'N/A' : (totalGradePoints / totalUnits).toFixed(2)}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      
    );
  };

  export default Table