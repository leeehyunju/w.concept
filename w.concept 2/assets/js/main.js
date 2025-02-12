

// 로고 lottie
var animation1 = bodymovin.loadAnimation({
  container: $('#lottie_1')[0], // Required
  path: './assets/data/logo.json', // URL 직접 입력
  //path: 'data.json', // 실제 사용 폴더 지정 ex) data.json
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true // Optional
});






// gnb 슬라이드 
var swiper = new Swiper(".gnb .swiper", {
  slidesPerView:'auto'
});



// visual 슬라이드
var swiper = new Swiper(".visual-slide", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type:"fraction"
      // clickable: true,
    },
});



// for-you 슬라이드
var swiper = new Swiper(".sc-for-you .swiper", {
  slidesPerView:1,
  spaceBetween:20,
  pagination:{
    el:".swiper-pagination",
    clickable: true,
  }
  
});






// category for you tab 슬라이드
var swiper = new Swiper(".sc-category.cate1 .prd-tab", {
  slidesPerView:'auto',
  spaceBetween:8,
  pagination:{
    el:".swiper-pagination"
  }
});
// category for you 슬라이드
var swiper = new Swiper(".sc-category.cate1 .prd-slide", {
  slidesPerView:3,
  spaceBetween:6,
  pagination:{
    el:".swiper-pagination"
  }
});



// warmToGo 슬라이드 
var swiper = new Swiper(".sc-category.cate3 .prd-slide", {
  slidesPerView:2,
  spaceBetween:6,
  pagination:{
    el:".swiper-pagination"
  }
});


// category tab을 눌렀을때 하나씩 나오는 cont
$('.sc-category .prd-tab a').click(function(e){
  // 새로고침 안되게하는 코드
  e.preventDefault();

  // 클릭하면 해당 페이지 나오게끔 데이터 불러오기 1
  tabName = $(this).data('tab');
  
  // 모든 공통이 다 선택되버리기 때문에 이게 아니라,
  // $('.prd-tab a').removeClass('on');

  // 내가 선택한 부모(.prd-tab)의 자식들의 a
  $(this).parents('.prd-tab').find('a').removeClass('on');
  $(this).addClass('on');


  // 클릭하면 해당 페이지 나오게끔 데이터 불러오기 2
  // .siblings() = 내꺼를 제외한 형제들 
  $(tabName).addClass('on').siblings().removeClass('on');

})






// bestitem tab2 슬라이드 
var swiper = new Swiper(".sc-category.cate2 .prd-tab", {
  slidesPerView:'auto',
  spaceBetween:16,
  pagination:{
    el:".swiper-pagination"
  }
});

// bestitem 슬라이드 
// 3개를 다 컨트롤 가능
var swiper = new Swiper(".sc-category.cate2 .prd-slide", {
  slidesPerView:2,
  spaceBetween:6,
  pagination:{
    el:".swiper-pagination"
  }
});



// sc-rising 슬라이드 
var swiper = new Swiper(".sc-rising .swiper", {
  slidesPerView:2,
  spaceBetween:6,
  pagination:{
    el:".swiper-pagination"
  }
});



// sc-shopping-bag 슬라이드 
var swiper = new Swiper(".sc-shopping-bag .swiper", {
  slidesPerView:3,
  spaceBetween:6,
  pagination:{
    el:".swiper-pagination"
  }
});



// sc-how-about 슬라이드 
var swiper = new Swiper(".sc-how-about .swiper", {
  slidesPerView:3,
  spaceBetween:6,
  pagination:{
    el:".swiper-pagination"
  }
});






// "sc-pick tab2 메뉴 슬라이드 
var swiper = new Swiper(".sc-pick.type2 .prd-tab", {
  slidesPerView:'auto',
  spaceBetween:16,
  pagination:{
    el:".swiper-pagination"
  }
});
// "sc-pick 슬라이드 
var swiper = new Swiper(".sc-pick.type2 .prd-slide", {
  slidesPerView:2,
  spaceBetween:8,
  pagination:{
    el:".swiper-pagination"
  }
});

// sc-pick tab눌렀을때, 슬라이드 작동
$('.sc-pick .prd-tab a').click(function(e){
  e.preventDefault();

  // 클릭하면 해당 페이지 나오게끔 데이터 불러오기 1
  tabName = $(this).data('tab');

  
  // 모든 공통이 다 선택되버리기 때문에 이게 아니라,
  // $('.prd-tab a').removeClass('on');
  $(this).parents('.prd-tab').find('a').removeClass('on');
  $(this).addClass('on');


  // 클릭하면 해당 페이지 나오게끔 데이터 불러오기 2
  // .siblings() = 내꺼를 제외한 형제들 
  $(tabName).addClass('on').siblings().removeClass('on');

})






// sc-best-brands 슬라이드 
var swiper = new Swiper(".sc-best-brands .swiper", {
  slidesPerView:2,
  spaceBetween:6,
  pagination:{
    el:".swiper-pagination"
  }
});



// sc-new-collect 슬라이드 
var swiper = new Swiper(".sc-new-collect .swiper", {
  slidesPerView:2,
  spaceBetween:6,
  pagination:{
    el:".swiper-pagination"
  }
});



// sc-special 슬라이드
var swiper = new Swiper(".sc-special .swiper", {
  slidesPerView:1.4, 
  centeredSlides:true,
  loop:true,
  spaceBetween:-4,
  pagination:{
    el:".swiper-pagination"
  }
});



// sc-style-for 슬라이드 
var swiper = new Swiper(".sc-style-for .swiper", {
  slidesPerView:1,
  spaceBetween:20,
  pagination:{
    el:".swiper-pagination",
    clickable: true,
  }
});




// sc-wdna 슬라이드 
var swiper = new Swiper(".sc-wdna .swiper", {
  slidesPerView:1,
  spaceBetween:5,
  pagination:{
    el:".swiper-pagination",
    clickable: true,
  }
});



// sc-theme 슬라이드 
var swiper = new Swiper(".sc-theme .swiper", {
  slidesPerView:3,
  spaceBetween:6,
  pagination:{
    el:".swiper-pagination"
  }
});



// sc-exclusive 슬라이드 
var swiper = new Swiper(".sc-exclusive .swiper", {
  slidesPerView:1,
  spaceBetween:6,
  pagination:{
    el:".swiper-pagination"
  }
});






// fix-btn 작동
// $(window).scroll(function(){
//   // 현재값
//   curr = $(this).scrollTop();

//   // 20 이상이면, 작동하게 해라
//   if (curr >=650) {
//       $('.fix-btn').addClass('show')
//   // 그렇지 않다면,
//   }else{
//       $('.fix-btn').removeClass('show')
//   }
// })

// // fix-btn 버튼 닫기
// $('.fix-btn .close').click(function() {
//   $('.fix-btn').hide(); // .fix-btn 요소를 숨김
// });




// popup 슬라이드
// var swiper = new Swiper(".pop-slide", {
//   autoplay: {
//     delay: 3500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     type:"fraction"
//     // clickable: true,
//   },
// });



























