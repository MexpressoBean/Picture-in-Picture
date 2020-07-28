
// This will use screen capture API

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompts the user to select a media stream, passes to the video element and then plays the video
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); // Waiting for the user to select a window to share
        videoElement.srcObject = mediaStream; // Then passing the media stream into the video object

        // Once the video has loaded its metadata, a function is called that plays hthe video
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    }catch(error){
        console.log('There was an error here - see the error message: ', error);
    }
}


button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});


// On load
selectMediaStream();