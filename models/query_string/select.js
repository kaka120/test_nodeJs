const conn = require('../connection/conn');
const select =  (query_string_select) => {
    return new Promise( ( resolve, reject ) => {
      conn.query(query_string_select, function (err, result) {
        if ( err )
        return reject( err );
        setTimeout(() => {
          resolve( result );
        }, 2000);
      });
    } );
  }
module.exports = select;


