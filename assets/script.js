let searchTerm = "";
let numberOfRecords = 10;
let startYear;
let endYear;

const $searchField = $("#searchTerm");
const $beginDateField = $("#beginDate");
const $endDateField = $("#endDate");
const $numResults = $("#resultsNum");
const $searchBtn = $("#searchBtn");

let apiKey = "XUAxESPi3oMNFelZzovJPqr3wm2qfIMj";

let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"



$searchBtn.on("click", function(){
    event.preventDefault();
    if ($searchField.value === ""){
        fixTheForm("Search Term");
        return;
    }
    searchTerm = $searchField.val().trim();
    if ($numResults === ""){
        numberOfRecords = 10;
    }
    else{
        numberOfRecords = parseInt($numResults.val());
    }

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
      })

    })


fixTheForm(field){
    alert("You need to make sure you enter a " + field);

}

