import React, {useState} from 'react'

const Form: React.FC  = () => {

    // const [courseNo, setcourseNo] = useState('');
    // const [courseName, setcourseName] = useState('');
    // const [units, setUnits] = useState(0);
    // const [grade, setGrade] = useState('');


  return (
    <div className="w-1/2 p-4">
      <h2 className="text-2xl font-semibold font-header">Add Course</h2>
      <form /*onSubmit={handleSubmit}*/ className="mt-4">
        <div className="mb-4">
          <label htmlFor="courseNo" className="block font-medium text-gray-800">
            Course No
          </label>
          <input
            type="text"
            id="courseNo"
            // value={courseNo}
            // onChange={(e) => setCourseNo(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <label htmlFor="courseName" className="block font-medium text-gray-800">
            Course Name
          </label>
          <input
            type="text"
            id="courseName"
            // value={courseNo}
            // onChange={(e) => setCourseNo(e.target.value)}
             className="w-full px-4 py-2 border rounded-md"
            required
          />
          <label htmlFor="courseUnits" className="block font-medium text-gray-800">
            Units
          </label>
          <input
            type="text"
            id="courseUnits"
            // value={courseNo}
            // onChange={(e) => setCourseNo(e.target.value)}
             className="w-full px-4 py-2 border rounded-md"
            required
          />

        </div>
        {/* Radio buttons for grades */}
        <div className="mb-4">
          <label className="block font-medium text-gray-800">Grade</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="A"
                // checked={grade === 'A'}
                // onChange={() => setGrade('A')}
              />
              <span className="ml-2">A</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="B+"
                // checked={grade === 'A'}
                // onChange={() => setGrade('A')}
              />
              <span className="ml-2">B+</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="B"
                // checked={grade === 'A'}
                // onChange={() => setGrade('A')}
              />
              <span className="ml-2">B</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="C+"
                // checked={grade === 'A'}
                // onChange={() => setGrade('A')}
              />
              <span className="ml-2">C+</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="C"
                // checked={grade === 'A'}
                // onChange={() => setGrade('A')}
              />
              <span className="ml-2">C</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="D"
                // checked={grade === 'A'}
                // onChange={() => setGrade('A')}
              />
              <span className="ml-2">D</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="F"
                // checked={grade === 'A'}
                // onChange={() => setGrade('A')}
              />
              <span className="ml-2">F</span>
            </label>
            {/* Repeat for other grade options */}
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