import { act, render, screen } from "@testing-library/react";
import { fetchUsers } from "./apis/users";
import App from "./App";

jest.mock("./apis/users");

describe("ListUsers", () => {
  describe("error state", () => {
    test("renders error message", async () => {
      fetchUsers.mockRejectedValue({
        data: { message: "Error fetching users" },
      });

      await act(async () => {
        render(<App />);
      });

      const errorMessage = screen.getByText(/Error fetching users/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe("success state", () => {
    describe("without data", () => {
      test("renders empty message", async () => {
        fetchUsers.mockResolvedValue({ data: [] });

        await act(async () => {
          render(<App />);
        });

        const emptyMessage = screen.getByText(/users list is empty/i);
        expect(emptyMessage).toBeInTheDocument();
      });
    });

    describe("with data", () => {
      test("renders list", async () => {
        fetchUsers.mockResolvedValue({
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
        });

        await act(async () => {
          render(<App />);
        });

        const listItem = screen.getByText(/Leanne Graham/i);
        expect(listItem).toBeInTheDocument();
      });
    });
  });
});
