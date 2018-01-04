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
    console.log(count);

    if (document.getElementsByClassName('count unseen').length > 0) {
      // best
      count = parseInt(document.getElementsByClassName('count unseen')[0].innerText);
    }
    console.log(count);

    // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
    if (isNaN(count)) {
      count = 0;
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
