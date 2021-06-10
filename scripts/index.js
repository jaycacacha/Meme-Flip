document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "4everalone",
      img: "./assets/4everalone.png",
    },
    {
      name: "4everalone",
      img: "./assets/4everalone.png",
    },
    {
      name: "angry_derp",
      img: "./assets/angry_derp.jpg",
    },
    {
      name: "angry_derp",
      img: "./assets/angry_derp.jpg",
    },
    {
      name: "begging",
      img: "./assets/begging.png",
    },
    {
      name: "begging",
      img: "./assets/begging.png",
    },
    {
      name: "braindead_derp",
      img: "./assets/braindead_derp.png",
    },
    {
      name: "braindead_derp",
      img: "./assets/braindead_derp.png",
    },
    {
      name: "cryderp",
      img: "./assets/cryderp.png",
    },
    {
      name: "cryderp",
      img: "./assets/cryderp.png",
    },
    {
      name: "crying_derp",
      img: "./assets/crying_derp.jpg",
    },
    {
      name: "crying_derp",
      img: "./assets/crying_derp.jpg",
    },
    {
      name: "derp",
      img: "./assets/derp.png",
    },
    {
      name: "derp",
      img: "./assets/derp.png",
    },
    {
      name: "derpina",
      img: "./assets/derpina.jpg",
    },
    {
      name: "derpina",
      img: "./assets/derpina.jpg",
    },
    {
      name: "fap",
      img: "./assets/fap.jpg",
    },
    {
      name: "fap",
      img: "./assets/fap.jpg",
    },
    {
      name: "fvckyeah",
      img: "./assets/fvckyeah.png",
    },
    {
      name: "fvckyeah",
      img: "./assets/fvckyeah.png",
    },
    {
      name: "megusta",
      img: "./assets/megusta.jpg",
    },
    {
      name: "megusta",
      img: "./assets/megusta.jpg",
    },
    {
      name: "no",
      img: "./assets/no.jpg",
    },
    {
      name: "no",
      img: "./assets/no.jpg",
    },
    {
      name: "okay_derp",
      img: "./assets/okay_derp.jpg",
    },
    {
      name: "okay_derp",
      img: "./assets/okay_derp.jpg",
    },
    {
      name: "rage",
      img: "./assets/rage.png",
    },
    {
      name: "rage",
      img: "./assets/rage.png",
    },
    {
      name: "rukiddingme",
      img: "./assets/rukiddingme.png",
    },
    {
      name: "rukiddingme",
      img: "./assets/rukiddingme.png",
    },
    {
      name: "thinking_derp",
      img: "./assets/thinking_derp.jpg",
    },
    {
      name: "thinking_derp",
      img: "./assets/thinking_derp.jpg",
    },
    {
      name: "troll_face",
      img: "./assets/troll_face.png",
    },
    {
      name: "troll_face",
      img: "./assets/troll_face.png",
    },
    {
      name: "troll",
      img: "./assets/troll.png",
    },
    {
      name: "troll",
      img: "./assets/troll.png",
    },
    {
      name: "y_u_no",
      img: "./assets/y_u_no.jpg",
    },
    {
      name: "y_u_no",
      img: "./assets/y_u_no.jpg",
    },
    {
      name: "yaoming",
      img: "./assets/yaoming.png",
    },
    {
      name: "yaoming",
      img: "./assets/yaoming.png",
    },
  ];
  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  var cardChosen = [];
  var cardChosenID = [];
  var cardsPicked = [];
  var gameOver = false;
  var gameWin = false;

  const correctSound = document.createElement("audio");
  correctSound.src = "./assets/correct.wav";
  const wrongSound = document.createElement("audio");
  wrongSound.src = "./assets/wrong.mp3";

  function GameTimer(timeleft) {
    var Counter = setInterval(function () {
      if (timeleft <= 0) {
        clearInterval(Counter);
        document.getElementById("mainContainer").classList.add("inactive");
        document.getElementById("gameOver").classList.remove("inactive");
        gameOver = true;
      } else {
        document.getElementById("counter").innerHTML =
          timeleft + " seconds remaining";
      }
      timeleft -= 1;
    }, 1000);
  }

  function generateBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "./assets/doge_background.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
    GameTimer(179);
  }

  function checkForMatch() {
    var card = document.querySelectorAll("img");
    const optionOneID = cardChosenID[0];
    const optionTwoID = cardChosenID[1];

    if (cardChosen[0] === cardChosen[1]) {
      console.log("match");
      cardsPicked.push(cardChosen);
      correctSound.play();
      card[optionOneID].setAttribute("style", "pointer-events:none");
      card[optionTwoID].setAttribute("style", "pointer-events:none");
    } else {
      card[optionOneID].setAttribute("src", "./assets/doge_background.jpg");
      card[optionTwoID].setAttribute("src", "./assets/doge_background.jpg");
      console.log("no match");
      wrongSound.play();
    }
    cardChosen = [];
    cardChosenID = [];
    if (cardsPicked.length === cardArray.length / 2) {
      gameWin = true;
      document.getElementById("mainContainer").classList.add("inactive");
      document.getElementById("gameWin").classList.remove("inactive");
    }
  }

  function flipCard() {
    var cardID = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardID].name);
    cardChosenID.push(cardID);
    this.setAttribute("src", cardArray[cardID].img);
    if (cardChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      if (gameOver === true || gameWin === true) {
        location.reload();
      }
    }
  });
  generateBoard();
});
