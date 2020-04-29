const userMail = (mail) => {
  if(mail !== null && mail !== undefined && mail !== ''){
    let spliMail = mail.split("@");
    return spliMail[0];
  }else{
    return ''
  }

};

export default userMail;
