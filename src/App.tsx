import { useState } from 'react';
import Form from "./components/Form"
import Table from "./components/Table"
import type { Course } from './types/types';

function App() {

  const [courses, setCourses] = useState<Course[]>([]);
  console.log('Courses:', courses);

  return (
    <div className="flex justify-center items-center">
      <Form setCourses={setCourses}/>
      <Table courses={courses}/>
    </div>
  )
}

export default App
