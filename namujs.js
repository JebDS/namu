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

function moreVV(event){
  // const ck1 = document.getElementById('ch1');
  // const ck2 = document.getElementById('ch2');
  // const ck3 = document.getElementById('ch3');
  // const ck4 = document.getElementById('ch4');

  var ck = "ch"; //체크박스
  var id = "Ch"; //내용
  var id2 = "CCh"; //<a></a>

  const li=4;
  for (var i=1; i<=li; i++){
    const text = document.querySelector('.moreV'+i);
    const CK = document.getElementById(ck+i);
    if (CK.checked){
      text.style.display = 'none';
      document.getElementById(id2+i).style.color = 'rgb(151, 93, 49)';
      document.getElementById(id+i).style.color = 'rgb(143, 143, 143)';
    }
    else {
      text.style.display = 'block';
      document.getElementById(id2+i).style.color = 'rgb(217, 162, 64)';
      document.getElementById(id+i).style.color = 'rgb(224, 224, 224)';
    }
  }

  // const text = document.querySelector('.moreV1');
  
  // if(!event.target.checked)  {
  //   text.style.display = 'block';
  //   document.getElementById('CCh1').style.color = 'rgb(217, 162, 64)';
  //   document.getElementById('Ch1').style.color = 'rgb(224, 224, 224)';
  // }else {
  //   text.style.display = 'none';
  //   document.getElementById('CCh1').style.color = 'rgb(151, 93, 49)';
  //   document.getElementById('Ch1').style.color = 'rgb(143, 143, 143)';

  // }
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

// function ads(){
//   var floatPosition = parseInt($("#fimg").css('top'))

//   // scroll 인식
//   $(aside).scroll(function() {
    
//   // 현재 스크롤 위치
//   var currentTop = $(aside).scrollTop();
//   var bannerTop = currentTop + floatPosition + "px";
  
//   $("#fimg").css('top', bannerTop);
//   }).scroll();
// }