import moment from "moment";

const timeDiference = (date) => {
  let time = moment(new Date()).diff(date, "days");
  let textTime;
  if (time === 0) {
    let hrs = moment(new Date()).diff(date, "hour");
    if (hrs === 0) {
      let min = moment(new Date()).diff(date, "minute");
      if (min === 0) {
        let second = moment(new Date()).diff(date, "second");
        textTime = `${second} ${second === 1 ? "segundo" : "segundos"}`;
      } else {
        textTime = `${min} ${min === 1 ? "minuto" : "minutos"}`;
      }
    } else {
      textTime = `${hrs} ${hrs === 1 ? "hora" : "horas"}`;
    }
  } else {
    textTime = `${time} ${time === 1 ? "día" : "días"}`;
  }

  return textTime;
};

export default timeDiference;
