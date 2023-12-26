function fnAddMainAd(){
  $('#wrap').prepend('<section id="main-ad"><div class="container"><div class="imgbox"><a href="#"><img src="./assets/images/banner-top.jpg" alt="광고"></a></div><div id="btn-main-ad-close" class="btn">닫기</div></div></section>');
}
function fnRemoveMainAd(){
  $('section#main-ad').remove();
}
function fnSetDisplay(el,opt){
  el.style.display=opt;
}
function fnSetActive(el,opt){
  if(opt=='on'){
    el.classList.add('active');
  }
  else if(opt=='off'){
    el.classList.remove('active');
  }
  else{
    console.log('함수 매개변수 오류.');
  }
}
function fnSetModal(opt){
  if(opt=='off'){
    document.querySelector('body').style.overflow='auto';
  }
  else if(opt=='on'){
    document.querySelector('body').style.overflow='hidden';
  }
  else{
    console.log('함수 매개변수 오류.');
  }
}

function fnLoginFormOpen(el){
  if(window.innerWidth<1280){
    let loginvalue=confirm('로그인 하시겠습니까?');
    if(loginvalue){
      fnSetDisplay(el,'block');
      fnSetModal('on');
    }
  }
  else{
    fnSetDisplay(el,'block');
    fnSetModal('on');
  }
}
function fnLoginFormClose(el){
  fnSetDisplay(el,'none');
  fnSetModal('off');
}

function fnNavFormOpen(el){
  fnSetDisplay(el,'block');
  fnSetModal('on');
}
function fnNavFormClose(el){
  fnSetDisplay(el,'none');
  fnSetModal('off');
}
function fnQueryGetJson(url){
  $.getJSON(url,function(data){
    $.each(data,function(idx,row){
      $('.movie-name').eq(idx).text(row.movieName);
      $('.movie-num').eq(idx).text(row.movieNum);
      $('.movie-img img').eq(idx).attr('src',row.movieSrc);
      $('.movie-img img').eq(idx).attr('alt',row.movieAlt);
      $('.movie-best').eq(idx).text(row.movieBest);
      $('.movie-txt').eq(idx).text(row.movieTxt);
      $('.movie-review span:last-child').eq(idx).text(row.movieReview);
    });
  });
}