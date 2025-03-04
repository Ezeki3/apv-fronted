import usePacientes from "../hooks/usePacientes";
import Paciente from "./Paciente";

export default function ListadoPacientes() {

  const {pacientes } = usePacientes();

  return (
    <>
      { pacientes.length ? 
        (
          <>
            <h2 className="font-block text-3xl text-center">Listado Pacientes</h2>

            <p className="text-xl mt-5 mb-10 text-center">Administra tus {''}
              <span className="text-indigo-600 font-bold"> Pacientes y Citas</span>
            </p>

            { pacientes.map( paciente => (
              <Paciente
                key={paciente._id}
                paciente={paciente}
              ></Paciente>
            ))}
          </>
        ) : 
        (
          <>
            <h2 className="font-block text-3xl text-center">No hay pacientes</h2>

            <p className="text-xl mt-5 mb-10 text-center">Comienza agregando pacientes {''}
              <span className="text-indigo-600 font-bold"> y apareceran en este lugar</span>
            </p>
          </>
        )
      }
    </>
  )
}
