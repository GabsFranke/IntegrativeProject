import "./login.css";

const Login = ({ show, setOpenLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      if (
        user.email === e.target.email.value &&
        user.password === e.target.password.value
      ) {
        setOpenLogin(false);
        alert("Bienvenido");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } else {
      alert("No existe");
    }
  };

  return (
    <div
      className={`login-container ${show ? "show" : null}`}
      id="login-container"
    >
      <form className="formulario-login" onSubmit={handleSubmit}>
        <h1>Iniciar sesion</h1>
        <div className="otros-datos">
          <div>
            <label>Correo electronico</label>
            <input
              type="email"
              id="email"
              placeholder="Ingrese su correo electronico"
            />
          </div>
          <div>
            <label>Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingrese su contraseña"
            />
          </div>
        </div>
        <div className="boton">
          <button id="boton-login" type="submit">
            Ingresar
          </button>
        </div>
        <p>
          Aun no tienes una cuenta? <a href="">Registrate aqui</a>
        </p>
      </form>
    </div>
  );
};
export default Login;
