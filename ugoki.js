$(function(){

  $('button').click(function(){

    $('.result').hide();

    var qNum = $('ul li').length;

    if($('ul li input:checked').length < qNum){
      alert("未回答の問題がありますよ。記入漏れがないか確認してみましょう。");
    }else{
      var typeANum = $('.typeA:checked').length,
      typeBNum = $('.typeB:checked').length;
      if(typeANum > typeBNum){

        $('.resultA').fadeIn();

      }else if(typeANum < typeBNum){
       
        $('.resultB').fadeIn();
      }
    }

  });

});
