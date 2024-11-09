(() => {
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title: "Soft Rubber",
      text: "Noise-canceling microphones make the sound better",
      image: "images/ar_icon.png"
    },
    {
      title: "Gel Tipped Ear Piece",
      text: "The most comfortable ear piece ever",
      image: "images/ar_icon.png"
    },
    {
      title: "Noise Cancelling Microphone",
      text: "Noise-canceling microphones make the sound better",
      image: "images/ar_icon.png"
    },
    {
      title: "LED Lights",
      text: "Adds an elegant touch to your experience",
      image: "images/ar_icon.png"
    },
    {
      title: "Fast Charging Ports",
      text: "Quick and efficient charging for uninterrupted listening",
      image: "images/ar_icon.png"
    },
    {
      title: "Aluminum Body",
      text: "Durable and lightweight aluminum build",
      image: "images/ar_icon.png"
    }
  ]

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      
      let selected = document.querySelector(`button[slot="hotspot-${index + 1}"]`);

      if (selected) {
        let title = document.createElement("h2");
        title.textContent = infoBox.title;

        let description = document.createElement("p");
        description.textContent = infoBox.text;

        let image = document.createElement("img");
        image.src = infoBox.image;
        image.alt = infoBox.title;

        selected.appendChild(title);
        selected.appendChild(description);
        selected.appendChild(image);
      }
    });
  }

  // Call the function to load data
  loadInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

// 3d model viewer
// (() => {
//   const hotspots = document.querySelectorAll(".Hotspot");
//   console.log(hotspots);

//   function showInfo(e) {
//     // console.log(e.currentTarget.slot);
//     let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
//     gsap.to(selected, .5, {autoAlpha: 1});
//   }

//   function hideInfo(e) {
//     // console.log(e.currentTarget.slot);
//     let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
//     gsap.to(selected, .5, {autoAlpha: 0});
//   }

//   // event listeners
//   hotspots.forEach(hotspot => {
//     hotspot.addEventListener("mouseover", showInfo);
//     hotspot.addEventListener("mouseout", hideInfo);
//   });
  
// })();