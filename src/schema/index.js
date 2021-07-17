import * as yup from "yup";
export const validationSchema = [
    yup.object({
        company: yup.string().required().label('company'),
        role: yup.string().required().label('role'),
        country: yup.string().required().label('location'),
        region: yup.string().required().label('region'),
        address: yup.string().required().label('address'),
        tags: yup.string().required().label('tags'),
    }),
    yup.object({
        min_salary: yup.string().required().label('Min Salary'),
        max_salary: yup.string().required().label('Max Salary')
    })
];


export const initialValues =  {
    company: "",
    role: "",
    country: "",
    region:"",
    address: "",
    tags: "",
    min_salary: "",
    max_salary: ""
}