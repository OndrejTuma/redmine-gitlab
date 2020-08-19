import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string } from 'yup'
import { isRequired, getCharCountMessage } from '@/utils/yup/validators'

const Register = ({ error, isLoading, register }) => {
  return (
    <div>
      {error && <p>{error.message}</p>}
      <Formik
        initialValues={{ name: '', password: '' }}
        validationSchema={object({
          name: string()
            .required('Jméno musíte vyplnit')
            .min(3, `Jméno musí mít alespoň ${getCharCountMessage(3)}`),
          password: isRequired(string())('Heslo je povinné'),
          redmineToken: isRequired(string())(),
          gitlabToken: isRequired(string())(),
        })}
        onSubmit={values => register(values)}
      >
        {() => (
          <Form>
            <Field type={'text'} name={'name'} placeholder={'Přihlašovací jméno'}/>
            <ErrorMessage name={'name'} component={'div'}/>
            <Field type={'password'} name={'password'} placeholder={'Heslo'}/>
            <ErrorMessage name={'password'} component={'div'}/>
            <Field type={'text'} name={'redmineToken'} placeholder={'Redmine access token'}/>
            <ErrorMessage name={'redmineToken'} component={'div'}/>
            <Field type={'text'} name={'gitlabToken'} placeholder={'Gitlab access token'}/>
            <ErrorMessage name={'gitlabToken'} component={'div'}/>
            <button type="submit" disabled={isLoading}>
              Registrovat
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Register