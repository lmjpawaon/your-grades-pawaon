import React, {useState} from 'react'

const Form: React.FC  = () => {

    const [courseNo, setCourseNo] = useState('');
    const [courseName, setCourseName] = useState('');
    const [courseUnits, setCourseUnits] = useState(0);
    const [grade, setGrade] = useState('');

    const gradeToValue: Record<string, number> = {
      'A': 4.0,
      'B+': 3.5,
      'B': 3.0,
      'C+': 2.5,
      'C': 2.0,
      'D': 1.0,
      'F': 0.0,
    };
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const gradeValue = gradeToValue[grade] || 0;
      // Create an object with form data
      const formData = {
        courseNo,
        courseName,
        courseUnits,
        grade,
        gradeValue,
      };

      // Log the form data to the console for monitoring
      console.log('Form Data:', formData);
      console.log('GradeValue:', gradeToValue);
    
      // Retrieve existing entries from localStorage
      const existingEntries = JSON.parse(localStorage.getItem('courses') || '[]');
    
      // Add the new entry to the existing entries
      const updatedEntries = [...existingEntries, formData];
    
      // Save the updated entries back to localStorage
      localStorage.setItem('courses', JSON.stringify(updatedEntries));
    
      // Clear the form fields after submission
      setCourseNo('');
      setCourseName('');
      setCourseUnits(0);
      setGrade('');
    };

  return (
    <div className="w-1/2 p-4">
      <h2 className="text-2xl font-semibold font-header">Add Course</h2>

      {/* Input Forms */}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="courseNo" className="block font-medium text-gray-800">
            Course No
          </label>
          <input
            type="text"
            id="courseNo"
            value={courseNo}
            onChange={(e) => setCourseNo(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <label htmlFor="courseName" className="block font-medium text-gray-800">
            Course Name
          </label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
             className="w-full px-4 py-2 border rounded-md"
            required
          />
          <label htmlFor="courseUnits" className="block font-medium text-gray-800">
            Units
          </label>
          <input
            type="number"
            id="courseUnits"
            value={courseUnits}
            onChange={(e) => setCourseUnits(parseInt(e.target.value))}
             className="w-full px-4 py-2 border rounded-md"
            required
          />

        </div>
        {/* Radio buttons for grades */}
        <div className="mb-4">
          <label className="block font-medium text-gray-800">Grade</label>
          <div>
            {Object.keys(gradeToValue).map((gradeOption) => (
              <label key={gradeOption} className="inline-flex items-center">
                <input
                  type="radio"
                  value={gradeOption}
                  checked={grade === gradeOption}
                  onChange={() => setGrade(gradeOption)}
                />
                <span className="ml-2">{gradeOption}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form