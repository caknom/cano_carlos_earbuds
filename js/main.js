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
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title: "Soft Rubber",
      text: "Noise-canceling microphones make the sound better",
      image: "images/ar-photo-01.png",
      alt: "image of the soft rubber"
    },
    {
      title: "Super Bass",
      text: "The most powerfull bass component",
      image: "images/ar-photo-02.png",
      alt: "image of the bass internal piece"
    },
    {
      title: "LED Lights",
      text: "Adds an elegant touch to your experience",
      image: "images/ar-photo-04.png",
      alt: "image of a green led bulb light"
    },
    {
      title: "Noise Cancelling Microphone",
      text: "Noise-canceling microphones make the sound better",
      image: "images/ar-photo-03.png",
      alt: "image of a mic silence"
    },
    {
      title: "Fast Charging Ports",
      text: "Quick and efficient charging for uninterrupted listening",
      image: "images/ar-photo-05.png",
      alt: "image of a fast charge cord"
    },
    {
      title: "Aluminum Body",
      text: "Durable and lightweight aluminum build",
      image: "images/ar-photo-06.png",
      alt: "image of a black aluminum texture"
    }
  ];

  function loadInfoBoxes() {

    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);

      const titleElement = document.createElement('h2');
      titleElement.textContent = infoBox.title;

      const textElement = document.createElement('p');
      textElement.textContent = infoBox.text;
      
      const imgElement = document.createElement('img');
      imgElement.src = infoBox.image;
      imgElement.alt = infoBox.alt;

      selected.appendChild(imgElement);
      selected.appendChild(titleElement);
      selected.appendChild(textElement);
    });
  }

  loadInfoBoxes();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners

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