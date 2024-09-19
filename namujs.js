// function moreView(event){
//     if(event.target.checked)  {
//         result = event.target.value;
//       }else {
//         result = '';
//       }
//       document.getElementById('moreV').innerText = result;
// }

function moreView(event){
    const text = document.querySelector('.moreV');

    if(event.target.checked)  {
        text.style.display = 'block';
      }else {
        text.style.display = 'none';
      }
}

function d(){
    const currentDate = new Date();
    
    // 각 구성 요소를 가져오기
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    
    // 날짜와 시간을 문자열로 포맷팅
    const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    // 포맷팅된 날짜와 시간을 출력
    document.getElementById('d').innerText = formattedDate;
}