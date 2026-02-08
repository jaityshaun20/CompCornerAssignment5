import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import App from "../App";

describe("App cart persistence", () => {
  beforeEach(() => {
    // Clear previous mocks between tests
    vi.restoreAllMocks();

    // Make sure we start each test clean
    window.localStorage.clear();

    // Default localStorage behavior (can be overridden per test)
    vi.spyOn(window.localStorage.__proto__, "getItem").mockReturnValue(null);
    vi.spyOn(window.localStorage.__proto__, "setItem").mockImplementation(() => {});
  });

  test("loads cart from localStorage on startup", () => {
    // Start the app on the cart route so the item text is visible
    window.history.pushState({}, "Cart", "/cart");

    const savedCart = JSON.stringify([
      { id: 1, name: "Saved Item", price: 9.99 },
    ]);

    // IMPORTANT: this must be set BEFORE render, because useState initializer runs immediately
    window.localStorage.getItem.mockReturnValueOnce(savedCart);

    render(<App />);

    // Confirms it tried to read localStorage
    expect(window.localStorage.getItem).toHaveBeenCalledWith("cart");

    // Because we started on /cart, the CartPage should render the saved item
    expect(screen.getByText(/saved item/i)).toBeInTheDocument();
  });
});
