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

window.onload = function () {
    const total = []
    const form = document.getElementById("form");

    document.getElementById("add").addEventListener("click", function(event) {
        event.preventDefault();
        let location = document.getElementById('location').value;
        let number = document.getElementById('cost').value;
        let cost = Number(number);
        let type = document.getElementById('type').value;
        let date = document.getElementById('date').value;
        total.push(cost);

        location.trim();
        type.trim();
        date.trim();
    
        database.ref().push().set({
            location: location,
            cost: cost,
            type: type,
            date: date,
            total: total,
        });

        form.reset();
    }, false);
}

database.ref().on("child_added", function (snapshot) {
    var sv = snapshot.val();
    // console.log(sv.cost);


    $("table tbody").append("<tr><td>" + sv.location + "</td><td name='spent'>" + sv.cost + "</td><td>" + sv.type + "</td><td>" + sv.date + "</td></tr>");


    // console.log(sv.total)
    sum = sv.total.reduce(add)

    function add (a, b) {
        return a + b;
    }

    $("#total").replaceWith("<p>" + sum + "<p>")

});

