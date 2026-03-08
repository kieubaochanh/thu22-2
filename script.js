let text = `Gạo ơi,

Anh viết những dòng này khi đã thực sự bình tâm và nhìn nhận lại tất cả những gì đã xảy ra giữa chúng mình trong tháng qua. Anh biết, một lời xin lỗi có lẽ là chưa đủ để bù đắp cho sự thất vọng mà anh đã gây ra cho em.

Anh xin lỗi vì đã lén đi chơi mà không nói với em, và tệ hơn nữa là anh đã chọn cách nói dối khi em hỏi đến. Anh biết mình đã sai khi phá vỡ niềm tin mà em dành cho anh. Thực sự, lúc đó anh đã rất sợ. Anh sợ khi biết chuyện em sẽ nổi giận, sẽ mất bình tĩnh, và điều anh sợ nhất là thấy em làm đau chính mình.

Anh đã quá hèn nhát khi nghĩ rằng một lời nói dối có thể giữ được sự yên bình giả tạo, mà quên mất rằng sự chân thành mới là thứ duy nhất giữ chúng ta lại gần nhau.

Anh hiểu rằng sự bao che của anh vô tình lại làm em tổn thương sâu sắc hơn. Anh xin lỗi vì đã không đủ bản lĩnh để đối mặt cùng em, để cùng em vượt qua những cảm xúc tiêu cực ấy một cách đúng đắn.

Cảm ơn Gạo vì đã vẫn ở đây, vẫn kiên nhẫn với một người còn nhiều thiếu sót như anh.

Cho anh thêm cơ hội để chăm sóc và bảo vệ em theo cách đúng đắn hơn, em nhé?

Thương em rất nhiều.`;

let i = 0;

function typeWriter(){
    if(i < text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,30);
    }
}