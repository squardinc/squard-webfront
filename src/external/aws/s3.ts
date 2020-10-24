import Amplify, { Storage } from 'aws-amplify'
import { AWS_S3_BUCKET_NAME } from 'src/utils/env'
import { currentIdentityId } from './cognito'

Amplify.configure({
  Storage: {
    AWSS3: {
      bucket: AWS_S3_BUCKET_NAME,
      region: 'ap-northeast-1',
    },
  },
})

export const uploadImg = async (fileName: string, image: Blob, contentType: string) => {
  const identityId = await currentIdentityId()
  const filePath = `${identityId}/${fileName}`
  await Storage.put(filePath, new File([image], 'img.jpeg'), { contentType })
  return `https://${AWS_S3_BUCKET_NAME}.s3-ap-northeast-1.amazonaws.com/public/${filePath}`
}
