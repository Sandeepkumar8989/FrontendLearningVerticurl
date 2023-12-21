class SI {
    constructor(principal, ROI, time) {
        this.principal = principal;
        this.ROI = ROI;
        this.time = time;
    }

    calculate() {
        return (this.principal * this.ROI * this.time) / 100;
    }

    get getROI() {
        return this.ROI;
    }

    set setROI(ROI) {
        this.ROI = ROI;
    }

    get getTime() {
        return this.time;
    }

    set setTime(time) {
        this.time = time;
    }
}

const s = new SI(2000, 8, 5);
console.log("Simple Interest 1:", s.calculate());

s.setTime=3;
s.setROI=3;
console.log("Simple Interest 2:", s.calculate());
