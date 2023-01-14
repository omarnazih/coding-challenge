import { floodFill } from "./flood-fill";
import { Image } from "./utils";

(async () => {
    const options = [
        [10, 10],
        [10, 50],
        [50, 50],
        [95, 50],
        [95, 95],
    ];

    for (const [x, y] of options) {
        const img = new Image();
        await img.load("input.png");
        floodFill(img, x, y, img.getColor(x, y), 0x000000FF);
        img.save(`output-${x}x${y}.png`);
    }
})();
