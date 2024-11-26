import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Calculator, { operations } from "./Calculator";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO user user-event from testing-library instead of fireEvent
// TODO Make it so the calculator works after the first arithmetic operation

describe("Calculator", () => {
  it("Should render", () => {
    render(<Calculator />);
  });

  it("Should render the title correctly", () => {
    render(<Calculator />);

    screen.getByText(`My Calculator`);
  });

  it("Should render numbers", () => {
    render(<Calculator />);

    numbers.forEach((number: number) => {
      screen.getByText(number);
    });
  });

  it("Should render 4 rows", () => {
    render(<Calculator />);

    // my solution:
    // numbersRows.forEach((row: string[], index) => {
    //   screen.getByRole(`row-${index + 1}`)
    // })

    // better solution IMO
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(4);
  });

  it("Should render arithmetic operations and equals sign", () => {
    render(<Calculator />);

    operations.forEach((operation: string) => screen.getByText(operation));
  });

  it("Should render an input field", () => {
    render(<Calculator />);
    // other options
    // screen.getByRole('textbox')
    // if there is a form you can lookup the textbox by id
    screen.getByDisplayValue("");
  });

  it("Should change the input field value to 0 when pressing the 0 button", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText("0"));
    screen.getByDisplayValue("0");

    // other way of doing it
    // const input = screen.getByRole('textbox')
    // expect(input.value).toBe('1')
  });

  it("Should change the input field value to 1+2 when pressing first the button 1 then + button then 1 button again", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("2"));
    screen.getByDisplayValue("1+2");
  });

  it("Should make the calculation after pressing the = button and replace the input with the result of the operation", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText("6"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("9"));
    screen.getByDisplayValue("6+9");
    fireEvent.click(screen.getByText("="));
    screen.getByDisplayValue("15");
  });
});
