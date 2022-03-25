import { useSelector } from 'react-redux'
import { firebase } from "../firebase/firebaseConfig"
//quitar db
import { db } from "../firebase/firebaseConfig"
import './css/ventilador.css'

export const Ventilador = ({habitacion, estado}) => {
    const {uid} = useSelector(state => state.auth);
    const onChange = (ev) => {
        console.log(ev.target.checked);

        //quitar esto
        db.doc(`/${uid}/${habitacion}`)
        .update({
            Ventilador:ev.target.checked
        })

        /*firebase
        .database()
        .ref(`/${uid}/${habitacion}/Ventilador`)
        .set(ev.target.checked)*/
    }
    return (
        <div className="padding">
            <div className="switch demo3"> <input onChange={onChange} checked={estado} type="checkbox" /> <label><i></i></label> </div>
        </div>
    )
}