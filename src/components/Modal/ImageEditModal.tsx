import * as React from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { RoundButton, RoundFileUploadButton } from '../Button/DefaultButton'
import TextDisplay from '../TextDisplay/TextDisplay'
import { asModal, ModalProps } from './asModal'
import { DefaultModalContainer } from './ModalContainer'

type ImageEditComponentProps = ModalProps & {
  setImg: React.Dispatch<React.SetStateAction<Blob | undefined>>
  editingImg: string
  onSelectFile: (e: React.ChangeEvent<HTMLInputElement>) => void
  fileName: string
  displayWidth?: number
  contentType: 'image/jpeg'
  initialCrop?: ReactCrop.Crop
  setPreviewUrl: Function
}
const imageSize = (value: number = 0, scale: number = 0) => Math.floor(value * scale)
const ImageEditComponent: React.FC<ImageEditComponentProps> = ({
  closeModal,
  setImg,
  editingImg,
  onSelectFile,
  fileName,
  contentType,
  initialCrop = { aspect: 1 },
  displayWidth,
  setPreviewUrl,
}) => {
  const imgRef = React.useRef<HTMLImageElement>()
  const [crop, setCrop] = React.useState<ReactCrop.Crop>({
    unit: '%',
    x: 25,
    y: 25,
    width: 50,
    ...initialCrop,
  })
  const [scale, setScale] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [currentPreviewUrl, setCurrentPreviewUrl] = React.useState('')
  const onLoad = React.useCallback((img) => {
    imgRef.current = img
    if (!imgRef.current) return
    const { width, height } = imgRef.current
    const imgAspect = width / height
    const aspectRatio = crop.aspect || 1
    const aspectAppliedWidth = aspectRatio >= imgAspect ? width : (width / imgAspect) * aspectRatio
    const aspectAppliedHeight =
      aspectRatio <= imgAspect ? height : (height * imgAspect) / aspectRatio
    setCrop({
      unit: 'px',
      x: (width - aspectAppliedWidth) / 2,
      y: (height - aspectAppliedHeight) / 2,
      width: aspectAppliedWidth,
      aspect: crop.aspect,
    })
    return false
  }, [])

  const createCropPreview = async (
    image: HTMLImageElement,
    crop: ReactCrop.Crop,
    fileName: string
  ) => {
    const canvas = document.createElement('canvas')
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    setScale({ x: scaleX, y: scaleY })
    canvas.width = (crop.width || 0) * scaleX
    canvas.height = (crop.height || 0) * scaleY
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.drawImage(
      image,
      (crop.x || 0) * scaleX,
      (crop.y || 0) * scaleY,
      (crop.width || 0) * scaleX,
      (crop.height || 0) * scaleY,
      0,
      0,
      crop.width || 0,
      crop.height || 0
    )
    return new Promise((resolve, reject) => {
      canvas.toBlob((b) => {
        if (!b) {
          return
        }
        b.name = fileName
        if (typeof window !== 'undefined') {
          window.URL.revokeObjectURL(currentPreviewUrl)
          setCurrentPreviewUrl(window.URL.createObjectURL(b))
        }
      }, contentType)
    })
  }

  const resizeImage = (
    image: HTMLImageElement,
    crop: ReactCrop.Crop,
    fileName: string,
    maxWidth?: number
  ) => {
    if (!crop.width || !crop.height) return
    if (!maxWidth) return currentPreviewUrl
    const croppedWidth = crop.width * scale.x
    const croppedHeight = crop.height * scale.y
    const width = croppedWidth > maxWidth ? maxWidth : croppedWidth
    const height =
      croppedWidth > maxWidth ? Math.round((croppedHeight * width) / croppedWidth) : croppedHeight
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.drawImage(
      image,
      (crop.x || 0) * scale.x,
      (crop.y || 0) * scale.y,
      (crop.width || 0) * scale.x,
      (crop.height || 0) * scale.y,
      0,
      0,
      width || 0,
      height || 0
    )
    return new Promise((resolve, reject) => {
      canvas.toBlob((b) => {
        if (!b) {
          return
        }
        b.name = fileName
        if (typeof window !== 'undefined') {
          window.URL.revokeObjectURL(currentPreviewUrl)
          setImg(b)
          resolve(window.URL.createObjectURL(b))
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
    <DefaultModalContainer
      closeModal={(e) => {
        if (typeof window !== 'undefined') {
          window.URL.revokeObjectURL(currentPreviewUrl)
        }
        closeModal(e)
      }}
    >
      <TextDisplay className="text-center whitespace-pre-wrap">
        {`範囲を選択してください`}
      </TextDisplay>
      <div className="flex justify-center w-full">
        <ReactCrop
          src={editingImg}
          onImageLoaded={onLoad}
          crop={crop}
          imageStyle={{ maxHeight: '50vh' }}
          onChange={(changedCrop) => {
            if (changedCrop.width && changedCrop.height) setCrop(changedCrop)
          }}
          onComplete={makeClientCrop}
          keepSelection
        />
      </div>
      <TextDisplay className="flex justify-between text-sm font-thin">
        {<div>{displayWidth ? `※推奨: W${displayWidth}px以上` : ''}</div>}
        <div>{`(W${imageSize(crop.width, scale.x)}px * H ${imageSize(
          crop.height,
          scale.y
        )}px)`}</div>
      </TextDisplay>
      <div className="flex flex-col items-center justify-center">
        {editingImg && (
          <RoundButton
            text="保存"
            onClick={async (e) => {
              if (!imgRef.current) return
              const url = await resizeImage(imgRef.current, crop, fileName, displayWidth)
              if (!url) return
              setPreviewUrl(url)
              closeModal(e)
            }}
            className="text-white bg-blue-700"
            disabled={!crop.width}
          />
        )}
        <RoundFileUploadButton
          className="text-black bg-white"
          text="画像を変更"
          onChange={onSelectFile}
        />
      </div>
    </DefaultModalContainer>
  )
}

export const ImageEditModal = asModal(ImageEditComponent)
