const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validation = (userData) => {
  const errors = {};
  if(!regexEmail.test(userData.email)){
    errors.email = "El email es invalido";
  }
  if(!userData.email){
    errors.email = " Este campo no puede estar vacio"
  }
  if(userData.email.length > 35){
    errors.email = "El email es invalido"
  }
  if(!userData.password.match(/\d/)){
    errors.password = "La contraseña debe contener al menos un numero"
  }
  if(userData.password.length < 6 && userData.password.length > 10 ){
    errors.password = "La contraseña debe tener entre 10 y 6 caracteres"
  }
  return errors;
}
export default validation;

