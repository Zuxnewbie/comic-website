const validateName = (name) => {
  return /^[a-zA-ZÀ-ỹ\s]{1,10}$/.test(name);
};

const validateEmail = (email) => {
  return /^[a-zA-Z0-9-]+(\.?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:[.][a-zA-Z0-9]+)*\.[a-zA-Z]{2,3}$/.test(
    email
  );
};

const validatePassword = (password) => {
  return password.length >= 6;
};

export { validateName, validateEmail, validatePassword };
