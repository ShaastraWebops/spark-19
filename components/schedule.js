import React from "react";
import { venueDetails } from "../details";

const Schedule = () => {
	return (
		<section id="schedule" className="wrapper style2">
			<div className="title" data-aos="fade-up">
				Schedule
			</div>
			<div className="wrapper-container">
				<table className="table table-striped table-bordered table-responsive">
					<thead className="thead-dark" data-aos="fade-down">
						<tr>
							<th>City</th>
							<th>Venue Name</th>
							<th>Venue Address</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{venueDetails.map(detail => {
							return (
								<tr key={detail.city} data-aos="fade-down">
									<td className="style1">{detail.city}</td>
									<td className="style1">{detail.venueName}</td>
									<td className="style1">{detail.venueAddress}</td>
									<td className="style1">{detail.date}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default Schedule;
