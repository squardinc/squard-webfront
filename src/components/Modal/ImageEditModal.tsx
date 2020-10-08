import * as React from 'react'
import { ModalProps, asModal } from './asModal'
import { DefaultModalContainer } from './ModalContainer'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { RoundButton, RoundFileUploadButton } from '../Button/DefaultButton'

type ImageEditComponentProps = ModalProps & {
  setImg: React.Dispatch<React.SetStateAction<Blob | undefined>>
  editingImg: string
  onSelectFile: (e: React.ChangeEvent<HTMLInputElement>) => void
  fileName: string
  contentType: 'image/jpeg'
  initialCrop?: ReactCrop.Crop
  setPreviewUrl: Function
}

const ImageEditComponent: React.FC<ImageEditComponentProps> = ({
  closeModal,
  setImg,
  editingImg,
  onSelectFile,
  fileName,
  contentType,
  initialCrop = {},
  setPreviewUrl,
}) => {
  const imgRef = React.useRef<HTMLImageElement>()
  const [crop, setCrop] = React.useState<ReactCrop.Crop>({ unit: '%', ...initialCrop })
  const [currentPreviewUrl, setCurrentPreviewUrl] = React.useState('')
  const onLoad = React.useCallback(img => {
    imgRef.current = img
  }, [])

  const createCropPreview = async (image: HTMLImageElement, crop: ReactCrop.Crop, fileName: string) => {
    const canvas = document.createElement('canvas')
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    canvas.width = crop.width || 0
    canvas.height = crop.height || 0
    const ctx = canvas.getContext('2d')
    if (!ctx)
      return
    ctx.drawImage(image,
      (crop.x || 0) * scaleX,
      (crop.y || 0) * scaleY,
      (crop.width || 0) * scaleX,
      (crop.height || 0) * scaleY,
      0, 0,
      (crop.width || 0),
      (crop.height || 0)
    )
    return new Promise((resolve, reject) => {
      canvas.toBlob(b => {
        if (!b) {
          reject(new Error('Canvas is empty'))
          return
        }
        b.name = fileName
        if (typeof window !== 'undefined') {
          window.URL.revokeObjectURL(currentPreviewUrl)
          setCurrentPreviewUrl(window.URL.createObjectURL(b))
          setImg(b)
        }
      }, contentType)
    })
  }

  const makeClientCrop = async (crop: ReactCrop.Crop) => {
    if (imgRef.current && crop.width && crop.height) {
      createCropPreview(imgRef.current, crop, fileName)
    }
  }

  return (
    <DefaultModalContainer closeModal={(e) => {
      if (typeof window !== 'undefined') {
        window.URL.revokeObjectURL(currentPreviewUrl)
      }
      closeModal(e)
    }
    }>
      <ReactCrop src={editingImg} onImageLoaded={onLoad} crop={crop} onChange={setCrop} onComplete={makeClientCrop} />
      <div className="flex flex-col items-center justify-center">
        {editingImg ? <RoundButton text='保存' onClick={(e) => {
          setPreviewUrl(currentPreviewUrl)
          closeModal(e)
        }} className='text-white bg-blue-700' /> : ''}
        <RoundFileUploadButton className='text-black bg-white' text='画像を変更' onChange={onSelectFile} />
      </div>
    </DefaultModalContainer >
  )
}

export const ImageEditModal = asModal(ImageEditComponent)