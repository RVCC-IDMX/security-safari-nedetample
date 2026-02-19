import { VITE_API_KEY } from "./config.js";

// VULNERABILITY: innerHTML with user input
function displayMessage(userInput) {
  document.getElementById("output").textContent = userInput;
}

// Safe math-only parser to avoid code execution.
function calculate(expression) {
  const tokens = [];
  const input = expression.trim();
  let i = 0;

  while (i < input.length) {
    const ch = input[i];
    if (ch === " " || ch === "\t" || ch === "\n") {
      i += 1;
      continue;
    }
    if ((ch >= "0" && ch <= "9") || ch === ".") {
      let start = i;
      let hasDigit = false;
      while (i < input.length) {
        const c = input[i];
        if (c >= "0" && c <= "9") {
          hasDigit = true;
          i += 1;
          continue;
        }
        if (c === ".") {
          i += 1;
          continue;
        }
        break;
      }
      if (!hasDigit) {
        throw new Error("Invalid number");
      }
      tokens.push({ type: "number", value: Number(input.slice(start, i)) });
      continue;
    }
    if (ch === "+" || ch === "-" || ch === "*" || ch === "/") {
      tokens.push({ type: "op", value: ch });
      i += 1;
      continue;
    }
    if (ch === "(" || ch === ")") {
      tokens.push({ type: "paren", value: ch });
      i += 1;
      continue;
    }
    throw new Error("Invalid character");
  }

  let pos = 0;

  function peek() {
    return tokens[pos] || null;
  }

  function consume() {
    const token = tokens[pos];
    pos += 1;
    return token;
  }

  function parseExpression() {
    let value = parseTerm();
    while (true) {
      const token = peek();
      if (!token || token.type !== "op" || (token.value !== "+" && token.value !== "-")) {
        break;
      }
      consume();
      const rhs = parseTerm();
      value = token.value === "+" ? value + rhs : value - rhs;
    }
    return value;
  }

  function parseTerm() {
    let value = parseFactor();
    while (true) {
      const token = peek();
      if (!token || token.type !== "op" || (token.value !== "*" && token.value !== "/")) {
        break;
      }
      consume();
      const rhs = parseFactor();
      value = token.value === "*" ? value * rhs : value / rhs;
    }
    return value;
  }

  function parseFactor() {
    const token = peek();
    if (!token) {
      throw new Error("Unexpected end of expression");
    }
    if (token.type === "op" && (token.value === "+" || token.value === "-")) {
      consume();
      const value = parseFactor();
      return token.value === "-" ? -value : value;
    }
    if (token.type === "number") {
      consume();
      return token.value;
    }
    if (token.type === "paren" && token.value === "(") {
      consume();
      const value = parseExpression();
      const close = consume();
      if (!close || close.type !== "paren" || close.value !== ")") {
        throw new Error("Missing closing parenthesis");
      }
      return value;
    }
    throw new Error("Unexpected token");
  }

  const result = parseExpression();
  if (pos !== tokens.length) {
    throw new Error("Unexpected input");
  }
  return result;
}

// Wire up the poll form
document.getElementById("poll-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const response = document.getElementById("response").value;
  displayMessage(`You said: ${response}`);
});

document.getElementById("calc-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const expr = document.getElementById("expression").value;
  try {
    const result = calculate(expr);
    document.getElementById("calc-result").textContent = result;
  } catch (error) {
    document.getElementById("calc-result").textContent = "Invalid expression";
  }
});
