// This script will send a 3rd party request to a URL
document.addEventListener("DOMContentLoaded", function() {
    // Define the URL for the 3rd party request
    var url = 'https://example.com/your-endpoint'; // Replace 'https://example.com/your-endpoint' with your actual URL

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure it: GET-request for the URL
    xhr.open('GET', url, true);

    // Send the request over the network
    xhr.send();

    // This will be called after the request is completed
    xhr.onload = function() {
        if (xhr.status !== 200) { // analyze HTTP response status
            alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } else { // show the result
            alert(`Done, got ${xhr.response.length} bytes`); // response is the server
        }
    };

    xhr.onerror = function() {
        alert("Request failed");
    };
});
