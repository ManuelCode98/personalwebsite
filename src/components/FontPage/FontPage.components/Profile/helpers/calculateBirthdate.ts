

interface Birthdate {
  day: number,
  month: number,
  year: number 
}

const returnAge = ( birthdate:Birthdate )=>{ 

  const date:Date = new Date();
  const dateNow = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  }

  
  if( birthdate.day < 1 || birthdate.day > 31 ){

    console.log('Error verifica el dia de nacimiento que enviaste...')
    return
  } 
  if( birthdate.month < 1 || birthdate.month > 12 ){

    console.log('Error verifica el mes de nacimiento que enviaste...')
    return
  } 
  if( birthdate.year < ( dateNow.year - 125 ) || birthdate.year > ( dateNow.year - 18 ) ){

    console.log('Error verifica el año de nacimiento que enviaste...')
    return
  } 
 
  let result = dateNow.year - birthdate.year

  birthdate.month < dateNow.month && ( result = result )
  birthdate.month > dateNow.month && ( result = result - 1 );
  if( dateNow.month === birthdate.month ){
    birthdate.day <= dateNow.day && ( result = dateNow.year - birthdate.year )  
    birthdate.day > dateNow.day && ( result = (dateNow.year - birthdate.year) - 1); 
  } 
    

  return result;

};

export {
  returnAge
}







