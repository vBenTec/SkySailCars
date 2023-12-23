import type {Car} from "@/models/api/car.ts";

export const useCarHelper = () => {
    const getFeatureList = (car: Car, useIcon = true) => {
        // no reactivity needed if translation would be required computed property
        return useIcon? [
            {value: car.gasolineLiter + 'L', icon: 'gas-station'},
            {value: car.kindOfTransition, icon: 'steering-wheel'},
            {value: car.people + ' People', icon: 'profile-2-user'},
        ]: [
            {value: car.type, label: 'TypeCar'},
            {value: car.people + ' People', label: 'People'},
            {value: car.gasolineLiter + 'L', label: 'Gasoline'},
            {value: car.kindOfTransition, label: 'Steering'},
        ]
    }

    return {getFeatureList}
}