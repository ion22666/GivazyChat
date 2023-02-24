import * as RTL from "@testing-library/react";
import React from "react";

import LoginPage from "../../pages/login";
import createMockRouter from "../.tools/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("LoginPage Component", () => {
    let LoginDocument: RTL.RenderResult<typeof RTL.queries, HTMLElement, HTMLElement>;
    const router = createMockRouter({ pathname: "/login" });
    let mockFetch: jest.Mock<any, any, any>;

    beforeEach(() => {
        LoginDocument = RTL.render(
            <RouterContext.Provider value={router}>
                <LoginPage />
            </RouterContext.Provider>
        );
    });

    beforeAll(() => {
        // mock the fetch function
        mockFetch = jest.fn();
        global.fetch = mockFetch;
    });
    beforeEach(() => {
        mockFetch.mockClear();
    });

    it("should render without crashing", () => {
        expect(LoginDocument.container).toBeInTheDocument();
    });

    describe("'Login' button tests", () => {
        let loginButton: HTMLElement;

        beforeEach(() => {
            loginButton = LoginDocument.getByRole("button", { name: /login/i });
        });

        it("It exists and contains the 'login' text", () => {
            expect(loginButton).toBeInTheDocument();
        });

        describe("Correctly handles and validate user's input", () => {});

        describe("'fetch()' calls", () => {
            let emailInput: HTMLElement;
            let passwordInput: HTMLElement;

            beforeEach(() => {
                emailInput = LoginDocument.getByLabelText(/email/i);
                passwordInput = LoginDocument.getByLabelText(/password/i);
                RTL.fireEvent.change(emailInput, { target: { value: "valid_email@email.com" } });
                RTL.fireEvent.click(passwordInput, { target: { value: "valid_password" } });
            });

            let fetch_was_called: boolean;

            it("was called on click (only once)", () => {
                expect(mockFetch).toHaveBeenCalledTimes(1);
                fetch_was_called = true;
            });

            (fetch_was_called ? describe : describe.skip)("correctly calling the function", () => {
                it("Was called with the correct path", () => {
                    expect(mockFetch).toHaveBeenCalledWith("/api/login");
                });

                it("Was called with the correct method", () => {
                    expect(mockFetch).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ method: expect.stringMatching(/post/i) }));
                });

                it("Was called with a non empty body", () => {
                    RTL.fireEvent.click(loginButton);
                    expect(mockFetch).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ body: expect.stringMatching(/./) }));
                });
            });
        });
    });

    describe("'Register' redirect button tests", () => {
        it("It exists and and contains the 'register' text", () => {
            const registerButton = LoginDocument.getByRole("button", { name: /register/i });
            expect(registerButton).toBeInTheDocument();
        });
        it(`"router.push('/register')" is on click`, async () => {
            const registerButton = LoginDocument.getByText(/register/i);

            RTL.fireEvent.click(registerButton);

            let pushMock = router.push;

            expect(pushMock).toBeCalledTimes(1);
            expect(pushMock).toBeCalledWith("/register");
        });
    });
});
