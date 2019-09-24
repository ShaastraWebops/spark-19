import React, { Fragment } from "react";
import { formFields, cities, FormSchema, initialFormValues } from "../details";
import { Formik, ErrorMessage } from "formik";
import { register } from "./service";

class Register extends React.Component {
	state = {
		message: ""
	};
	render() {
		return (
			<section id="register" className="wrapper style3">
				<div className="title" data-aos="fade-up">
					Register
				</div>
				<h3 className="style3">Registrations open for following cities</h3>
				<h5>Registrations are Closed</h5>
				<br />
			</section>
		);
	}
}

export default Register;
