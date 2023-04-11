const catImagesArray = [
   "../image/cat-img/australian-mist-cat.webp", 
   "../image/cat-img/bengalcat1.jpg", 
   "../image/cat-img/Burmilla-cat.webp", 
   "../image/cat-img/caracat.webp", 
   "../image/cat-img/chausiecat1.jpg", 
   "../image/cat-img/Cheetohcat1.jpg", 
   "../image/cat-img/Exostic-shorthair-cat.webp", 
   "../image/cat-img/highlander-cat.webp", 
   "../image/cat-img/Ocicat-cat.webp", 
   "../image/cat-img/pixie-bob-cat.webp", 
   "../image/cat-img/Pixiebobcat1.jpg", 
   "../image/cat-img/Ragdoll-cat.webp", 
   "../image/cat-img/savannahcat1.jpg", 
   "../image/cat-img/serengeti-cat.webp", 
   "../image/cat-img/toyger-cat.jpg", 
  ];
  const catNameArray = [
     "Australian MistCat",
     "Bengalcat",
     "Burmilla Cat",
     "Caracat",
     "Chausie Cat",
     "Cheetoh Cat",
     "Exostic Shorthair Cat",
     "Highlander Cat",
     "Ocicat Cat",
     "Pixie Bob Cat",
     "Pixie Bob Cat",
     "Ragdoll Cat",
     "Savannah Cat",
     "Serengeti Cat",
     "Toyger Cat"
    ];
  
  const imgSrcArray = [
    "cat-img1",
    "cat-img2",
    "cat-img3",
    "cat-img4",
    "cat-img5",
    "cat-img6",
    "cat-img7",
    "cat-img8",
    "cat-img9",
    "cat-img10",
    "cat-img11",
    "cat-img12",
  ];
  const txtIdNameArray = [
    "cat-txt1",
    "cat-txt2",
    "cat-txt3",
    "cat-txt4",
    "cat-txt5",
    "cat-txt6",
    "cat-txt7",
    "cat-txt8",
    "cat-txt9",
    "cat-txt10",
    "cat-txt11",
    "cat-txt12",
  ];
  
  
  
  
  function randomImg() {
      for(i = 0; i < imgSrcArray.length; i++ ){
          let randomNumber = Math.floor(Math.random() * catImagesArray.length);
  
          let imgId = imgSrcArray[i];
          let imgPath = catImagesArray[randomNumber];
  
          let imgName =txtIdNameArray[i] 
          let imgNameTo =catNameArray[randomNumber]
         
          document.getElementById(imgId).src = imgPath;
          document.getElementById(imgName).innerHTML= imgNameTo
  
  
          catImagesArray.splice(randomNumber,1)
          catNameArray.splice(randomNumber,1)
  
  }
    
  }
  