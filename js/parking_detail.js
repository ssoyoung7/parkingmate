var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.56688, 126.97652), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
  };

// 지도를 생성한다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 지도 타입 변경 컨트롤을 생성한다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도에 확대 축소 컨트롤을 생성한다
var zoomControl = new kakao.maps.ZoomControl();

// 지도의 우측에 확대 축소 컨트롤을 추가한다
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 지도에 마커를 생성하고 표시한다
var marker = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(37.56688, 126.97652), // 마커의 좌표
  map: map, // 마커를 표시할 지도 객체
});

const screenWidth = window.innerWidth;

if (screenWidth <= 768) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
} else {
  //크기 800이상
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// light room

const pic = document.querySelectorAll(".pic");
const light_box = document.getElementById("light_box");
const light_box_img = document.getElementById("light_box_img");

pic.forEach((element) => element.addEventListener("click", showLightBox));

function showLightBox() {
  let bigImgLocation = this.getAttribute("data-src");

  light_box_img.setAttribute("src", bigImgLocation);

  light_box.style.display = "flex";
}

light_box.onclick = function () {
  light_box.style.display = "none";
};
