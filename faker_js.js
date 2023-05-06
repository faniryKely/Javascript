import {faker} from "@faker-js/faker" ;
import * as fs from 'fs' ;

const file = fs.createWriteStream('group.sql')
let string = ""
let id = faker.datatype.uuid();
let ref = ""; 
let creation_date_time = faker.date.past().toISOString()
   .replace("T" , " ") 
   .replace("Z" , " ") ;
for ( let i = 1; i <= 4 ; i++) {
      ref = "H" + i ;
      string += `insert into group values (${id} , ${ref}  , ${creation_date_time} )` ;
    
      if ( i ==  4 - 1 ) {
            string += ";" ;

      } else {
            string += ', \n' ;

      }
      file.write(string) ;
}
 
file.end();

