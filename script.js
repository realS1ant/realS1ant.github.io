function navClick() {
    var x = document.getElementById('mobileitems');
    if(!x.classList.contains('show')) {
        x.classList.add('show');
    } else {
        x.classList.remove('show');
    }
  }