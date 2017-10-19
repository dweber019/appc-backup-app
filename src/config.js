var Environment = require('./environment');

exports.environments = function environments() {
  var mariadbUid = process.env['MARIADB_UID'];
  var mongodbUid = process.env['MONGODB_UID'];
  var environments = [];

  var env = new Environment("databases");
  if(mariadbUid) {
    env.addServiceForBackup("mariadb_core", mariadbUid);
    console.log("mariadb uid: " + mariadbUid);
  }
  if(mongodbUid) {
    env.addServiceForBackup("mongodb_core", mongodbUid);
    console.log("mongodb uid: " + mongodbUid);
  }
  environments.push(env);

  return environments;
}
