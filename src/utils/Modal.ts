export const fadeIn = () => {
  setTimeout(() => {
    let element = document.getElementsByClassName('modal-transition')[1]
    if (!element) {
      element = document.getElementsByClassName('modal-transition')[0]
    }
    if (element) {
      element.classList.remove('close')
      element.classList.add('open')
    }
  }, 300)
}

const fadeOut = () => {
  let element = document.getElementsByClassName('modal-transition')[1]
  if (!element) {
    element = document.getElementsByClassName('modal-transition')[0]
  }
  if (element) {
    element.classList.remove('open')
    element.classList.add('close')
  }
}
export const withFadeOut = (closeModal: VoidFunction) => {
  return (e: React.MouseEvent) => {
    e.stopPropagation()
    fadeOut()
    setTimeout(() => { closeModal() }, 150)
  }
}
