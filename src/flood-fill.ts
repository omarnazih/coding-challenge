import { Color, Image } from "./utils";

export function floodFill(
    img: Image,
    x: number,
    y: number,
    targetColor: Color,
    replacementColor: Color
): void {


    // Change the selected pixel target color with the new color.
    img.setColor(x, y, replacementColor)

    // Get List of Valid neighbors to the current pixel we pointing at.
    let Neighbors = getNeighbors(img, x, y, targetColor, replacementColor)

    for (const Neighbor of Neighbors) {
        const ix = Neighbor[0]
        const iy = Neighbor[1]
        // recursive call
        floodFill(img, ix, iy, targetColor, replacementColor)
    }

}


// return a List of Valid neighbors to the current pixel we pointing at.
function getNeighbors(img: Image, x: number, y: number, targetColor: Color, replacementColor: Color) {

    // Get all possible neightbors from north, south, east, west of the current pixel.
    const possibleNeighbors = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1]
    ]

    // Only returning valid neighbors
    let validNeighbors : any[] = []

    // Loop around the list of possibleNeighbors
    for (const Neighbor of possibleNeighbors) {

        const ix = Neighbor[0]
        const iy = Neighbor[1]

        // if image cordinates is not out of boudries and it matches the target color then it is valid pixel to get replaced.
        if (isValidImgCordinates(img, ix, iy) && img.getColor(ix, iy) === targetColor) {
            validNeighbors.push(Neighbor)
        }
    }

    return validNeighbors;

}

// Check if image cordinates is valid
function isValidImgCordinates(img: Image, x: number, y: number) {
    if (x > img.width || y > img.height) {
        return false
    } else {
        return true
    }
}

