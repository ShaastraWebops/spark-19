require("dotenv").config();
const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const Participant = require("./models/Participants");
const handle = app.getRequestHandler();
const cors = require("cors");
const sendgrid = require("@sendgrid/mail");
sendgrid.setApiKey(process.env.SENDGRID_KEY);

mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB connected");
});

app.prepare().then(() => {
	const server = express();
	server.use(bodyParser.json());
	server.use(cors());
	server.use(bodyParser.urlencoded({ extended: true }));
	// server.use((req, res, next) => {
	// 	if (req.header("x-forwarded-proto") !== "https") {
	// 		res.redirect(`https://${req.header("host")}${req.url}`);
	// 	} else next();
	// });

	server.get("/", (req, res) => {
		return app.render(req, res, "/", req.query);
	});

	server.post("/", (req, res) => {
		const participant = new Participant(req.body);
		participant
			.save()
			.then(participant => {
				res.status(200).json({ participant: "successfully submitted" });
				sendgrid
					.send({
						subject:
							"Spark Junior Quiz 2019 Confirmation || Shaastra 2020 - IIT Madras",
						text:
							"Hello , Greetings from Shaastra 2020, IIT Madras! Thank you for registering for the Spark Junior Quiz 2019. Embark on a great learning journey with Spark! The contact details of city wise coordinators of the event are available on our website under the ‘Contact Us’ <*link*> tab. You may contact them directly in case of any queries. Best wishes, Team Shaastra, IIT Madras ",
						html: `<p>Hello , Greetings from Shaastra 2020, IIT Madras!</p>
					<p>Thank you for registering for the Spark Junior Quiz 2019. Embark on a great learning journey with Spark! The contact details of city wise coordinators of the event are available on our website under the ‘Contact Us’ tab. You may contact them directly in case of any queries.</p>
					<p>Visit <a href="http://spark.shaastra.org">spark.shaastra.org</a></p>
					<p>Best wishes, </p>
					<p>Team Shaastra </>
					<p>IIT Madras </p>
					`,
						to: [participant.email1, participant.email2],
						from: "outreach@shaastra.org"
					})
					.then(res => {
						console.log(res);
					})
					.catch(err => {
						console.log(err);
					});
			})
			.catch(err => {
				res.status(400).send("failed");
				console.log(err);
			});
	});

	server.get("/viewRegistrations", async (req, res) => {
		let registrations = await Participant.find({}).exec();
		res.status(200).json(registrations);
	});

	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(port, err => {
		if (err) throw err;
		console.log(`Server Ready on Port ${port}`);
	});
});
