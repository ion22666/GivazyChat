import * as RTL from "@testing-library/react";
import React from "react";

import RegisterPage from "../../pages/register";
import createMockRouter from "../.tools/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("RegisterPage Component", () => {
    let RegisterDocument: RTL.RenderResult<typeof RTL.queries, HTMLElement, HTMLElement>;
    const router = createMockRouter({ pathname: "/register" });

    beforeEach(() => {
        RegisterDocument = RTL.render(
            <RouterContext.Provider value={router}>
                <RegisterPage />
            </RouterContext.Provider>
        );
    });

    it("should render without crashing", () => {
        expect(RegisterDocument.container).toBeInTheDocument();
    });
});
