import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch
} from "react-router-dom";
import BarChart from "./BarChart";

function Student(props) {
	const data = props.data
	let { topicId } = useParams();
	let name = topicId.charAt(0).toUpperCase() + topicId.slice(1);
	const studentInfo = props.students.filter(student => student.name === name)[0]
	console.log(studentInfo)

	// filter data by value name, which is same as name
	// use that data in the chartcomponent
	const getStudentData = (name) => {
		const studentData = data.filter(function (e) {
			return e.name === name
		})
		return studentData;
	}

	const studentData = getStudentData(name);

	studentData.forEach(item => {
		console.log(item.exercise)
		if (item.exercise.length > 14) {
			item.exercise = item.exercise.substring(0, 14)
		}
	})

	return (
		<header className="Student" >
			{ studentInfo && <div><h1>{name} {studentInfo.lastName}</h1><img src={studentInfo.image} /></div>}
			{ studentInfo && <h2>Contact information: </h2>}
			{
				studentInfo && <p>
					Email: {studentInfo.email} <br></br>
				Phone: {studentInfo.phone}<br></br>
				Age: {studentInfo.age}
				</p>
			}
			<BarChart data={studentData} />
		</header >
	);
}

export default Student;
