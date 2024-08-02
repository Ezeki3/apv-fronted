import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    
    <>
      <h1>Administrar Pacientes de Veterinaria</h1>
      
      <Outlet />
    </>
  )
}
