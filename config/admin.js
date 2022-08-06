module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9ddca39aca412f60d3598a4e286cf98f'),
  },
});
