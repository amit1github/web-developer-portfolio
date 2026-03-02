export interface EducationType {
  id: number;
  title: string;
  duration: string;
  institution: string;
}

export const educations: EducationType[] = [
  {
    id: 1,
    title: "Bachelor Degree",
    duration: "2020 - 2023",
    institution: "Narula Institute of Technology",
  },
  {
    id: 2,
    title: "Diploma Engineering",
    duration: "2017 - 2020",
    institution: "Elitte Institute of Technology",
  },
];