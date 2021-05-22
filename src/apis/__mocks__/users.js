// apis/__mocks__/users.js

export const fetchUsers = jest.fn(() =>
  Promise.resolve({
    data: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
      },
    ],
  })
);
