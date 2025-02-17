// This script will send a 3rd party request to a URL, mimicking a Google Analytics call
(function() {
    // Define the URL for the 3rd party request
    var url = 'https://webhook.site/8967c99d-54c4-40c6-982f-b1ffe002288e'; // Replace 'https://example.com/your-endpoint' with your actual URL

    // Function to create a unique client ID (similar to how GA generates client IDs)
    function generateClientId() {
        return 'xxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure it: GET-request for the URL
    xhr.open('GET', url, true);

    // Set custom headers (mimicking GA's headers)
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Client-ID', generateClientId());
    xhr.setRequestHeader('X-Tracking-ID', 'UA-XXXXX-Y'); // Replace with your Tracking ID

    // Send the request over the network
    xhr.send();

    // This will be called after the request is completed
    xhr.onload = function() {
        if (xhr.status !== 200) { // analyze HTTP response status
            console.error(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } else { // show the result
            console.log(`Done, got ${xhr.response.length} bytes`); // response is the server
        }
    };

    xhr.onerror = function() {
        console.error("Request failed");
    };
})();
