/// <reference types="jest" />

import { render, screen } from "@testing-library/react";

import HomePage from "../../pages";

describe("HomePage Component", () => {
    it("should render without crashing", () => {
        const { container } = render(<HomePage />);
        expect(container).toBeInTheDocument();
    });
});
