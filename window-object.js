//create a variable called msg to hold a message that will be shown on the page

var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth + '</p>';
    msg += '<p>height: ' + window.innerHeight + '</p>';
    msg += '<p>pagexoffset: ' + window.pageXOffset + '</p>';
    msg += '<p>pageyoffset: ' + window.pageYOffset + '</p>';
    msg += '<p>screenx: ' + window.screenX + '</p>';
    msg += '<p>screeny: ' + window.screenY + '</p>';
    msg += '<p>document: ' + window.document + '<p>';
    msg += '<p>history: ' + window.history + '</p>';
    msg += '<p>screen: ' + window.screen + '</p>';

    msg += '<h2>history</h2><p>items: ' + window.history.length + '</p>';

    msg += '<h2>screen</h2><p>width: ' + window.screen.height + '</p>';
    msg += '<p>height: ' + window.screen.width + '</p>';

//browser object model methods
 window.alert('current page: ' + window.location);
 window.open('https://ethereum.org/en/get-eth/');
 
 setTimeout(function(){window.print()},5000);


var el =document.getElementById('info');
el.innerHTML = msg;

//find the location of the current page and disply it in an alert box
