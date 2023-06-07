import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {signInWithPopup} from 'firebase/auth'
import {auth, Providers } from '../config/firebase'

interface Props {
    childern: React.ReactNode;
}



const AuthChecker = ({ childern}: Props) => {
    const navigate = useNavigate();

    useEffect(() =>{
        if (!auth.currentUser){
            navigate("../")
            signInWithPopup(auth, Providers.google)
        }
    }, [])


  return (
<>{childern}</>
  )
}

export default AuthChecker