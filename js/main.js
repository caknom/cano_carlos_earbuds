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