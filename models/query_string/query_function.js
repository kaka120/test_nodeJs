const conn = require('../connection/conn');
 const query_function =  (query_string) => {
  return new Promise( ( resolve, reject ) => {
    conn.query(query_string, function (err, result) {
      if ( err )
      return reject( err );
      setTimeout(() => {
        resolve( (result.affectedRows? result.affectedRows:result[0].count) );
      }, 2000);
    });
  } );
}
module.exports = query_function;
/* A common function for insert, select, delete, update */