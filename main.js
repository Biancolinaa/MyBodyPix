

const bodyPix = require('@tensorflow-models/body-pix');

const img = document.getElementById('image');

async function main(){
    const net = await bodyPix.load();
    const segmentation = await net.segmentPerson(img);
    console.log(segmentation);
}

main();