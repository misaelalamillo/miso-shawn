let searchTerm = "";
let numberOfRecords = 10;
let startYear;
let endYear;

const $searchField = $("#searchTerm");
const $beginDateField = $("#beginDate");
const $endDateField = $("#endDate");
const $numResults = $("#resultsNum");
const $searchBtn = $("#searchBtn");
const $clearBtn = $("#clearResults");
const $articleArea = $("#articleDisplay");


let apiKey = "XUAxESPi3oMNFelZzovJPqr3wm2qfIMj";

let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"


//pub_year = year published

$searchBtn.on("click", function(){
    event.preventDefault();
    if ($searchField.value === ""){
        fixTheForm("Search Term");
        return;
    }
    searchTerm = $searchField.val().trim();
    if ($numResults === ""){
        numberOfRecords = 5;
    }
    else{
        numberOfRecords = parseInt($numResults.val());
    }
    queryURL = queryURL + "q=" + searchTerm + "&api-key=" + apiKey;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          //console.log(response.response.docs);

          response.response.docs.forEach(function(i){
              let $articleDiv = $("<div>");
              let $articleTitle = $("<h3>");
              let $articleContent = $("<p>");
              $articleTitle.text(i.headline.main);
              console.log(i.headline.main);
              $articleContent.text(i.abstract);
              $articleDiv.append($articleTitle).append($articleContent);
              console.log($articleDiv);
              $articleArea.append($articleDiv);
          } )
      })
    });


function fixTheForm(field){
    alert("You need to make sure you enter a " + field);
}

