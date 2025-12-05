#!/usr/bin/env python3
"""
Simple Calculator Demo
======================

This demo showcases a basic calculator implementation in Python.
It demonstrates:
- Basic arithmetic operations (addition, subtraction, multiplication, division)
- User input handling
- Error handling (division by zero, invalid input)
- Function organization
- Interactive command-line interface

Usage:
    python 5-calculator-demo.py

Features:
- Supports +, -, *, / operations
- Handles invalid inputs gracefully
- Prevents division by zero
- Clean, interactive interface
"""


def add(a, b):
    """Add two numbers and return the result."""
    return a + b


def subtract(a, b):
    """Subtract b from a and return the result."""
    return a - b


def multiply(a, b):
    """Multiply two numbers and return the result."""
    return a * b


def divide(a, b):
    """
    Divide a by b and return the result.
    
    Args:
        a (float): The dividend
        b (float): The divisor
        
    Returns:
        float: The result of division
        
    Raises:
        ValueError: If b is zero
    """
    if b == 0:
        raise ValueError("Cannot divide by zero!")
    return a / b


def get_number(prompt):
    """
    Prompt user for a number and validate input.
    
    Args:
        prompt (str): The prompt message to display
        
    Returns:
        float: The validated number entered by user
    """
    while True:
        try:
            value = float(input(prompt))
            return value
        except ValueError:
            print("Invalid input! Please enter a valid number.")


def display_menu():
    """Display the calculator menu."""
    print("\n" + "=" * 40)
    print("         SIMPLE CALCULATOR")
    print("=" * 40)
    print("Select an operation:")
    print("  1. Add (+)")
    print("  2. Subtract (-)")
    print("  3. Multiply (*)")
    print("  4. Divide (/)")
    print("  5. Exit")
    print("=" * 40)


def calculate(operation, num1, num2):
    """
    Perform the selected calculation.
    
    Args:
        operation (str): The operation to perform (1-4)
        num1 (float): First number
        num2 (float): Second number
        
    Returns:
        tuple: (result, operator_symbol) or (None, None) if invalid
    """
    operations = {
        '1': (add, '+'),
        '2': (subtract, '-'),
        '3': (multiply, '*'),
        '4': (divide, '/')
    }
    
    if operation in operations:
        func, symbol = operations[operation]
        try:
            result = func(num1, num2)
            return result, symbol
        except ValueError as e:
            print(f"\nError: {e}")
            return None, None
    else:
        return None, None


def main():
    """Main calculator loop."""
    print("\nWelcome to the Simple Calculator Demo!")
    print("This demonstrates basic Python programming concepts.")
    
    while True:
        display_menu()
        
        choice = input("\nEnter your choice (1-5): ").strip()
        
        if choice == '5':
            print("\nThank you for using the calculator. Goodbye!")
            break
        
        if choice not in ['1', '2', '3', '4']:
            print("\nInvalid choice! Please select 1-5.")
            continue
        
        # Get numbers from user
        num1 = get_number("Enter the first number: ")
        num2 = get_number("Enter the second number: ")
        
        # Perform calculation
        result, operator = calculate(choice, num1, num2)
        
        if result is not None:
            print(f"\nResult: {num1} {operator} {num2} = {result}")
        
        # Ask if user wants to continue
        continue_calc = input("\nPerform another calculation? (y/n): ").strip().lower()
        if continue_calc != 'y':
            print("\nThank you for using the calculator. Goodbye!")
            break


if __name__ == "__main__":
    main()
