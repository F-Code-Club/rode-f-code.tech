import * as Yup from 'yup';

export const SchemaRegister = Yup.object().shape({
    email: Yup.string()
        .required('Email cannot be empty')
        .matches(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/, 'Your email must match the following formats'),
    fname: Yup.string().required('First name can`t be empty'),
    lname: Yup.string().required('Last name can`t be empty'),
    studentId: Yup.string()
        .required('StudentId can`t be empty')
        .matches(/^(S|s)[E|A|S|s|e|a]+([0-9]{6})$/, 'Wrong studentId'),
    phone: Yup.string()
        .required('Phone number can`t be empty')
        .matches(/^(01|03|05|07|08|09)+([0-9]{8})\b/, 'Incorrect format for phone number'),
    dob: Yup.date().required('Date is required').max(new Date(), 'Date cannot be in the future'),
    // terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
});
