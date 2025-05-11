import { test, describe, expect } from "bun:test";
import { Button } from "./Button";
import { screen, render } from "@testing-library/react";

describe("Button", () => {
  test("renders label", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
