$(function(){
  function buildHTML(message){
    if(message.image) {
      let html = 
        `<div class="chat-main__messages__box">
          <div class="chat-main__messages__box__info">
            <div class="chat-main__messages__box__info__name">
              ${message.user_name}
            </div>
            <div class="chat-main__messages__box__info__date-time">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-main__messages__box__messaage">
            <p class="chat-main__messages__box__messaage__content">
              ${message.content}
            </p>
            <img class="chat-main__messages__box__messaage__image" src="${message.image}>
          </div>
        </div>`
      return html;
    } else {
      let html = 
        `<div class="chat-main__messages__box">
          <div class="chat-main__messages__box__info">
            <div class="chat-main__messages__box__info__name">
              ${message.user_name}
            </div>
            <div class="chat-main__messages__box__info__date-time">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-main__messages__box__messaage">
            <p class="chat-main__messages__box__messaage__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).prop('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.chat-main__messages').append(html);
      $('.chat-main__messages').animate({ scrollTop: $('.chat-main__messages')[0].scrollHeight});
      $('.btn').prop('disabled', false);
      $('.Form')[0].reset();
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });
  });
});