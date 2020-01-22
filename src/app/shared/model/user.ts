export interface User {
    id?: number;
    email: string;
    password: string;
    levelId: number;
    points: number;
    journeys: Array<number>;
}