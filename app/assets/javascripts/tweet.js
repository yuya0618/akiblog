$(function(){
// 編集タグの表示ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  $(".menu").hide()
  $(".tag").on('click',function(){
    var tagnum = $('')
    $(".menu").show()
  });
  $(".tag").on('mouseover',function(){
    $(".menu").hide()
  });
// タブ切り替えーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // sectionを全て隠して、最初のセクションを表示する
  $('section').hide().eq(0).show();
  // クリックしたタブが何番目のタブかをcontentに取得
  $('.bar li').on('click',function(){
    var content = $('.bar li').index(this);
    // 取得した番号と同じ番号のセクションを取得
    $('section').eq(content).show().siblings().hide();
    $('.bar li').eq(content).addClass('border').siblings().removeClass('border');

  });


  function buildPost(tweet){
    var html = `<div class="tweet">
                  <span class="tag" id="tag">▼</span>
                  <ul class="menu" id="menu" style="display: none;">
                    <li class="edit">
                      <a data-method="get" href="/tweets/54/edit/">編集</a>
                    </li>
                    <li class="delete">
                      <a rel="nofollow" data-method="delete" href="/tweets/54/">削除</a>
                    </li>
                  </ul>
                  ${tweet.tweet}
                </div>`
    return html;
  };

  // 非同期通信ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    $('#new-tweet').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action')
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(tweet){
        var html = buildPost(tweet);
        $('#tweet-list').prepend(html);
        $('#new-tweet')[0].reset();
        // $('.tweets').animate({scrollTop: $('.messages')[0].scrollHeight},'fast','swing');
      })
      .fail(function(){
        alert('エラー');
      })
    // 送信ボタン復活
    .always(function(){
      $('.submit').removeAttr("disabled");
    });
    })
});