import * as Yup from "yup"
const eventDetails = [
  {
    sno: "1",
    name: "Aswath Hari",
    cityName: "Coimbatore-Palakkad",
    no: "9655528198",
    address:
      "Suguna PIP School, Nehru Nagar, Kalapatty Road, (Adjacent to Suguna Polytechnic), Coimbatore - 641014, TamilNadu.",
    date: "11/08/18",
    email: "aswathh012@gmail.com"
  },
  {
    sno: "2",
    name: "Himani Baskaran",
    cityName: "Trichy",
    date: "11/08/18",
    address: "Montfort School, Balaji Nagar, Kattur, Trichy – 620 019",
    no: "8300794717",
    coord: "no ",
    email: "himanibaskaran1@gmail.com"
  },
  {
    sno: "3",
    name: "Nikilesh B",
    cityName: "Madurai",
    date: "18/08/18",
    address: "Madurai Meenakshi Matriculation, Madurai - 625001 ",
    no: "9500893173 / 9080423761",
    email: "nikilesh21@gmail.com"
  },
  {
    sno: "4",
    name: "Tarakram Ramgopal",
    cityName: "Salem",
    date: "11/08/18",
    address: "Chinnathirupathi Post, Salem, Tamil Nadu - 636008",
    no: "9920325008",
    coord: "Yes",
    email: "tarakramr99@gmail.com"
  },
  {
    sno: "5",
    name: "Tejashree Murugan",
    cityName: "Chennai",
    date: "25/08/18",
    address:
      " P. S. Senior Secondary School , 215,ramakrishna Math Road , Mylapore, Chennai, Tamil Nadu 600004  ",
    no: "9500147200",
    email: "tejashree.murugan@gmail.com"
  },
  {
    sno: "6",
    name: "Aman Arora",
    cityName: "Hyderabad",
    date: "26/08/18",
    address:
      " BHEL community center, Ramchandrapuram, Hyderabad, Telangana 502032 ",
    no: "9494600201",
    email: "amanhyd99@gmail.com"
  },
  {
    sno: "7",
    name: "Adithya Swaroop",
    cityName: "Vishakapatnam",
    date: "19/08/18",
    address:
      "Ascent Junior College&#10;10-3-3, CBM Compound Rd, Opp Sampath Vinayak Temple, Facor Layout, Ram Nagar, Visakhapatnam, Andhra Pradesh https://goo.gl/maps/aJ8m3ER6DPP2",
    no: "9492218401",
    coord: "yes",
    email: "as.atp.gdn@gmail.com"
  },
  {
    sno: "8",
    name: "Dasari Aswin Dutt",
    cityName: "Vijayawada",
    date: "19/08/18",
    address: "FIITJEE Junior College, Vijayawada",
    no: "9182823241",
    coord: "no ",
    email: "dasariaswindutt@gmail.com"
  },
  {
    sno: "9",
    name: "Rushikesh Katkar",
    cityName: "Hubli-Dharwad",
    date: "19/08/18",
    address:
      "Lions English Medium school ,vijay nagar, koli, hubballi, karnataka 580032",
    no: "7028308757",
    coord: "yes",
    email: "ce17b108@smail.iitm.ac.in"
  },
  {
    sno: "10",
    name: "Simran Raj",
    cityName: "Bangalore",
    date: "TBA",
    address: "TBA",
    no: "9840880260 / 7992374298",
    email: "ch17b104@smail.iitm.ac.in"
  },
  {
    sno: "11",
    name: "Hrishikesh Gadekar",
    cityName: "Trivandrum",
    date: "12/08/18",
    address:
      "Bharatiya Vidya Bhavan, Senior Secondary School, Manvila, Pangappara.P.O, Trivandrum,Kerala Pin-695581.",
    no: "9623927895 / 8637693024",
    coord: "no",
    email: "hrishikesh.gadekar89@gmail.com"
  },
  {
    sno: "12",
    name: "Mahir Muhammed Ali",
    cityName: "Kozhikode",
    date: "TBA",
    address: "TBA",
    no: "8078339823",
    email: "mahirmuhammedali@gmail.com"
  },
  {
    sno: "13",
    name: "M S Nikhil Sen",
    cityName: "Kochi",
    date: "TBA",
    address: "TBA",
    no: "8921186528 / 8547428378",
    coord: "Yes",
    email: "nikhilsenbabu@gmail.com"
  },
  {
    sno: "14",
    name: "Thrilok Aashish A",
    cityName: "Thrissur",
    date: "TBA",
    address: "TBA",
    no: "9487818899",
    email: "thrilok96@gmail.com"
  },
  {
    sno: "15",
    name: "Prajeet Oza",
    cityName: "Delhi",
    date: "25-8-18",
    address:
      "New Era Public School, H17, Mayapuri Road, Mayapuri, Delhi - 110064",
    no: "8767888916 / 9840899416",
    coord: "yes",
    email: "oza.prajeet@gmail.com"
  },
  {
    sno: "16",
    name: "Prajeet Oza",
    cityName: "Chandigarh",
    date: "27/08/18",
    address: "Bhavan Vidyalaya, Near Market, Sector 15, Panchkula - 134113  ",
    no: "8767888916 / 9840899416",
    email: "oza.prajeet@gmail.com"
  },
  {
    sno: "17",
    name: "Apurva Kale",
    cityName: "Mumbai",
    date: "TBA",
    address: "TBA",
    no: "9834885225",
    email: "apurvaskale555@gmail.com"
  },
  {
    sno: "18",
    name: "Apurva Kale",
    cityName: "Pune",
    date: "TBA",
    address: "TBA",
    no: "9834885225",
    email: "apurvaskale555@gmail.com"
  },
  {
    sno: "19",
    name: "Ishan Buxy",
    cityName: "Kolkata",
    date: "25/08/18",
    address:
      "The Newtown School, Premises 01-0279, Plot No. DD 257, Road No. 279, New Town, DD Block(Newtown), Action Area I, Action Area 1, Kolkata, West Bengal 700156",
    no: "8450910745",
    coord: "Yes",
    email: "ishan.buxy@gmail.com"
  },
  {
    sno: "20",
    name: "Ishan Buxy",
    cityName: "Bhubaneswar",
    date: "TBA",
    address: "TBA",
    no: "8450910745",
    coord: "Yes",
    email: "ishan.buxy@gmail.com"
  }
]

export { eventDetails }

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
]

export { formFields }

const cities = [
  "Chennai",
  "Madurai",
  "Trichy",
  "Coimbatore",
  "Thanjavur",
  "Salem",
  "Trivandrum",
  "Kochi",
  "Thrissur",
  "Kozhikode",
  "Vishakhapatnam",
  "Vijaywada",
  "Hyderabad",
  "Hubli",
  "Bengaluru",
  "Delhi",
  "Chandigarh",
  "Mumbai",
  "Pune",
  "Kolkata",
  "Bhubaneshwar"
]

export { cities }

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
})

export { FormSchema }

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
}

export { initialFormValues }
