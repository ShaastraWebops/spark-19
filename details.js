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
	"Pune",
	"Kolkata",
	"Thrissur",
	"Vishakhapatnam",
	"Nagpur"
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
		date: "20-07-2019",
		deadline: "17-07-2019",

		contact: "B.Sundar Balarka ,8333045402"
	},
	{
		city: "Kolkata",
		venueName: "Indus Valley World School",
		venueAddress:
			"488, Ajoy Nagar, Eastern Metropolitan By-Pass, Near Peerless Hospital, Behind Satyajit Ray Film Institution, Kolkata, West Bengal 700094",
		date: "13-07-2019",
		deadline: "10-07-2019",

		contact: "Kshitij Raj Dhara, 9004971987"
	},
	{
		city: "Coimbatore",
		venueName: "SUGUNA PIP SCHOOL",
		venueAddress:
			"Kalapatti Main Rd, Adjacent to Suguna Polytechnic, Nehru Nagar West, Coimbatore, Tamil Nadu 641015",
		date: "13-07-2019",
		deadline: "10-07-2019",

		contact: "Abishek Shivram, 9443253232"
	},
	{
		city: "Vijaywada",
		venueName: "Icon Public School",
		venueAddress:
			"D.No. 33-21, 21&22, Eluru Rd, Seetharampuram, Sitharamapuram, Vijayawada, Andhra Pradesh 520002",
		date: "14-07-2019",
		deadline: "10-07-2019",

		contact: "Sumana, 6302911804"
	},
	{
		city: "Hyderabad",
		venueName: "Oasis School, Raidurg ,Hyderabd",
		venueAddress:
			"6-27, Old Mumbai Highway, Shaikpet, Rai Durg, Hyderabad, Telangana 500104",
		date: "21-07-2019",
		deadline: "21-07-2019",

		contact: "Sumanth Nethi, 8500847881"
	},
	{
		city: "Mangalore",
		venueName: "Delhi Public School",
		venueAddress:
			"Township, Kuthethoor (via Bala), MRPL Rd, Mangaluru, Karnataka 575030",
		date: "17-07-2019",
		deadline: "13-07-2019",

		contact: "V. Gokul Sai Sujan, 6385147724"
	},
	{
		city: "Kochi",
		venueName: "BHAVAN’S VIDYA MANDIR ",
		venueAddress: "Desabhimani Rd, Elamakkara, Kochi, Kerala 682026",
		date: "20-07-2019",
		deadline: "17-07-2019",

		contact: "Shvetha Sivaprasad, 6379764273"
	},
	{
		city: "Trivandrum",
		venueName: "Bharatiya Vidya Bhavan",
		venueAddress: "Manvila, Thiruvananthapuram, Kerala 695581",
		date: "20-07-2019",
		deadline: "17-07-2019",

		contact: "Naveen Kumar, 9497019835"
	},
	{
		city: "Chennai",
		venueName: "Kendriya Vidyalaya IITM Campus",
		venueAddress: "Bonn Avenue, Chennai, Tamil Nadu 600036",
		date: "20-07-2019",
		deadline: "17-07-2019",

		contact: "Aswinkumar, 7708264928"
	},
	{
		city: "Salem",
		venueName: "SSRM HIGHER SECONDARY SCHOOL",
		venueAddress: "S.S.R.M School Rd, Karumbalai, Salem, Tamil Nadu 636012",
		date: "20-07-2019",
		deadline: "17-07-2019",

		contact: "Navnitan, 8248293594"
	},
	{
		city: "Trichy",
		venueName: "SBIOA Matric. and Higher Secondary School",
		venueAddress:
			"SBIOA School Rd, Kullapatti, Tiruchirappalli, Tamil Nadu 620007",
		date: "20-07-2019",
		deadline: "17-07-2019",

		contact: "Ramakrishnan S, 7338904721"
	},
	{
		city: "Madurai",
		venueName: "Kendriya Vidyalaya",
		venueAddress:
			"Opp To Kattupillaiyar Kovil, PT Rajan Rd, B B Kulam, Narimedu, Chockikulam, Madurai, Tamil Nadu 625002",
		date: "20-07-2019",
		deadline: "17-07-2019",

		contact: "Sankaranarayanan B, 6383737193"
	},
	{
		city: "Kannur",
		venueName: "SREE NARAYANA VIDYA MANDIR SENIOR SECONDARY SCHOOL",
		venueAddress: "Talap, Kannur, Kerala 670002",
		date: "27-07-2019",
		deadline: "24-07-2019",
		contact: "AKSHAY MOHAN, 9947331993"
	},
	{
		city: "Pune",
		venueName: "N.M.V Girls High School & Junior College",
		venueAddress:
			"2061, Sane Guruji Rd, Vijayanagar Colony, Sadashiv Peth, Pune, Maharashtra 411030",
		date: "20-07-2019, 1:30 PM - 4:30 PM",
		deadline: "17-07-2019",
		contact: "H Madhan Kumar, 6303564574"
	},
	{
		city: "Vishakhapatnam",
		venueName: "Kendriya Vidyalaya No. 2, SRI VIJAYA NAGAR",
		venueAddress:
			"104 AREA NEAR INDUSTRIAL BUS STOP Industrial Estate, Gavara Kanchara Palem, Kancharapalem, Visakhapatnam, Andhra Pradesh 530007",
		date: "21-07-2019",
		deadline: "21-07-2019",
		contact: "Prabash Reddy M, 9380194820"
	},
	{
		city: "Thrissur",
		venueName: "Kendriya Vidyalaya, Puranattukara",
		venueAddress: "Puranattukara, Thrissur, Kerala 680551",
		date: "20-07-2019",
		deadline: "20-07-2019",
		contact: "S Karthick Saran, 7993925081"
	},
	{
		city: "Nagpur",
		venueName: "School of Scholars, Beltarodi branch",
		venueAddress:
			"Near, Prithviraj Nagar, Beltarodi, Nagpur, Maharashtra 440037",
		date: "21-07-2019",
		deadline: "21-07-2019",
		contact: "Vatsal Mavani, 9712930871"
	}
];

export { venueDetails };
