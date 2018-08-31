export class TemperatureData {
    id: number;
    cpu: number;
    sensor: number;
    room: number;
    timestamp: number;

    constructor(cpu: number, sensor: number, room: number, timestamp: number) {
        this.cpu = Math.round( cpu * 10 ) / 10;
        this.sensor = Math.round( sensor * 10 ) / 10;
        this.room = Math.round( room * 10 ) / 10;
        this.timestamp = timestamp;
    }
}
