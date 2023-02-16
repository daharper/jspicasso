function drawRectangle(canvas, args, lineRenderer) {
    canvas.require(4, "expected x1,y1,x2 and y2 arguments error", args);

    let x1 = parseInt(args[0]);
    let y1 = parseInt(args[1]);
    let x2 = parseInt(args[2]);
    let y2 = parseInt(args[3]);

    canvas.validate(x1, y1, x2, y2);

    lineRenderer(canvas, [x1, y1, x2, y1]);
    lineRenderer(canvas, [x1, y2, x2, y2]);
    lineRenderer(canvas, [x1, y1, x1, y2]);
    lineRenderer(canvas, [x2, y1, x2, y2]);
}

export { drawRectangle }