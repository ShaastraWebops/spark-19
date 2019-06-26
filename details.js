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
  // "Salem",
  "Trivandrum",
  "Kochi",
  "Kannur",
  "Thrissur",
  "Kozhikode",
  "Vishakhapatnam",
  "Vijaywada",
  "Hyderabad",
  "Bengaluru",
  "Mangalore",
  "Delhi",
  "Mumbai",
  "Pune",
  "Nagpur",
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
