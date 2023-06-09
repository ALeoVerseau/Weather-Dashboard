function getForcast(cityName) {
  console.log(cityName);
  var exampleCity =
    "https://api.openweathermap.org/data/2.5/forecast?q=London&appid=592541dc8a8a73e6b93a31df6d5be080";

  fetch(exampleCity)
    .then((response) => {
      //   console.log(response);
      return response.json(); //convert to json format
    })
    .then((data) => {
      console.log(data);
    });
}

// input bar
var textInput = document.querySelector(".form-control");
var submitButton = document.querySelector(".btn-primary");

// console.log(textInput);
// console.log(submitButton);

//submit button
submitButton.addEventListener("click", function () {
  //   console.log("click");
  var cityName = textInput.value;
  console.log(cityName);
  getForcast(cityName);
});
