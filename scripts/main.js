
    function multiply(num1, num2) {
        var result = num1 / num2;
        return result;
      }
      console.log(multiply(5, 5))

      document.querySelector("#header").onclick = function () {
          alert("Ouch! Stop poking me!")
        }

    var myImage = document.querySelector("img")
        myImage.onclick = function () {
          var mySrc = myImage.getAttribute("src");
          if (mySrc === "/images/Без названия.jpg") {
            myImage.setAttribute("src", "/images/Без названия (1).jpg");
          } else {
            myImage.setAttribute("src", "/images/Без названия.jpg");
          }
        }

        var myButton = document.querySelector("button");
        var myHeading = document.querySelector("h1");

        function setUserName() {
          var myName = prompt("Please enter your name.");
          localStorage.setItem("cock", myName);
          myHeading.textContent = "Mozilla is cool, " + myName;
          if (!localStorage.getItem("cock")) {
            setUserName();
          } else {
            var storedName = localStorage.getItem("cock");
            myHeading.textContent = "Mozilla is cool, " + storedName;
          }
        }
        myButton.onclick = function () {
          setUserName();
        };