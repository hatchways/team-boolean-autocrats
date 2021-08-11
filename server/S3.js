require('dotenv').config()
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');


const bucketName = process.env.AWS_BUCKET_NAME
const bucketRegion = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
  bucketRegion,
  accessKeyId,
  secretAccessKey
})

//Uploads file to S3
function uploadToS3(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename
  }

  return s3.upload(uploadParams).promise();
}
exports.uploadToS3 = uploadToS3;

//Donwload file from S3
function downloadFromS3(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName
  }

  return s3.getObject(downloadParams).createReadStream();
}

exports.downloadFromS3 = downloadFromS3;