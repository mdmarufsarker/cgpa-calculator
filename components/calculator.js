import Link from 'next/link'
import { useState } from 'react'

export default function header() {
    // take the number of subject from the user
    const [subject, setSubject] = useState(0)

    // take the subject name from the user
    const [subjectName, setSubjectName] = useState([])

    // take the subject credit from the user
    const [subjectCredit, setSubjectCredit] = useState([])

    // take the subject grade from the user
    const [subjectGrade, setSubjectGrade] = useState([])

    // take the subject grade point from the user
    const [subjectGradePoint, setSubjectGradePoint] = useState([])

    // take the total credit from the user
    const [totalCredit, setTotalCredit] = useState(0)

    return (
        <>
            <main className='container mx-auto'>
                <h1 className="text-3xl font-medium text-center py-8">CGPA Calculator for CSE Department</h1>
                <form>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <div>
                                <input type={"text"} className="w-full border-2 border-gray-300 p-2 rounded-md" placeholder="Enter the number of subject in your current semester" />
                            </div>
                            
                            <div>
                                <button className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}