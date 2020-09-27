export function fadeIn() {
  setTimeout(() => {
    let element = document.getElementsByClassName('modal-transition')[1]
    if (!element) {
      element = document.getElementsByClassName('modal-transition')[0]
    }
    if (element) {
      element.classList.remove('close')
      element.classList.add('open')
    }
  }, 100)
}

export function fadeOut() {
  let element = document.getElementsByClassName('modal-transition')[1]
  if (!element) {
    element = document.getElementsByClassName('modal-transition')[0]
  }
  if (element) {
    element.classList.remove('open')
    element.classList.add('close')
  }
}
