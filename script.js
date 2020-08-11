const videoElement = document.getElementById('video')
const button = document.getElementById('button')

const selectMediaStream = async () => {
    try {
        videoElement.srcObject = await navigator.mediaDevices.getDisplayMedia()
        videoElement.onloadeddata = () => videoElement.play()
    } catch (error) {
        console.log(error)
    }
}

button.addEventListener('click', async () => {
    button.disabled = true
    await videoElement.requestPictureInPicture()
    button.disabled = false
})

selectMediaStream()
