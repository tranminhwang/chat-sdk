export const getUserInfo = (accessToken: string, refreshToken: string) => {
  return Promise.resolve({
    name: "Tran Minh Quang",
    age: 22,
    email: "jojn@gamil.com",
  });
};
