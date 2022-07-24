const playButton = document.getElementById('play')
const video = document.getElementById('video')
playButton.addEventListener('click', () => {
   playButton.style = 'display:none'
   video.play()
   video.setAttribute('controls', '')

   video.addEventListener('ended', () => {
      video.load()
      playButton.style = 'display:block'
      video.removeAttribute('controls', '')
   })

})