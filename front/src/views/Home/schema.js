export default {
  email: {
    presence: { allowEmpty: false, message: 'El correo es obligatorio' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'La contraseña es obligatoria' },
    length: {
      maximum: 128
    }
  }
};
