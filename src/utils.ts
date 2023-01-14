import Jimp from "jimp";

export type Color = any

export class Image {
    private image?: Jimp;

    public width: number = -1;
    public height: number = -1;

    public async load(path: string): Promise<void> {
        this.image = await Jimp.read(path);
        this.width = this.image.bitmap.width;
        this.height = this.image.bitmap.height;
    }

    public getColor(x: number, y: number): Color {
        return this.image!.getPixelColor(x, y);
    }

    public setColor(x: number, y: number, color: Color): void {
        this.image!.setPixelColor(color, x, y);
    }

    public save(path: string): void {
        this.image!.write(path)
    }
}
