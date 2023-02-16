function fill(canvas, args) {
    canvas.require(3, "expected x, y and pen arguments error", args);

    let x = parseInt(args[0]);
    let y = parseInt(args[1]);

    canvas.validate(x, y);

    let pen = args[2].charAt(0);
    let target = canvas.getPen(x, y);

    floodFill(canvas, x, y, pen, target)
}

function floodFill(canvas, x, y, pen, target) {
    let actual = canvas.getPen(x, y);
    if (actual !== target) return;

    canvas.plot(x, y, pen);

    if (x > 1) {
        floodFill(canvas, x - 1, y, pen, target);
    }

    if (x < canvas.width) {
        floodFill(canvas, x + 1, y, pen, target);
    }

    if (y > 1) {
        floodFill(canvas, x, y - 1, pen, target);
    }

    if (y < canvas.height) {
        floodFill(canvas, x, y + 1, pen, target);
    }
}

export { fill }