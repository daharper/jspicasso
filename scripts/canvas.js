function createCanvas(args) {
    if (args.length !== 2) {
        throw new Error("expected width and height arguments error");
    }

    const width = parseInt(args[0]);
    const height = parseInt(args[1]);

    if (isNaN(width) || isNaN(height)) {
        throw new Error("invalid arguments error");
    }

    if (width < 4 || width > 40) {
        throw new Error("width must be in the range 4..40");
    }

    if (height < 4 || height > 20) {
        throw new Error("height must be in the ranger 4..20");
    }

    let pixels = new Array(height);

    for(let y = 0; y < height; ++y) {
        pixels[y] = new Array(width);
        for(let x = 0; x < width; ++x) {
            pixels[y][x] = ' ';
        }
    }

    return {
        width: width,
        height: height,
        pixels: pixels,
        getPen: function(x, y) {
            return pixels[y-1][x-1];
        },
        plot: function(x, y, pen) {
            pixels[y-1][x-1] = pen;
        },
        validate: function(x1, y1, x2 = null, y2 = null) {
            this.validateX(x1);
            this.validateY(y1);

            if (x2 !== null) {
                this.validateX(x2);
            }

            if (y2 !== null) {
                this.validateX(y2);
            }
        },
        validateX: function(x) {
            if (isNaN(x)) {
                throw new Error("invalid x argument error");
            }

            if (x < 1 || x > width) {
                throw new Error("x must be in the range 1.." + width);
            }
        },
        validateY: function(y) {
            if (isNaN(y)) {
                throw new Error("invalid y argument error");
            }

            if (y < 1 || y > height) {
                throw new Error("y must be in the range 1.." + height);
            }
        },
        require:function(count, msg, args) {
            if (args.length !== count) {
                throw new Error(msg);
            }
        },
        draw: function() {
            let horizontalBorder = "-".repeat(width + 2) + "<br>";
            let output = horizontalBorder;

            for(let y = 0; y < height; ++y) {
                output += "|";
                for (let x = 0; x < width; ++x) {
                    let pixel = pixels[y][x];

                    if (pixel === " ") {
                        pixel = "&nbsp;";
                    }

                    output += pixel;
                }
                output += "|<br>";
            }

            output += horizontalBorder;
            return output;
        }
    };
}

export { createCanvas }