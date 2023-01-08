import { useState } from "react"
import { useDispatch } from "react-redux"
import { setUserName } from "../../store/actions"

function LogIn(params) {
    const dispatch = useDispatch()
    const [user, setUser] = useState('')


   function generatesUserName(event) {
        event.preventDefault()
        dispatch(setUserName(user))
        setUser(prev => prev = '')
      }

    function getValueInputUserName(e) {
            setUser(() => e.target.value);
    }
    return (
        <>
        <form >
            <input type="text" name="name" value={user} onChange={getValueInputUserName}/>

            <label htmlFor="name">Введи имя</label>
            <button onClick={(event)=>generatesUserName(event)}>RRRRr</button>
        </form>
        </>
    )
}

export default LogIn
