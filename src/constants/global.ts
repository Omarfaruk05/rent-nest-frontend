export const genderOptions = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Others",
    value: "others",
  },
];
export const departmentOptions = [
  {
    label: "HR",
    value: "hr manager",
  },
  {
    label: "Finance",
    value: "finance",
  },
  {
    label: "Management Department",
    value: "management department",
  },
];
export const bloodGroupOptions = [
  {
    label: "A+",
    value: "A+",
  },
  {
    label: "A-",
    value: "A-",
  },
  {
    label: "B+",
    value: "B+",
  },
  {
    label: "B-",
    value: "B-",
  },
  {
    label: "AB+",
    value: "AB+",
  },
  {
    label: "AB-",
    value: "AB-",
  },
  {
    label: "O+",
    value: "O+",
  },
  {
    label: "O-",
    value: "O-",
  },
];

export const academicFacultyOptions = [
  {
    label: "Engineering",
    value: "engineering",
  },
  {
    label: "Faculty of Science and Engineering",
    value: "faculty of science and engineering",
  },
];

export const academicDepartmentOptions = [
  {
    label: "CSE",
    value: "cse",
  },
  {
    label: "Software Engineering",
    value: "software engineering",
  },
];

export const academicSemesterOptions = [
  {
    label: "Fall 2023",
    value: "fall 2023",
  },
  {
    label: "Autumn 2023",
    value: "autumn 2023",
  },
  {
    label: "Summer 2023",
    value: "semmer 2023",
  },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const monthOptions = months.map((month: string) => {
  return {
    label: month,
    value: month,
  };
});

export const days = [
  "SATURDAY",
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
];
export const daysOptions = days.map((day: string) => {
  return {
    label: day,
    value: day,
  };
});
