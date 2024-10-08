export default class Countdown {
    constructor(futureDate) {
        this.futureDate = futureDate;
    }
    get _actualDate() {
        return new Date();  //Date() puxa data do momento
    }
    get _futureDate() {
        return new Date(this.futureDate);  //esta transformando a data informada como string em data
    }
    get _timeStampDiff() {
        return this._futureDate.getTime() - this._actualDate.getTime(); //para pegar times temp da data futura
    }
    get days() {                    //24h no dia * 60min em cada hora * 60s em cada minuto * 1000ms a cada segundo 
        return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000)); //(para calcular milissegundos em um dia)
    }
    get hours() {                  
        return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
    }
    get minutes() {                  
        return Math.floor(this._timeStampDiff / (60 * 1000));
    }
    get seconds() {                  
        return Math.floor(this._timeStampDiff / 1000);
    }
    get total() {
        const days = this.days;
        const hours = this.hours % 24;  //% modulo - ele dividi e da o restante
        const minutes = this.minutes % 60;
        const seconds = this.seconds % 60;
        return {
            days,
            hours,
            minutes,
            seconds
        }
    }
}