import * as Yup from 'yup';

//Created File
export const getInitialValues = () => ({
  mass: '',
  angle: '',
  force: '',
});

export const validationSchema = Yup.object().shape({
  mass: Yup.number().required('Required'),
  angle: Yup.number().required('Required'),
  force: Yup.number().required('Required'),
});


