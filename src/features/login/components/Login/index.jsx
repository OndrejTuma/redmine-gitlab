import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Login = ({error, isLoading, login}) => {
  return (
    <div>
      {error && <p style={{color: 'red'}}>{error.message}</p>}
      <Formik
        initialValues={{ name: '', password: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
          .max(15, 'Max 15 znaků')
          .required('Required'),
          password: Yup.string()
          .min(5, 'Alespoň 5 znaků')
          .required('Required'),
        })}
        onSubmit={values => login(values)}
      >
        {() => (
          <Form>
            <Field type={'text'} name={'name'}/>
            <ErrorMessage name={'name'} component={'div'}/>
            <Field type={'password'} name={'password'}/>
            <ErrorMessage name={'password'} component={'div'}/>
            <button type="submit" disabled={isLoading}>
              Přihlásit se
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login