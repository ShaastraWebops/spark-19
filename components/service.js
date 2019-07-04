import axios from "axios";
export const register = newParticipant =>
	new Promise((resolve, reject) => {
		axios
			.post("/", {
				city: newParticipant.city,
				name1: newParticipant.name1,
				email1: newParticipant.email1,
				school1: newParticipant.school1,
				class1: newParticipant.class1,
				rollno1: newParticipant.rollno1,
				number1: newParticipant.number1,
				name2: newParticipant.name2,
				email2: newParticipant.email2,
				school2: newParticipant.school2,
				class2: newParticipant.class2,
				rollno2: newParticipant.rollno2,
				number2: newParticipant.number2
			})
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err);
			});
	});
