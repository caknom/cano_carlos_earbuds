(() => {

  const canvas = document.querySelector("#explode-view");
  const context = canvas.getContext("2d");

  canvas.width = 1920;
  canvas.height = 1080;

  const frameCount = 721;
  const images = [];

  for(let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `images/sequence/snaky_video${(i+1).toString().padStart(3, '0')}.jpg`;
      images.push(img);
  }

  const buds = {
      frame: 0
  };

  gsap.to(buds, {
      frame: 705,
      snap: "frame",
      scrollTrigger: {
          trigger: "#explode-view",
          pin: true,
          scrub: 5,
          // markers: true,
          start: "top top"
      },
      onUpdate: render
  });

  images[0].addEventListener("load", render);
  
  function render() {
      console.log(images[buds.frame]);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame], 0, 0);
  };

})();

(() => {
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title: "Soft Rubber",
      text: "Noise-canceling microphones make the sound better",
      image: "images/ar-photo-01.png"
    },
    {
      title: "Gel Tipped Ear Piece",
      text: "The most comfortable ear piece ever",
      image: "images/ar-photo-02.png"
    },
    {
      title: "LED Lights",
      text: "Adds an elegant touch to your experience",
      image: "images/ar-photo-04.png"
    },
    {
      title: "Noise Cancelling Microphone",
      text: "Noise-canceling microphones make the sound better",
      image: "images/ar-photo-03.png"
    },
    {
      title: "Fast Charging Ports",
      text: "Quick and efficient charging for uninterrupted listening",
      image: "images/ar-photo-05.png"
    },
    {
      title: "Aluminum Body",
      text: "Durable and lightweight aluminum build",
      image: "images/ar-photo-06.png"
    }
  ];

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      
      let selected = document.querySelector(`button[slot="hotspot-${index + 1}"]`);
      let annotationDiv = selected ? selected.querySelector(".HotspotAnnotation") : null;

      if (annotationDiv) {
        let image = document.createElement("img");
        image.src = infoBox.image;
        image.alt = infoBox.title;
        
        let title = document.createElement("h2");
        title.textContent = infoBox.title;

        let description = document.createElement("p");
        description.textContent = infoBox.text;

        annotationDiv.appendChild(title);
        annotationDiv.appendChild(description);
        annotationDiv.appendChild(image);
      }
    });
  }

  loadInfo();

  function showInfo() {
    let selected = this.querySelector("div.HotspotAnnotation");
    if (selected) {
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  }

  function hideInfo() {
    let selected = this.querySelector("div.HotspotAnnotation");
    if (selected) {
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  }

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

(() => {
  const divisor = document.querySelector('#divisor');
  const slider = document.querySelector('#slider');

  function moveDivisor() {
    console.log('moveDivisor is called');
    divisor.style.width = `${slider.value}%`;
  }

  slider.addEventListener('input', moveDivisor);
})();