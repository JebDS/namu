// function moreView(event){
//   if(event.target.checked)  {
//       result = event.target.value;
//     }else {
//       result = '';
//     }
//     document.getElementById('moreV').innerText = result;
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

function news(){
  let asP1 = '韓 尹독대 요청에 용산 \'난색\'…韓측 "의도적 사전노출 없었다"(종합2보)'
  let asP2 = '92차례 전화 돌렸지만…추석에 병원 못 찾아 30대 환자 사망(종합)'
  let asP3 = '"돈벼락 맞게 하자"…의사들, 블랙리스트 작성자 돕기 모금행렬(종합2보)'
  let asP4 = '매일 맥주 5L 마시는 남친?…서장훈 "다른 사람 만나" 일침 (물어보살)'
  let asP5 = '네오위즈, \'P의 거짓 기어 스토어\' 온라인 오픈... IP 활용 굿즈 선봬'

  document.getElementById('asP1').href = "https://namu.news/article/2440277";
  document.getElementById('asP2').href = "https://namu.news/article/2440278";
  document.getElementById('asP3').href = "https://namu.news/article/2440232";
  document.getElementById('asP4').href = "https://namu.news/article/2440271";
  document.getElementById('asP5').href = "https://namu.news/article/2439942";

  document.getElementById('asP1').innerText = asP1;
  document.getElementById('asP2').innerText = asP2;
  document.getElementById('asP3').innerText = asP3;
  document.getElementById('asP4').innerText = asP4;
  document.getElementById('asP5').innerText = asP5;
}