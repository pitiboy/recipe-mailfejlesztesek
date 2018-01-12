module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;

    // Each test is done in order of least accurate (but most robust)
    // -> most accurate (but least robust)
    // for reliability of at least getting a result

    // least good test (basic, less accurate but OK if nothing else works)
    if (document.getElementsByClassName('item dragHandle unseen').length > 0) {
      count = document.getElementsByClassName('item dragHandle unseen').length;
    }

    if (document.getElementsByClassName('count unseen').length > 0) {
      // best
      count = parseInt(document.getElementsByClassName('count unseen')[0].innerText);
    }

    // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
    if (isNaN(count)) {
      count = 0;
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  function initDom () {
    // create a new div element
    var newDiv = document.createElement("span");
    // and give it some content
    var newLink = document.createElement("a");
    newLink.setAttribute('class', 'button-disable');
    newLink.onclick=function(e) {console.log('clicked', e)};
    newLink.setAttribute('href', 'javascript:document.body.classList.toggle(\'compact\');');

    var newContent = document.createTextNode("Toggle compact mode!");
    newLink.appendChild(newContent);

    // add the text node to the newly created div
    newDiv.appendChild(newLink);
    newDiv.className='item compact-view';

    // add the newly created element and its content into the DOM
    document.body.appendChild(newDiv);
    // NOTE: this should be delayed until page load
    // document.querySelector(".toolbar").appendChild(newDiv);

    // document.body.classList.add('compact');
  }

  const path = require('path');
  Franz.injectCSS(path.join(__dirname, 'style.css'));
  initDom();


  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
