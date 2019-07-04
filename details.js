import * as Yup from "yup";

const formFields = [
	{
		heading: "First Participant",
		fields: [
			{ name: "name1", type: "text", label: "Name" },
			{ name: "school1", type: "text", label: "School" },
			{ name: "rollno1", type: "text", label: "Roll No." },
			{ name: "email1", type: "email", label: "email" },
			{ name: "number1", type: "number", label: "Mobile No." }
		]
	},
	{
		heading: "Second Participant",
		fields: [
			{ name: "name2", type: "text", label: "Name" },
			{ name: "school2", type: "text", label: "School" },
			{ name: "rollno2", type: "text", label: "Roll No." },
			{ name: "email2", type: "email", label: "email" },
			{ name: "number2", type: "number", label: "Mobile No." }
		]
	}
];

export { formFields };

const cities = [
	"Chennai",
	"Madurai",
	"Trichy",
	"Coimbatore",
	"Salem",
	"Trivandrum",
	"Kochi",
	"Kannur",
	"Vijaywada",
	"Hyderabad",
	"Mangalore",
	"Delhi",
	"Kolkata"
];

export { cities };

const FormSchema = Yup.object().shape({
	city: Yup.string().required("*required"),
	name1: Yup.string().required("*required"),
	email1: Yup.string()
		.email("*invalid")
		.required("*required"),
	school1: Yup.string().required("*required"),
	number1: Yup.number().required("*required"),
	rollno1: Yup.string().required("*required"),
	class1: Yup.number()
		.required("*required")
		.positive()
		.integer(),
	name2: Yup.string().required("*required"),
	email2: Yup.string()
		.email("*invalid")
		.required("*required"),
	school2: Yup.string().required("*required"),
	number2: Yup.number().required("*required"),
	rollno2: Yup.string().required("*required"),
	class2: Yup.number()
		.required("*required")
		.positive()
		.integer()
});

export { FormSchema };

const initialFormValues = {
	city: "",
	name1: "",
	name2: "",
	email1: "",
	email2: "",
	school1: "",
	school2: "",
	class1: "",
	class2: "",
	rollno1: "",
	rollno2: "",
	number1: "",
	number2: ""
};

export { initialFormValues };

const venueDetails = [
	{
		city: "Delhi",
		venueName: "Kendriya Vidyalaya ",
		venueAddress: "A.A.I, Rangpuri, Delhi, New Delhi, Delhi 110037",
		date: "20-07-2019"
	},
	{
		city: "Kolkata",
		venueName: "Indus Valley World School",
		venueAddress:
			"488, Ajoy Nagar, Eastern Metropolitan By-Pass, Near Peerless Hospital, Behind Satyajit Ray Film Institution, Kolkata, West Bengal 700094",
		date: "13-07-2019"
	},
	{
		city: "Coimbatore",
		venueName: "SUGUNA PIP SCHOOL",
		venueAddress:
			"Kalapatti Main Rd, Adjacent to Suguna Polytechnic, Nehru Nagar West, Coimbatore, Tamil Nadu 641015",
		date: "13-07-2019"
	},
	{
		city: "Vijaywada",
		venueName: "Icon Public School",
		venueAddress:
			"D.No. 33-21, 21&22, Eluru Rd, Seetharampuram, Sitharamapuram, Vijayawada, Andhra Pradesh 520002",
		date: "14-07-2019"
	},
	{
		city: "Mangalore",
		venueName: "Delhi Public School",
		venueAddress:
			"Township, Kuthethoor (via Bala), MRPL Rd, Mangaluru, Karnataka 575030",
		date: "17-07-2019"
	},
	{
		city: "Kochi",
		venueName: "BHAVAN’S VIDYA MANDIR ",
		venueAddress: "Desabhimani Rd, Elamakkara, Kochi, Kerala 682026",
		date: "20-07-2019"
	},
	{
		city: "Trivandrum",
		venueName: "Bharatiya Vidya Bhavan",
		venueAddress: "Manvila, Thiruvananthapuram, Kerala 695581",
		date: "20-07-2019"
	},
	{
		city: "Chennai",
		venueName: "Kendriya Vidyalaya IITM Campus",
		venueAddress: "Bonn Avenue, Chennai, Tamil Nadu 600036",
		date: "20-07-2019"
	},
	{
		city: "Salem",
		venueName: "SSRM HIGHER SECONDARY SCHOOL",
		venueAddress: "S.S.R.M School Rd, Karumbalai, Salem, Tamil Nadu 636012",
		date: "20-07-2019"
	},
	{
		city: "Trichy",
		venueName: "SBIOA MHSS",
		venueAddress:
			"SBIOA School Rd, Kullapatti, Tiruchirappalli, Tamil Nadu 620007",
		date: "20-07-2019"
	},
	{
		city: "Madurai",
		venueName: "SREE NARAYANA VIDYA MANDIR SENIOR SECONDARY SCHOOL",
		venueAddress:
			"Opp To Kattupillaiyar Kovil, PT Rajan Rd, B B Kulam, Narimedu, Chockikulam, Madurai, Tamil Nadu 625002",
		date: "20-07-2019"
	},
	{
		city: "Kannur",
		venueName: "Kendriya Vidyalaya	",
		venueAddress: "Talap, Kannur, Kerala 670002",
		date: "27-07-2019"
	}
];

export { venueDetails };
