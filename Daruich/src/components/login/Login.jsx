import { Link } from 'react-router-dom';

export default function Login() {
  const loguear = async () => {
    let user = document.getElementById("usuar").value;
    let pass = document.getElementById("passw").value;

    try {
      // Reemplaza la URL con la dirección de tu servidor
      const response = await axios.post(`https://myserver.com/login`, { username: user, password: pass });
      if (response.data) {
        alert("Usuario Correcto");
      } else {
        alert("Usuario Incorrecto");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className='content_box'>
        <div className='caja'>
          <div className='box_img'>
            <img src='/O.jpg' alt='logo' />
          </div>
          <h1 className='txt_log'>Login</h1>
          <form id='formulario'>
            <div className='content__main'>
              <div className='content__main_inp'>
                <img className='icon_txt' src='./icons/usuario.png' alt='' />
                <input id='usuar' className='box_txt' type='text' placeholder='Usuario' />
              </div>
              <div className='content__main_inp'>
                <img className='icon_txt' src='./icons/candado-cerrado.png' alt='' />
                <input id='passw' className='box_txt' type='password' placeholder='Contraseña' />
              </div>
              <div className='btn_recorder'>
                <input className='' type='checkbox' />
                <p>Recordarme</p>
              </div>
            </div>
            <div className=''>
              <a href='' className='txt_olvPass'>
                Olvidaste tu contraseña?
              </a>
              <div className='contenedor_btn'>
                <Link to="/" className='btn_login'>
                  <button onClick={loguear}>
                    Iniciar Sesión
                  </button>
                </Link>

              </div>
            </div>
          </form>
          <div className='txt_reg'>
            <p>No tienes cuenta?</p>
            <Link to='/registro'>

              Registrarse
            </Link>
          </div>
        </div>

      </div>

    </>
  );
}
