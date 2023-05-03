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
              <div class="flex-col bg-white p-[15px] rounded-xl ml-[10px] mb-[15px] mt-[50px] ">
              
                  <div class="flex justify-between opacity-50 mb-[20px]">
                  <div class="flex flex-row group">
                  <i class="mdi mdi-star text-xl text-amber-400 
                       hover:text-amber-500 transition-all duration-200" title="Best"></i>
                  <div class="text-xl text-gray-400 ml-1 hover:underline">
                      ${product.rating}
                  </div>
              </div>
              <span class="mdi mdi-bookmark-outline text-xl"></span>
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

fetch('product-box.json')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('product-box-list');
    let count = 0;
    for (let product of data) {
      if (count >= 8) break; // dừng vòng lặp khi đã hiển thị đủ 6 sản phẩm
      const productDiv = document.createElement('div');
      productDiv.innerHTML = `
      <link rel="stylesheet" href="./css/tailwindapp.css">
      <div class="my-2 mx-2 relative">
        <div class="flex flex-col shadow-xl cursor-pointer hover:-translate-y-1 duration-300">
          <div class="inline relative group h-48 my-2">
              <!-- Thumbnail -->
              <img class="absolute rounded-t object-cover h-full w-full"
                  src="${product.imagebox}"
                  alt="Product Preview" />

              <!-- Hover Bar -->
              <div class="flex flex-row absolute justify-end
                          h-16 w-full bottom-0 px-3 space-x-2
                          bg-none opacity-0 group-hover:opacity-100
                          group-hover:bg-gradient-to-t from-black/20 via-gray-800/20 to-transparent 
                          transition-all ease-in-out duration-200 delay-100">

                  <!-- Add to Bookmarks Button -->
                  <button class="bg-gray-50/10 rounded-full 
                              px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                              transition-colors duration-200">
                      <i class="mdi mdi-playlist-plus text-xl text-gray-200
                                  hover:text-white transition-all duration-200"
                          title="Add to Bookmarks"></i>
                  </button>

                  <!-- Add to Favorites Button -->
                  <button class="bg-gray-50/10 rounded-full 
                              px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                              transition-colors duration-200">
                      <i class="mdi mdi-heart text-xl text-gray-200 p-1
                                  hover:text-white transition-all duration-200"
                          title="Add to Favorites"></i>
                  </button>
              </div>
          </div>

          <!-- Body -->
          <div class="flex flex-col bg-white rounded-xl p-3">
              <!-- Title -->
              <div class="text-xl font-semibold text-gray-900 hover:underline truncate">
              ${product.namebox}
              </div>

              <!-- Author - Category -->
              <div class="text-xxs text-gray-400 truncate mt-1">
                  by

                  <!-- Author -->
                  <a class="font-semibold hover:underline"> ${product.catageory} </a>
              </div>

              <!-- Price -->
              <div class="text-2xl text-gray-600 font-bold mt-4 mb-1">
              ${product.Pricebox} đ
              </div>

              <!-- Body -->
              <div class="flex flex-row mt-2">
                  <!-- Detail Column -->
                  <div class="flex flex-col flex-auto">
                      <!-- Rating -->
                      <div class="flex flex-row group">
                          <i class="mdi mdi-star text-xs text-amber-400 
                                                  hover:text-amber-500 transition-all duration-200"
                              title="Worst"></i>

                          <i class="mdi mdi-star text-xs text-amber-400 
                                                  hover:text-amber-500 transition-all duration-200"
                              title="Bad"></i>

                          <i class="mdi mdi-star text-xs text-amber-400 
                                                  hover:text-amber-500 transition-all duration-200"
                              title="Not Bad"></i>

                          <i class="mdi mdi-star text-xs text-amber-400 
                                                  hover:text-amber-500 transition-all duration-200"
                              title="Good"></i>

                          <i class="mdi mdi-star text-xs text-amber-400 
                                                  hover:text-amber-500 transition-all duration-200"
                              title="Awesome"></i>

                          <div class="text-xxs text-gray-400 ml-1 hover:underline">
                          ${product.ratingbox}
                          </div>
                      </div>

                      <!-- Statistic -->
                      <div class="text-xxs text-gray-400 mt-1" title="34k Downlaods in this year">
                      ${product.buynum} Đã mua
                      </div>
                  </div>

                  <!-- Button Column -->
                  <div class="flex flex-row flex-auto justify-end">
                      <!-- Cart Button -->
                      <a class="flex text-xs border px-3 my-auto py-2 mr-2
                                      border-amber-500 group hover:bg-amber-500 
                                      rounded-xss
                                      transition-all duration-200">

                          <!-- Icon -->
                          <i class="mdi mdi-cart-outline text-amber-700
                                          group-hover:text-white delay-100"></i>
                      </a>

                      <!-- Preview Link Button -->
                      <a class="flex text-xs border px-3 my-auto py-2 
                                      border-amber-500 group hover:bg-amber-500 
                                      rounded-xss
                                      transition-all duration-200">

                          <!-- Icon -->
                          <i class="mdi mdi-eye-outline text-amber-700
                                          group-hover:text-white delay-100"></i>

                          <!-- Text -->
                          <div class="text-xxs text-amber-700 font-semibold ml-2
                                          group-hover:text-white delay-100">
                              Xem thêm
                          </div>
                      </a>
                  </div>
              </div>
          </div>
      </div>
      <div class="h-2"></div>

      `;
      productList.appendChild(productDiv);
      count++;
    }
  });

// end top product