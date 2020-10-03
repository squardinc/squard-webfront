import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { ModalProps, asModal } from './asModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fadeOut, fadeIn } from '../../utils/Modal'
import styled from 'styled-components'
import Cropper from 'react-easy-crop'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { saveAs } from 'file-saver'

type ImageEditComponentProps = ModalProps & {
  title: string
  editImage: string | null
}

type Area = {
    width: number;
    height: number;
    x: number;
    y: number;
};

const ImageEditModalWrapper = styled.div`
  width: calc(100vw - 10px);
  background-image: linear-gradient(
    rgba(251, 230, 46, 0.8),
    rgba(175, 26, 61, 0.8)
  );
  color: white;
  background-opacity: 0.25;
  padding: 1.5rem;
  border-radius: 0.25rem;
`

const ImageEditWrapper = styled.div`
  height: calc(100vh - 150px);
  max-height: 500px;
`

const CloseIcon = styled.div`
  font-size: 20px;

  :hover {
    opacity: 0.5;
  }
`

const ModalHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const ImageEditComponent: React.FC<ImageEditComponentProps> = ({
  closeModal,
  title,
  editImage,
}) => {
  const [crop, setCrop] = React.useState({ x: 0, y: 0 })
  const [zoom, setZoom] = React.useState(1)
  const [croppedAreaPixels, setCcroppedAreaPixels] = React.useState<Area>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  })
  const onCropComplete = React.useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCcroppedAreaPixels(croppedAreaPixels)
    },
    []
  )

  function closeModalHandler(e: any) {
    e.stopPropagation()
    fadeOut()
    setTimeout(() => {
      closeModal()
    }, 500)
  }

  function saveCroppedImage(crop: Area): Promise<Blob | null> {
    const canvas = document.createElement('canvas')
    canvas.width = crop.width
    canvas.height = crop.height
    const ctx = canvas.getContext('2d')
    const image: CanvasImageSource = document.getElementById(
      'original_image'
    ) as CanvasImageSource

    if (ctx && image) {
      ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
      )
    }

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob)
          } else {
            reject(null)
          }
        },
        'image/png',
        1
      )
    })
  }

  React.useEffect(() => {
    fadeIn()
  }, [])

  return (
    <ImageEditModalWrapper>
      <ModalHeader>
        <TextDisplay className="text-2xl">{title}</TextDisplay>
        <CloseIcon>
          <FontAwesomeIcon
            icon={faTimes}
            className="text-white cursor-pointer"
            onClick={closeModalHandler}
          />
        </CloseIcon>
      </ModalHeader>

      <ImageEditWrapper>
        <Cropper
          style={{ containerStyle: { top: '80px', bottom: '90px' } }}
          image={editImage || ''}
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </ImageEditWrapper>
      <img
        style={{ width: '0px', height: '0px' }}
        id="original_image"
        src={editImage || ''}
      />
      <RoundButton
        className="border-2 text-lg"
        text="保存"
        onClick={async () => {
          try {
            const croppedImg: Blob | null = await saveCroppedImage(
              croppedAreaPixels
            )
            if (croppedImg) {
              saveAs(croppedImg)
            }
          } catch (e) {
            console.log('save image ', e)
          }
        }}
      />
    </ImageEditModalWrapper>
  )
}

export const ImageEditModal = asModal(ImageEditComponent)
