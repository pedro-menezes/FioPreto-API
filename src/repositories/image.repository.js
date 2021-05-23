const aws = require('aws-sdk');
const s3 = new aws.S3();

module.exports = {
  destroy: (id) => s3.deleteObject({ Bucket: 'fiopreto', Key: id }).promise(),
};
