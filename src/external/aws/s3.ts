import Amplify, { Storage } from 'aws-amplify'
import { AWS_S3_BUCKET_NAME } from 'src/utils/env'

Amplify.configure({
  WSS3: {
    bucket: AWS_S3_BUCKET_NAME,
    region: 'ap-northeast-1', //OPTIONAL -  Amazon service region
  }
})

export const uploadImg = async (userId: string, fileName: string, image: Blob, contentType: string) => {
  const filePath = `${userId}/${fileName}`
  await Storage.put(filePath, image, { contentType })
  return `https://${AWS_S3_BUCKET_NAME}.s3-ap-northeast-1.amazonaws.com/${filePath}`
}
