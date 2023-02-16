function drawLine(canvas, args) {
    canvas.require(4, "expected x1,y1,x2 and y2 arguments error", args);

    let x1 = parseInt(args[0]);
    let y1 = parseInt(args[1]);
    let x2 = parseInt(args[2]);
    let y2 = parseInt(args[3]);

    canvas.validate(x1, y1, x2, y2);

    if (y1 === y2) {
        drawHorizontalLine(canvas, x1, x2, y1);
    } else if (x1 === x2) {
        drawVerticalLine(canvas, x1, y1, y2);
    } else {
        throw new Error("only horizontal and vertical lines are supported error");
    }
}

function drawHorizontalLine(canvas, x1, x2, y) {
    if (x2 < x1) {
        [x1, x2] = [x2, x1];
    }

    for(let x = x1; x <= x2; ++x) {
        canvas.plot(x, y, 'x');
    }
}

function drawVerticalLine(canvas, x, y1, y2) {
    if (y2 < y1) {
        [y1, y2] = [y2, y1];
    }

    for(let y = y1; y <= y2; ++y) {
        canvas.plot(x, y, 'x');
    }
}

export { drawLine }