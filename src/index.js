const genPasswordBtn = document.getElementById('gen-pw-btn')

function initialize() {
  genPasswordBtn.addEventListener('click', function () {
    console.log('button clicked')
    alert('clicked!')
  })
}

initialize()
