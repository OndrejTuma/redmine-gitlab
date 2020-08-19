import * as Yup from 'yup'

const password =  Yup.string()
.min(5, 'Alespoň 5 znaků')
.required('Povinné')

export default password