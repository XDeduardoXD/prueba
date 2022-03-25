import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Temperature } from "../components/Temperature"
import { Ventilador } from "../components/Ventilador"
//firestore quitar db
import { db } from "../firebase/firebaseConfig"
//import { firebase } from "../firebase/firebaseConfig"

export const HomePage = () => {
    const [habitaciones, setHabitaciones] = useState([]);
    const { uid } = useSelector(state => state.auth);

    //quitar todo esto
    const getHabitaciones = async (uid) => {
        const habitaciones = await db.collection(uid).get()
        let datos = [];
        habitaciones.forEach(item => {
            datos.push({
                key: item.id,
                value: item.data()
            })
        })
        return datos;
    }

    //quitar esto
    let datos = [];

    useEffect(async()=>{
        //quitar las dos lineas y el async de arribita
        let datos = await getHabitaciones(uid)
        setHabitaciones(datos)

        //realtime
        /*firebase
            .database()
            .ref(`/${uid}`)
            .on("value", (snapshot) => {
                const casa = snapshot.val();
                let datos = [];
                for (const keyHabitacion in casa) {
                    let elemento = {
                        key: keyHabitacion,
                        value: casa[keyHabitacion]
                    }
                    datos.push(elemento);
                }
                setHabitaciones(datos)
                console.log(habitaciones);
            })*/
    }, [/*dejar solo corchetes*/datos]);
    return (
        <>
            {
                habitaciones.map((habitacion) => (
                    <div className="row" key={habitacion.key}>
                        <div className="col-md-6">
                            <Temperature room={habitacion.value.Nombre} value={habitacion.value.Temperatura} />
                        </div>
                        <div className="col-md-6">
                            <Ventilador habitacion={habitacion.key} estado={habitacion.value.Ventilador ? "checked" : ""} />
                        </div>
                    </div>
                ))
            }
        </>
    )
}