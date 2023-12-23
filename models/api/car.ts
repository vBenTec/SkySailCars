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

export interface Image {
    url: string
}

export interface SpecificCar extends Pick<Car, 'name' | 'type' | 'gasolineLiter' | 'kindOfTransition' | 'people' | 'id' | 'img'> {
    images: Image[],
    description: string,
}
