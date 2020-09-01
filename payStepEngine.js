window.onload = function(){
  const pushButton = document.querySelectorAll('.push');

  pushButton[0].addEventListener('click',()=>{
    localStorage.removeItem('firstStep');
    localStorage.removeItem('wantingList');
    localStorage.removeItem('selectedMenu');
    localStorage.removeItem('hereOrToGo');
    localStorage.removeItem('payBy');
    localStorage.removeItem('payCheck');
  });
  pushButton[1].addEventListener('click',()=>{
    localStorage.setItem('payBy','현금');
  });
  pushButton[2].addEventListener('click',()=>{
    localStorage.setItem('payBy','카드');
  });
}
