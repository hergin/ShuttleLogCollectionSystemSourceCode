export class InspectionLog {
    driver: string;
    loop: string;
    busNumber: string;
    timestamp: string;
    date: string;
    beginningHours: string;
    endingHours: string;
    startingMileage: string;
    endingMileage: string;
    preInspection: string;
    postInspection: string;
    preInspectionComment: string;
    postInspectionComment: string;
    id?:   number;
    constructor(
        driver: string,
        loop: string,
        busNumber: string,
        timestamp: string,
        date: string,
        beginningHours: string,
        endingHours: string,
        startingMileage: string,
        endingMileage: string,
        preInspection: string,
        postInspection: string,
        preInspectionComment: string,
        postInspectionComment: string,
        id?:   number) {}
}
