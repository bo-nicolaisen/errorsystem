
let myUsers = ['allan', 'svend', 'erik'];
let usersNoErik = ['allan', 'svend', 'karl'];

findErik(usersNoErik);
findErik(myUsers);







function findErik(myArray) {

    let myErik = false;

    myArray.forEach(name => {
        //er der erik?
        if (name == 'erik') {
            myErik = true;
        }
    })


    if (myErik) {
        ErrorDisplay('warning', 'der er en erik');
        UserFeedback('error', 'jeg fandt en erik', 'feedBack');
    } else {

        UserFeedback('succes', 'ingen erik', 'feedBack');
    }

}






// test calls
// ErrorDisplay('warning', 'min besked');
// UserFeedback('warning', 'my msg', 'feedBack');



// devloper messages and critical alerts ----------------------------------
function ErrorDisplay(myType, myMessage) {

    switch (myType) {
        case 'alert':
            alert(myMessage);
            break;
        case 'warning':
            console.warn(myMessage);
            break;
        case 'error':
            console.error(myMessage);
            break;

        default:
            console.info(myMessage);
            break;
    }

}


// User feedback ----------------------------------------------------------
function UserFeedback(myType, myMessage, myId) {

    let myMessageElement = document.getElementById(myId);

    switch (myType) {
        case 'succes':
            myMessageElement.innerText = `${myType}: ${myMessage}`;

            break;
        case 'warning':
            myMessageElement.innerText = `${myType}: ${myMessage}`;

            break;
        case 'error':
            myMessageElement.innerText = `${myType}: ${myMessage}`;
            break;

        default:
            myMessageElement.innerText = `${myType}: ${myMessage}`;
            break;
    }

}