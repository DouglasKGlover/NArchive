/* Hello! */
console.log('NArchive V1.0 loaded successfully!');

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has('threadid')) {
    console.log('Found a thread ID: ' + urlParams.get('threadid'));
    console.log('Redirecting...');
    window.location.replace("https://connect.gocollect.com/discussion/" + urlParams.get('threadid'));
} else {
    console.log('No thread ID found, carry on.');
}
