export interface Car {
    name: string;
    type: string;
    gasolineLiter: number;
    kindOfTransition: string;
    people: number;
    pricePerDay: number;
    id: number;
    img: string;
    liked?: boolean;
}

export interface SpecificCar extends Pick<Car, 'name' | 'type' | 'gasolineLiter' | 'kindOfTransition' | 'people' | 'id' | 'img'> {
    images: { url: string }[],
    description: string,
}