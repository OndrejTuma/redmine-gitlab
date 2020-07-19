import {useRef} from 'react'

export default () => {
  const idRef = useRef()
  const nameRef = useRef()
  const passRef = useRef()

  return (
    <div>
      <input type={'text'} ref={idRef} defaultValue={'5f1431cbac6187003d7aa94b'}/>
      <button onClick={() => fetch(`/api/getUsers?id=${idRef.current.value}`).catch(e => console.error(e))}>fetch</button>
      <fieldset>
        <input defaultValue={'test'} type={'text'} placeholder={'username'} name={'name'} ref={nameRef}/>
        <input defaultValue={'trest'} type={'password'} placeholder={'password'} name={'password'} ref={passRef}/>
        <button onClick={() => {
          fetch('/api/createUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
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