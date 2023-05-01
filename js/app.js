// countdown
// Thời gian đích
var countDownDate = new Date().getTime() + 5 * 60 * 1000;

// Cập nhật thời gian đếm ngược mỗi giây
var x = setInterval(function () {

  // Lấy thời gian hiện tại
  var now = new Date().getTime();

  // Tính thời gian còn lại giữa hiện tại và đích
  var distance = countDownDate - now;

  // Tính toán các giá trị cho giờ, phút, giây
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Hiển thị kết quả trong các thẻ span
  document.getElementById("countdown-hours").innerHTML = hours.toString().padStart(2, '0');
  document.getElementById("countdown-minutes").innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById("countdown-seconds").innerHTML = seconds.toString().padStart(2, '0');

  // Nếu thời gian kết thúc, dừng đếm ngược
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);

// End countdown

// top product
fetch('top-sale.json')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('product-top-sale');
    let count = 0;
    for (let product of data) {
      if (count >= 6) break; // dừng vòng lặp khi đã hiển thị đủ 6 sản phẩm
      const productDiv = document.createElement('div');
      productDiv.innerHTML = `
              <div class="product box-border">
              <link rel="stylesheet" href="./css/tailwindapp.css">
              <div class="flex-col bg-white p-[15px] rounded-md ml-[10px] mb-[15px] mt-[50px] ">
                  <div class="flex justify-between opacity-50 mb-[30px]">
                      <p class="w-[20%]  flex"> <img class="mr-[5px]" src="./img/icon/star-regular.svg"> ${product.rating}</p>
                      <img class="w-[15%]" src="./img/icon/cart-shopping-solid (1).svg">
                  </div>
                  <p class="text-center font-bold">${product.Name}</p>
                  <img src="${product.image}" class="w-full ">
                  <p class="line-through text-green-900 text-center">${product.oldprice}</p>
                  <p class="font-semibold text-red-600 text-center ">${product.oldprice}</p>
              </div>
              </div>
      `;
      productList.appendChild(productDiv);
      count++;
    }
  });

// end top product