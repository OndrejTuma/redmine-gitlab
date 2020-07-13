import {useRef} from 'react'

export default () => {
  const nameRef = useRef()
  const passRef = useRef()
  return (
    <div>
      <button onClick={() => {
        fetch('/api/getUsers').catch(e => console.error(e))
      }}>fetch</button>
      <fieldset>
        <input defaultValue={'test'} type={'text'} placeholder={'username'} name={'name'} ref={nameRef}/>
        <input defaultValue={'trest'} type={'password'} placeholder={'password'} name={'password'} ref={passRef}/>
        <button onClick={() => {
          fetch('/api/createUser', {
            method: 'POST',
            body: JSON.stringify({
              name: nameRef.current.value,
              password: passRef.current.value,
            })
          }).catch(e => console.error(e))
        }}>create user</button>
      </fieldset>
    </div>
  )
}