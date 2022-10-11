import React from 'react';
import '../css/RegisterForm.css';

function RegisterForm() {
    return (
        <div className="principal-register-form">
            <div className="register-form">
                <img src={require('./img/logo.jpg')} alt='logoimg'/>
                <h1 className="text-center">Verifique que los datos mostrados sean correctos</h1>   
                <form className="needs-validation">
                
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Correo electrónico</label>
                        <input className="form-control" type="email" id="email" placeholder="sanderschancan@hotmail.com" required />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Nombre</label>
                        <input className="form-control" type="text" id="name" placeholder="Sanders" required />
                    </div>  

                    <div className="form-group">
                        <label className="form-label" htmlFor="lastName">Apellidos</label>
                        <input className="form-control" type="text" id="lastName" placeholder="Chancan Chanca" required />
                    </div>            

                    <div className="form-group">
                        <label className="form-label" htmlFor="role">Apellidos</label>
                        <input className="form-control" type="text" id="role" placeholder="Jefe de Compras" required />
                    </div>      

                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Contraseña</label>
                        <input className="form-control" type="password" id="password" placeholder="********************" required />
                    </div> 

                    <div className="form-group">
                        <label className="form-label" htmlFor="passwordConfirm">Confirmar contraseña</label>
                        <input className="form-control" type="password" id="passwordConfirm" placeholder="********************" required />
                    </div> 

                    <div className="form-group form-check">
                            <input className="form-check-input" type="checkbox" id="check" />
                            <label className="form-check-label"> Acepto <a href='#'>los términos y condiciones de uso</a></label>
                    </div>

                    <input className="btn btn-success w-100" type="submit" value="Registrar" />

                    <div className="form-group text-center">
                        <label className="form-check-label">¿Ya tienes cuenta? <a href='#'>Conéctate</a></label>
                    </div>
            </form>
        </div>
  </div>
   );
 };
 
 export default RegisterForm;
 