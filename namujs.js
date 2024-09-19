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