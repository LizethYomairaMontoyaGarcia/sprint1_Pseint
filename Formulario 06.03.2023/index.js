function datos() {
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");

  const regExpEmail = /^\S+@\S+\.\S+$/;

  let regExpPhone = /^[0-10]$/;
  console.log("El Correo es: " + email);
  console.log("El telefono es:" + phone);

  if (regExpEmail.test(email.value)) {
    alert("correo valido");

    if (regExpPhone.test(phone.value)) {
      alert("Telefono valido");
    } else {
      alert("Telefono no valido");
    }

  } else {
    alert("correo no valido");
  }
}

///^\+?\d{2}(\s\d{3}){2}\s\d{4}$/;
