export const getUserInfo = (accessToken: string, refreshToken: string) => {
  return Promise.resolve({
    name: "Elon",
    age: 22,
    email: "jojn@gamil.com",
  });
};
