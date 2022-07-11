export class Cylinder {
    public static getVolume(radius: number, height: number): number {
        let baseArea = this.getBase(radius);
        let perimeter = this.getParameter(radius);
        let volume: number = perimeter * height + 2 * baseArea;
        return volume;
    }

    private static getParameter(radius: number) {
        let perimeter: number = 2 * Math.PI * radius;
        return perimeter;
    }

    private static getBase(radius: number) {
        let baseArea: number = Math.PI * radius * radius;
        return baseArea;
    }

}