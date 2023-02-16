import { createCanvas }  from "./scripts/canvas.js";
import { drawLine }      from "./scripts/line.js";
import { drawRectangle } from "./scripts/rectangle.js";
import { fill }          from "./scripts/fill.js";
import { help }          from "./scripts/help.js";

const consoleInput = document.querySelector(".console-input");
const historyContainer = document.querySelector(".console-history");

let canvas = null;

function addResult(inputAsString, output) {
    const inputLogElement = document.createElement("div");
    const outputLogElement = document.createElement("div");

    inputLogElement.classList.add("console-input-log");
    outputLogElement.classList.add("console-output-log");

    inputLogElement.textContent = `> ${inputAsString}`;
    outputLogElement.innerHTML = output;

    historyContainer.append(inputLogElement, outputLogElement);
}

consoleInput.addEventListener("keyup", e => {
    const code = consoleInput.value.trim();

    if (code.length === 0) return;
    if (e.key !== "Enter") return;

    try {
        let args = code.split(/\s+/);
        let command = args.shift().toLowerCase();
        let output = execute(command, args);
        addResult(code, output);
    } catch (err) {
        addResult(code, err);
    }

    consoleInput.value = "";
    historyContainer.scrollTop = historyContainer.scrollHeight;
});

function execute(command, args) {
    switch (command) {
        case "c":
            canvas = createCanvas(args);
            break;
        case "l":
            checkCanvas();
            drawLine(canvas, args);
            break;
        case "r":
            checkCanvas();
            drawRectangle(canvas, args, drawLine);
            break;
        case "b":
            checkCanvas();
            fill(canvas, args);
            break;
        case "q":
            window.location.href = "bye.html";
            return;
        case "?":
            return help();
        default:
            return "sorry, I don't understand.";
    }

    return canvas.draw();
}

function checkCanvas() {
    if (canvas === null) {
        throw new Error("please create a canvas first.");
    }
}