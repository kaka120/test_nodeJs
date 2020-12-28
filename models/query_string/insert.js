const conn = require('../connection/conn');
//  const insert =  (query_string) => {
//   return new Promise( ( resolve, reject ) => {
//     conn.query(query_string, function (err, result) {
//       if ( err )
//       return reject( err );
//       setTimeout(() => {
//         resolve( result.affectedRows );
//       }, 2000);
//     });
//   } );
// }

 const insert =  (query_string) => {
  return new Promise( ( resolve, reject ) => {
    conn.query(query_string, function (err, result) {
      if ( err )
      return reject( err );
      setTimeout(() => {
        resolve( (result.affectedRows? result.affectedRows:result) );
      }, 2000);
    });
  } );
}
module.exports = insert;