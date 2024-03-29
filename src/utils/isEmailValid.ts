export const isEmailValid = (email: string) => {
  const regex = /^([\w-\.*]+@([\w-]+\.)+[\w-]{2,4})?$/;

  return regex.test(email);
};
