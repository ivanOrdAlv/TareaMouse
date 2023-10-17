function createGrid() {
    const rows = parseInt(document.getElementById("rows").value);
    const cols = parseInt(document.getElementById("cols").value);
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = "";

    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for (let i = 0; i < rows * cols; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        gridItem.addEventListener("mouseover", () => {
            gridItem.style.backgroundColor = getRandomColor();
            setTimeout(() => {
                gridItem.style.backgroundColor = "#fff";
            }, 1000);
        });

        gridContainer.appendChild(gridItem);
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}