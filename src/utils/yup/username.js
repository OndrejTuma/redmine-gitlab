import * as Yup from 'yup'

const username = Yup.string()
.max(15, 'Max 15 znaků')
.required('Povinné')

export default username