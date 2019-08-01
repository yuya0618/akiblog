$(function(){
  $(".menu").hide()
  $(".tag").on('click',function(){
    $(".menu").show()
  });
  $(".tag").on('mouseover',function(){
    $(".menu").hide()
  });
// タブ切り替えーーーーーーーーーーーーーーーーーーーーーーーーーー
  // sectionを全て隠して、最初のセクションを表示する
  $('section').hide().eq(0).show();
  // クリックしたタブが何番目のタブかをcontentに取得
  $('.bar li').on('click',function(){
    var content = $('.bar li').index(this);
    // 取得した番号と同じ番号のセクションを取得
    $('section').eq(content).show().siblings().hide();
    // $('.bar li').eq(content).addclass('border').siblings().removeclass('border')
  })



  $(function buildPost(tweet){

    var html =  `.tweet
                - if user_signed_in?
                  %span.tag#tag▼
                  %ul.menu#menu
                    %li.edit
                      = link_to "編集", "/tweets/#{tweet.id}/edit/", method: :get
                    %li.delete
                      = link_to "削除", "/tweets/#{tweet.id}/", method: :delete
                = ${tweet.tweet}`
    return html;
  });
  $(document).on('turbolinks:load',function(){
  // 非同期通信
    $('.box').on('submit', function(e){
      e.preventDefault();
      console.log(this);
      var formData = new FormData(this);
      var url = $(this).attr('action')
      $("submit").removeAttr("disabled");
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
        $('.tweets').append(html);
        $('.box')[0].reset();
        // $('.tweets').animate({scrollTop: $('.messages')[0].scrollHeight},'fast','swing');
      })
      .fail(function(){
        alert('エラー');
      });
    })
  })

});