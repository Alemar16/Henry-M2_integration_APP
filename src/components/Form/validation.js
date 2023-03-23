



//eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const validLettersAndNumbers = new RegExp(/^(?=.*[a-z])(?=.*[0-9])/);

export  const validate = (inputs) => {
  //inputs --. {userName: "Feli", password: ""}
  const errors = {}; 
  if (regexEmail.test(inputs.userName)) {
    errors.userName = "debe ser un email";
  }
  if (!inputs.userName) {
    errors.userName = "No puede ser vacio";
  }
  if (inputs.userName.length > 35) {
    errors.userName = "No puede tener mas de 35 caracteres";
  }
  if (!validLettersAndNumbers.test(inputs.password)) {
    errors.password = "Debe contener mínimo un número";
  }
  if (inputs.password.length < 6 || inputs.password.length > 10) {
    errors.password = "Debe tener entre 6 y 10 caracteres";
  }
  return errors;
};
