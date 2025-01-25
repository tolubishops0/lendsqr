import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import SignIn from "@/app/components/SignIn/SignIn";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";
// import mockrouter

// jest.mock("next/navigation", () => ({
//   useRouter() {
//     return {
//       prefetch: () => null,
//     };
//   },
// }));

jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
  useRouter: jest.fn().mockImplementation(() => ({
    route: "/",
    pathname: "",
    query: "",
    asPath: "",
  })),
  usePathname: jest.fn().mockReturnValue("/"),
}));

describe("SignIn component", () => {
  it("renders 2 input fields and a 'LOG IN' button on the screen", () => {
    render(<SignIn />);

    const inputFields = screen.getAllByRole("textbox");
    const loginButton = screen.getByRole("button", { name: /log in/i });

    expect(inputFields.length).toBe(2);
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveClass("button-signup");
  });

  it("allows user to log in and navigates to the Dashboard", async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock)({ push: mockPush });
    render(<SignIn />);

    userEvent.type(screen.getByPlaceholderText(/email/i), "janedoe@gmail.com");
    userEvent.type(screen.getByPlaceholderText(/password/i), "password");

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/dashboard");
    });
  });
});
