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
				<h5>
					{cities.map(city => (
						<button
							className="btn btn-outline-light pl-5 pr-5 city-btn"
							key={city}
						>
							{city}
						</button>
					))}
				</h5>
				<br />
				<Formik
					initialValues={initialFormValues}
					validationSchema={FormSchema}
					onSubmit={values => {
						register(values).then(res => {
							console.log(res);
							this.setState({ message: "SuccessFully Submitted!" });
						});
					}}
				>
					{({ handleSubmit, handleChange, values, isSubmitting, errors }) => {
						return (
							<form noValidate onSubmit={handleSubmit}>
								<div className="wrapper-container">
									<p className="style1" data-aos="fade">
										Select City
									</p>
									<div
										className="row justify-content-center"
										data-aos="fade-down"
									>
										<div className="col-md-6 col-lg-4">
											<span className="input">
												<select
													className="input__field"
													name="city"
													onChange={handleChange}
													onFocus={e => {
														e.target.parentNode.classList.add("input--filled");
													}}
													onBlur={e => {
														if (e.target.value === "")
															e.target.parentNode.classList.remove(
																"input--filled"
															);
													}}
												>
													<option className="option-list" value="" />
													{cities.map(city => {
														return (
															<option
																className="option-list"
																value={city}
																key={city}
															>
																{city}
															</option>
														);
													})}
												</select>
												<label className="input__label">
													<span className="input__label-content">city</span>
												</label>
											</span>
											<ErrorMessage
												name="city"
												component={props => (
													<span className="style4">{props.children}</span>
												)}
											/>
										</div>
									</div>
									{formFields.map((formField, index) => {
										return (
											<Fragment key={formField.heading}>
												{values.city && (
													<div>
														<p className="style1" data-aos="fade">
															{formField.heading}
														</p>
														<div className="row" data-aos="fade-down">
															{formField.fields.map(field => {
																return (
																	<div
																		className="col-md-6 col-lg-4"
																		key={field.name}
																	>
																		<span className="input">
																			<input
																				className="input__field"
																				type={field.type}
																				name={field.name}
																				required
																				value={values[field.name]}
																				onChange={handleChange}
																				onFocus={e => {
																					e.target.parentNode.classList.add(
																						"input--filled"
																					);
																				}}
																				onBlur={e => {
																					if (e.target.value === "")
																						e.target.parentNode.classList.remove(
																							"input--filled"
																						);
																				}}
																			/>
																			<label className="input__label">
																				<span className="input__label-content">
																					{field.label}
																				</span>
																			</label>
																		</span>
																		<ErrorMessage
																			name={field.name}
																			component={props => (
																				<span className="style4">
																					{props.children}
																				</span>
																			)}
																		/>
																	</div>
																);
															})}
															<div className="col-md-6 col-lg-4">
																<span className="input">
																	<select
																		className="input__field"
																		name={`class${index + 1}`}
																		value={values[`class${index + 1}`]}
																		onChange={handleChange}
																		onFocus={e => {
																			e.target.parentNode.classList.add(
																				"input--filled"
																			);
																		}}
																		onBlur={e => {
																			if (e.target.value === "")
																				e.target.parentNode.classList.remove(
																					"input--filled"
																				);
																		}}
																	>
																		<option className="option-list" value="" />
																		<option className="option-list" value="8">
																			8
																		</option>
																		<option className="option-list" value="9">
																			9
																		</option>
																		<option className="option-list" value="10">
																			10
																		</option>
																		<option className="option-list" value="11">
																			11
																		</option>
																		<option className="option-list" value="12">
																			12
																		</option>
																	</select>
																	<label className="input__label">
																		<span className="input__label-content">
																			class
																		</span>
																	</label>
																</span>
																<ErrorMessage
																	name={`class${index + 1}`}
																	component={props => (
																		<span className="style4">
																			{props.children}
																		</span>
																	)}
																/>
															</div>
														</div>
													</div>
												)}
											</Fragment>
										);
									})}

									<p className="style3" data-aos="fade">
										Please go through the rules and regulations of the
										competition mentioned above
									</p>
									<br />
									<br />
									<div className="actions" data-aos="fade">
										{(Object.entries(errors).length !== 0 ||
											errors.constructor !== Object) && (
											<p className="style1 error">Check the entered data</p>
										)}
										{values.city && (
											<button
												className="button style3 large"
												type="submit"
												disabled={isSubmitting}
											>
												<em>Submit</em>
											</button>
										)}
									</div>
								</div>
								{this.state.message && (
									<p className="style1 success">Submitted Successfully!!</p>
								)}
							</form>
						);
					}}
				</Formik>
			</section>
		);
	}
}

export default Register;
