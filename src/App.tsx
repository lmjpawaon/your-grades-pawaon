import { useState } from 'react';
import Form from "./components/Form"
import Table from "./components/Table"
import type { Course } from './types/types';

function App() {

  const [courses, setCourses] = useState<Course[]>([]);
  console.log('Courses:', courses);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="lg:grid lg:grid-cols-5 ">
        <div className="col-span-2 bg-gray-100 p-4">
          <Form setCourses={setCourses} />
        </div>
        <div className="col-span-3 bg-white p-4">
          <Table courses={courses} />
        </div>
      </div>
    </div>
  )
}

export default App
