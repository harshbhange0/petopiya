const birdImagesArray = [
  "../image/birds/birds-img/Bald-Eagle.jpg",
  "../image/birds/birds-img/blue-jay.jpg",
  "../image/birds/birds-img/cardinal.jpg",
  "../image/birds/birds-img/eastern-bluebird.jpg",
  "../image/birds/birds-img/Great-Horned-Owl.jpg",
  "../image/birds/birds-img/kingfisher.jpg",
  "../image/birds/birds-img/Mallard-Duck.jpg",
  "../image/birds/birds-img/Northern-Mocking-bird.jpg",
  "../image/birds/birds-img/parrot.jpg",
  "../image/birds/birds-img/Peregrine-Falcon.jpg",
  "../image/birds/birds-img/Robin.jpg",
  "../image/birds/birds-img/Sandpiper.jpg",
  "../image/birds/birds-img/Snowy-Owl.webp",
  "../image/birds/birds-img/Turkey-Vulture.jpg",
  "../image/birds/birds-img/Woodpecker.webp",
];
const birdNameArray = [
    "Bald Eagle",
    "blue jay",
    "cardinal",
    "eastern bluebird",
    "Great Horned Owl",
    "hummingbird",
    "kingfisher",
    "Mallard Duck",
    "Northern Mocking bird",
    "parrot",
    "Peregrine Falcon",
    "Piping Plover",
    "Robin",
    "Sandpiper",
    "Snowy Owl",
    "Turkey Vulture",
    "Woodpecker",
  ];

const imgSrcArray = [
  "bird-img1",
  "bird-img2",
  "bird-img3",
  "bird-img4",
  "bird-img5",
  "bird-img6",
  "bird-img7",
  "bird-img8",
  "bird-img9",
  "bird-img10",
  "bird-img11",
  "bird-img12",
];
const toIdNameArray = [
  "bird-txt1",
  "bird-txt2",
  "bird-txt3",
  "bird-txt4",
  "bird-txt5",
  "bird-txt6",
  "bird-txt7",
  "bird-txt8",
  "bird-txt9",
  "bird-txt10",
  "bird-txt11",
  "bird-txt12",
];




function randomImg() {
    for(i = 0; i < imgSrcArray.length; i++ ){
        let randomNumber = Math.floor(Math.random() * birdImagesArray.length);

        let imgId = imgSrcArray[i];
        let imgPath = birdImagesArray[randomNumber];

        let imgName =toIdNameArray[i] 
        let imgNameTo =birdNameArray[randomNumber]
       
        document.getElementById(imgId).src = imgPath;
        document.getElementById(imgName).innerHTML= imgNameTo


        birdImagesArray.splice(randomNumber,1)

}
  
}
