function freezeButton() {
    var button = document.querySelector('.ripple-button');
    if (!button.classList.contains('disabled')) {
      button.classList.add('disabled');
      var timer = document.querySelector('#timer');
      var count = 4; // عدد الثواني التي تريد عرضها
      var interval = setInterval(function() {
        timer.innerHTML = 'You have ' + count + ' seconds to click again';
        count--;
        if (count < 0) {
          clearInterval(interval);
          timer.innerHTML = '';
          button.classList.remove('disabled');
        }
      }, 1000);
    } else {
      alert('You have already ordered this product.');
    }
  }
  




  // تحديد العناصر
const button = document.querySelector('.ripple-button');
const popup = document.querySelector('.popup');

// عند الضغط على الزر
button.addEventListener('click', () => {
  // إظهار النافذة
  popup.classList.add('active');
  // إعادة تحديث الصفحة بعد 5 ثواني
  setTimeout(() => {
    location.reload();
  }, 5000);
});
