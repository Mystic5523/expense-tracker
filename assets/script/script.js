$(document).ready(function () {
    $("#add").click(function () {
        event.preventDefault();
        var location = $("#location").val();
        var cost = $("#cost").val();
        var type = $("#type").val();
        var date = $("#date").val();


        location = $("#location").val().trim();
        cost = $("#cost").val().trim();
        type = $("#type").val().trim();
        date = $("#date").val().trim();
        console.log("hello");
        console.log(location);
        console.log(cost);
        console.log(type);
        console.log(date);



        database.ref().push({
            location: location,
            cost: cost,
            type: type,
            date: date,

        });
    });
});

var config = {
    apiKey: "AIzaSyDTHWBr6OH04v7nJnzOrXIkT9qgKgO2iBI",
    authDomain: "expensive-b93c6.firebaseapp.com",
    databaseURL: "https://expensive-b93c6.firebaseio.com",
    projectId: "expensive-b93c6",
    storageBucket: "expensive-b93c6.appspot.com",
    messagingSenderId: "352740835993"
};
firebase.initializeApp(config);

var database = firebase.database();

//initial values
// var location = "";
// var cost = "";
// var type = "";
// var date = "";


database.ref().on("child_added", function (snapshot) {
    var sv = snapshot.val();

    console.log(sv.minAway)
    $("table tbody").append("<tr><td>" + sv.location + "</td><td>" + sv.cost + "</td><td>" + sv.type + "</td><td>" + sv.date + "</td></tr>");


});
