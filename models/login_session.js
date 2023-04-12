'use strict';
module.exports = (sequelize, DataTypes) => {
  const login_session = sequelize.define('login_session', {
    user_id: DataTypes.INTEGER,
    token: DataTypes.TEXT,
    token_expiry_time: DataTypes.BIGINT,
    created_at: DataTypes.BIGINT
  }, {});
  login_session.associate = function(models) {
    // associations can be defined here
  };
  return login_session;
};