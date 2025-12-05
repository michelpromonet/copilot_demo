# GitHub Copilot Demo Repository

This repository contains various demonstrations and examples showcasing how to use GitHub Copilot for different programming tasks and scenarios.

## Contents

### Demonstration Files

1. **1-i18n.json** - Internationalization (i18n) translation file
   - Example JSON file with English and French translations
   - Demonstrates working with translation files using Copilot
   - See [DEMO.md](DEMO.md) for usage examples

2. **2-example.svg** - SVG file example
   - Sample SVG file for demonstration purposes
   - Can be used with Copilot to group characters and modify SVG elements
   - See [DEMO.md](DEMO.md) for usage examples

3. **3-method.ts** - TypeScript method example
   - Empty TypeScript file for code completion demonstrations
   - Shows how to use Copilot for code generation (e.g., Fibonacci implementation)
   - See [DEMO.md](DEMO.md) for usage examples

4. **4-sae-track-power-section.ts** - TypeScript animator class
   - Complete TypeScript class implementing an SVG animator
   - Demonstrates Copilot's ability to explain code and add documentation
   - See [DEMO.md](DEMO.md) for usage examples

5. **5-calculator-demo.py** - Simple Calculator Demo (NEW!)
   - Interactive Python calculator demonstrating basic programming concepts
   - Features:
     - Basic arithmetic operations (+, -, *, /)
     - Error handling (division by zero, invalid input)
     - User input validation
     - Clean, well-documented code
   - **Usage**: `python3 5-calculator-demo.py`

### Spring Boot Application

The repository includes a complete **Spring Boot 3 CRUD application** with:
- Java 21 (configured, requires appropriate JDK)
- H2 in-memory database
- REST API for person management
- HTML/CSS/JavaScript web interface
- Full CRUD operations (Create, Read, Update, Delete)

**Directory structure**:
```
src/main/java/com/example/demo/
├── DemoApplication.java          # Main Spring Boot application
├── controller/
│   └── PersonController.java     # REST API endpoints
├── entity/
│   └── Person.java               # JPA entity
├── repository/
│   └── PersonRepository.java     # Data repository
└── service/
    └── PersonService.java        # Business logic

src/main/resources/
└── static/
    └── index.html                # Web UI for CRUD operations
```

**Running the application**:
```bash
mvn spring-boot:run
```

Then open your browser to `http://localhost:8080` to access the web interface.

## Documentation

- **[DEMO.md](DEMO.md)** - Detailed demonstrations of various GitHub Copilot features
- **[LINKS.md](LINKS.md)** - Useful links and resources for GitHub Copilot

## Getting Started

### Prerequisites

- **For Python demos**: Python 3.x
- **For TypeScript demos**: Node.js and TypeScript (`npm install -g typescript tsx`)
- **For Java/Spring Boot**: JDK 21, Maven

### Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/michelpromonet/copilot_demo.git
   cd copilot_demo
   ```

2. Try the calculator demo:
   ```bash
   python3 5-calculator-demo.py
   ```

3. Explore other demos as documented in [DEMO.md](DEMO.md)

## Using This Repository

This repository is designed to help you:
- Learn how to use GitHub Copilot effectively
- See practical examples of Copilot in different scenarios
- Understand best practices for prompting Copilot
- Experiment with different Copilot modes (Ask, Edit, Agent)

## Contributing

Feel free to add more demonstrations and examples to this repository!

## License

This is a demonstration repository for educational purposes.
