module.exports = {
  'SECRET_KEY': process.env.SECRET_KEY || literalSecretKey(),
  'MONGO_URL': process.env.MLAB_DB_ADDRESS || localMongo()
}

/**
 * Warns the user to use an environment variable for the SECRET_KEY
 * @return {String} literal default SECRET_KEY
 */
function literalSecretKey(){
  console.log('\nUsing literal SECRET_KEY from config file\nYou should consider using a environment variable instead\n');
  return '12345-12345-12345-12345';
}

/**
 * Warns the user to set up an environment variable to use a different database
 * @return {String} literal default localhost address for mongodb
 */
function localMongo(){
  console.log('\nUsing literal MONGO_URL from config file\nUse an environment variable if you want to use something other than a local database\n');
  return 'mongodb://localhost:27017/conFusion';
}
