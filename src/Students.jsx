import Student from "./Student"

const Students = (props) => {
  return (
    < >
    {props.students.map(student =>
      <Student key={student.name} student={student} />
      )}
    </>
  )
}

export default Students