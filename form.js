(function ($) {
  let ans = [];
  function formStart() {
    // переключение между приветствием и вопросами
    $('#start').addClass('hidden');
    $('#form-1').removeClass('hidden');
  }

  function switch2() {
    let curAns = $('input[name=q1]:checked').val();
    ans.push(typeof curAns === 'undefined' ? '0' : curAns);
    $('#form-1').addClass('hidden');
    $('#form-2').removeClass('hidden');
    curAns = null;
  }

  function switch3() {
    let curAns = $('input[name=q2]:checked').val();
    ans.push(typeof curAns === 'undefined' ? '0' : curAns);
    $('#form-2').addClass('hidden');
    $('#form-3').removeClass('hidden');
    curAns = null;
  }

  function switch4() {
    let curAns = $('input[name=q3]:checked').val();
    ans.push(typeof curAns === 'undefined' ? '0' : curAns);
    $('#form-3').addClass('hidden');
    $('#form-4').removeClass('hidden');
    curAns = null;
  }

  function switch5() {
    let curAns = $('input[name=q4]:checked').val();
    ans.push(typeof curAns === 'undefined' ? '0' : curAns);
    $('#form-4').addClass('hidden');
    $('#form-5').removeClass('hidden');
    curAns = null;
  }
  function switch6() {
    let curAns = $('input[name=q5]:checked').val();
    ans.push(typeof curAns === 'undefined' ? '0' : curAns);
    $('#form-5').addClass('hidden');
    $('#form-6').removeClass('hidden');
    curAns = null;
  }
  function switch7() {
    let curAns = $('input[name=q6]:checked').val();
    ans.push(typeof curAns === 'undefined' ? '0' : curAns);
    $('#form-6').addClass('hidden');
    $('#form-7').removeClass('hidden');
    curAns = null;
  }
  function switch8() {
    let curAns = $('input[name=q7]:checked').val();
    ans.push(typeof curAns === 'undefined' ? '0' : curAns);
    $('#form-7').addClass('hidden');
    $('#form-8').removeClass('hidden');
    curAns = null;
  }
  function switch9() {
    let curAns = $('input[name=q8]:checked').val();
    ans.push(typeof curAns === 'undefined' ? '0' : curAns);
    $('#form-8').addClass('hidden');
    $('#form-9').removeClass('hidden');
    curAns = null;
  }
  function switch10() {
    let curAns = $('input[name=q9]:checked').val();
    ans.push(typeof curAns === 'undefined' ? '0' : curAns);
    $('#form-9').addClass('hidden');
    $('#form-10').removeClass('hidden');
    curAns = null;
  }
  function switch11() {
    let curAns = $('input[name=q10]:checked').val();
    ans.push(typeof curAns === 'undefined' ? '0' : curAns);
    $('#form-10').addClass('hidden');
    $('#form-11').removeClass('hidden');
    curAns = null;
  }
  function switch12() {
    let curAns = $('input[name=q11]:checked').val();
    ans.push(typeof curAns === 'undefined' ? '0' : curAns);
    $('#form-11').addClass('hidden');
    $('#form-12').removeClass('hidden');
    curAns = null;
  }
  function formEnd() {
    let curAns = $('input[name=q12]:checked').val();
    ans.push(typeof curAns === 'undefined' ? '0' : curAns);
    $('#form-12').addClass('hidden');
    $('#end').removeClass('hidden');
    console.log(ans);
    // ans = [1,2,3,4,5,6,7,8,9,10,11,12];
    $("#lastSubmit").val(ans.join(' '));
  }
  $('#button-go').on('click', formStart);
  $('#button-1').on('click', switch2);
  $('#button-2').on('click', switch3);
  $('#button-3').on('click', switch4);
  $('#button-4').on('click', switch5);
  $('#button-5').on('click', switch6);
  $('#button-6').on('click', switch7);
  $('#button-7').on('click', switch8);
  $('#button-8').on('click', switch9);
  $('#button-9').on('click', switch10);
  $('#button-10').on('click', switch11);
  $('#button-11').on('click', switch12);
  $('#button-end').on('click', formEnd);
  console.log(ans)
})(jQuery);
