const mobileValid = (mobile) => {
  const phoneRegExp = /^(0|\+98)?9[0-9]{9}$/;
  return phoneRegExp.test(mobile);
};

export { mobileValid };
