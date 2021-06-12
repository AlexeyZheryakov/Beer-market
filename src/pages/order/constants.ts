import * as yup from 'yup';

const regex = /^[a-zA-Z]+$/;

const constants = {
  validationsShema: yup.object().shape({
    name: yup.string().required('Required field').matches(regex, 'Name is not valid'),
    lastName: yup.string().required('Required field').matches(regex, 'Last name is not valid'),
    phone: yup.number().typeError('Only numbers').required('Required field'),
    email: yup.string().email('Email is not valid').required('Required field'),
    cardNumber: yup.number().typeError('Only numbers').required('Required field'),
    street: yup.string().required('Required field').matches(regex, 'Street is not valid'),
    houseNumber: yup.number().typeError('Only numbers').required('Required field'),
    date: yup.date().typeError('Date is not valid').required('Required field'),
  }),
  initialValues: {
    name: '',
    lastName: '',
    phone: '',
    email: '',
    cardNumber: '',
    street: '',
    houseNumber: '',
    date: new Date(),
  },
};

export default constants;
