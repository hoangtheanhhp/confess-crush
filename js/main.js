$(document).ready(function() {
    // process bar
    setTimeout(function() {
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

document.addEventListener("DOMContentLoaded", function () {
  // Array of statements
  const statements = [
"Công thức để có một ngày tuyệt vời: Ăn những món mình thích, Làm công việc mình muốn, Cười thật nhiều và…và…và yêu anh nữa.",
"Người ta nói rằng một nụ cười là hệ thống siêu ánh sáng cho khuôn mặt, hệ thống làm mát cho cái đầu và hệ thống sưởi ấm cho trái tim. Vì vậy, bạn hãy mỉm cười mỗi ngày bạn nhé! Ngày mới vui vẻ!",
"Mỗi ngày khi anh thức dậy, em biết không, điều anh ước trước tiên là hy vọng người nhận được tin nhắn này sẽ có một ngày mới luôn vui vẻ và hạnh phúc.",
"Đêm hôm qua em đã ngủ ngon chứ? Tin nhắn này để chúc em có một ngày mới vui vẻ, chúc em luôn cười tươi khi gặp nhiều may mắn.",
"Em hãy tin rằng, nhưng những dòng tin nhắn gửi đến em vào buổi sáng chỉ có thể là lời chúc ngọt ngào: Chúc em một ngày mới đầy tiếng cười.",
"Ví dụ như anh sẽ có một điều ước ngay lúc này, thì anh không cần phải suy nghĩ mà sẽ ước người yêu anh có một ngày vui vẻ và hạnh phúc. Một buổi sáng thật tuyệt em nhé.",
"Dậy đi em! Trời sáng rồi. Anh nhờ một thiên thần tới gọi em dậy nhưng thật đáng tiếc vì một thiên thần không thể đánh thức một thiên thần khác… vì vậy anh đành tự đánh thức em vậy. hiiiii. Chúc em một ngày mới tốt lành!!!",
"Mặt trăng nhìn anh và hỏi “Nếu người yêu bạn không gửi tin nhắn, bạn có bỏ cô ấy không?” Anh trả lời “Thế bầu trời có bỏ bạn không nếu bạn không chiếu sáng?” Hihi! Chúc em ngày mới tốt lành!",
"Tình yêu và sự quan tâm có thể biểu lộ bằng nhiều cách. Một cách anh biết đó là gửi tình yêu băng qua khoảng không gian đến với người đang đọc tin nhắn này… Ngày mới vui em nhé!"
    // Add other statements here
    
  ];

  // Get the statement element
  const statementElement = document.getElementById("statement");

  // Pick a random statement
  const randomIndex = Math.floor(Math.random() * statements.length);
  const randomStatement = statements[randomIndex];

  // Display the statement
  statementElement.textContent = randomStatement;
  var audio = new Audio('sound/sound.mp3');

  // Add a click event listener to the statement element
  statementElement.addEventListener('click', function () {
    // Play the sound when the user clicks on the statement
    audio.play();
  });
});
