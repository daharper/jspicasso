function help() {
    return `
<table border = "1" cellpadding="10">
<tbody>
    <tr>
        <td>C w h</td>
        <td>Creates a new canvas of width w and height h</td>
    </tr>
    <tr>
        <td>L x1 y1 x2 y2</td>
        <td>Creates a new line from (x1,y1) to (x2,y2)</td>
    </tr>
    <tr>
        <td>R x1 y1 x2 y2</td>
        <td>Creates a new rectangle from (x1,y1) to (x2,y2)</td>
    </tr>
    <tr>
        <td>B x y c</td>
        <td>Fills the entire area connected to (x,y) with "colour" c</td>
    </tr>
    <tr>
        <td>Q</td>
        <td>Quits the program</td>
    </tr>
</tbody>
</table>`;
}

export { help }