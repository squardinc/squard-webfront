import * as React from 'react'
import styled from 'styled-components'
import { Image } from '../Image/index'
import { Icon } from '../Icon'
import Camera from '../../assets/icon-camera.svg'
import { ImageEditModal } from '../Modal/ImageEditModal'


export type ImageType = 'cover' | 'avatar'
export interface ImageProfileProps {
  topImage: string
  icon: string
  setTopImage: React.Dispatch<React.SetStateAction<Blob | undefined>>
  setIcon: React.Dispatch<React.SetStateAction<Blob | undefined>>
  style?: React.CSSProperties
}

const ImageProfileWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
`
const ImageCoverWrapper = styled.div`
  width: 100%;
  height: 250px;
`
const ImageAvatarWrapper = styled.div`
  position: absolute;
  top: 175px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;
`

const CameraIconCoverWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 0.5;
  }
`

const CameraIconAvatarWrapper = styled.div`
  position: absolute;
  top: 175px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    opacity: 0.5;
  }
`

const ImageProfileEditComponent: React.FC<ImageProfileProps> = ({ style = {}, topImage, icon, setTopImage, setIcon }) => {
  const [showTopImageEditModal, setShowTopImageEditModal] = React.useState(false)
  const [showIconEditModal, setShowIconEditModal] = React.useState(false)
  const [topImagePreviewUrl, setTopImagePreviewUrl] = React.useState<string>(topImage)
  const [iconPreviewUrl, setIconPreviewUrl] = React.useState<string>(icon)
  const [editingTopImage, setEditingTopImage] = React.useState<string>('')
  const [editingIcon, setEditingIcon] = React.useState<string>('')
  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>, setImg: React.Dispatch<React.SetStateAction<string>>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setImg(reader.result)
      })
      reader.readAsDataURL(e.target.files[0])
    }
  }
  return (
    <>
      <ImageProfileWrapper style={style}>
        <ImageCoverWrapper>
          <Image
            src={topImagePreviewUrl}
            width={'100%'}
            height={'100%'}
            objectFit={'cover'}
            style={{ overflow: 'hidden' }}
          />
        </ImageCoverWrapper>
        <ImageAvatarWrapper>
          <Image
            src={iconPreviewUrl}
            width={'100%'}
            height={'100%'}
            objectFit={'cover'}
            style={{ borderRadius: '75px', overflow: 'hidden' }}
          />
        </ImageAvatarWrapper>

        <label>
          <CameraIconCoverWrapper>
            <Camera />
          </CameraIconCoverWrapper>
          <input
            type="file"
            className="hidden"
            onChange={(e) => {
              e.preventDefault()
              onSelectFile(e, setEditingTopImage)
              setShowTopImageEditModal(true)
            }}
          />
        </label>
        <label >
          <CameraIconAvatarWrapper>
            <Camera />
          </CameraIconAvatarWrapper>
          <input
            type="file"
            className="hidden"
            onChange={(e) => {
              e.preventDefault()
              onSelectFile(e, setEditingIcon)
              setShowIconEditModal(true)
            }}
          />
        </label>
      </ImageProfileWrapper>
      {showTopImageEditModal && (
        <ImageEditModal
          fileName='top.jpeg'
          contentType='image/jpeg'
          closeModal={() => {
            if (typeof window !== 'undefined')
              window.URL.revokeObjectURL(topImagePreviewUrl)
            setShowTopImageEditModal(false)
          }}
          editingImg={editingTopImage}
          onSelectFile={(e) => onSelectFile(e, setEditingTopImage)}
          setImg={setTopImage}
          setPreviewUrl={setTopImagePreviewUrl}
        />
      )}
      {showIconEditModal && (
        <ImageEditModal
          editingImg={editingIcon}
          onSelectFile={(e) => onSelectFile(e, setEditingIcon)}
          fileName='icon.jpeg'
          contentType='image/jpeg'
          closeModal={() => setShowIconEditModal(false)}
          setImg={setIcon}
          setPreviewUrl={setIconPreviewUrl}
        />
      )}
    </>
  )
}

export const ImageProfileEdit = React.memo(ImageProfileEditComponent)