var board = document.getElementById("board");

var drawing = false;
var line;

function startDraw(e)
{
    drawing = true;

    line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");

    line.setAttribute("fill", "none");
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "2");

    line.setAttribute("points", e.offsetX + "," + e.offsetY);

    board.appendChild(line);
}

function drawLine(e)
{
    if(drawing == false) return;

    var oldPoints = line.getAttribute("points");

    var newPoint = e.offsetX + "," + e.offsetY;

    line.setAttribute("points", oldPoints + " " + newPoint);
}

function stopDraw()
{
    drawing = false;
}

function clearBox()
{
    board.innerHTML = "";
}
