const subtringtext = (text, number) => {
  if (text) {
    let long = text.length;

    if (long > number) {
      return `${text.substring(0, number)} ...`;
    } else {
      return text;
    }
  } else {
    return text;
  }
};

export default subtringtext;
