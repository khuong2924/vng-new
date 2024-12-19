<template>
  <footer class="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div class="space-y-4">
                    <h3 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">VNGroup Tourist</h3>
                    <p class="text-gray-300">Thế giới bao la, cùng nhau khám phá!</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"><i class="fab fa-facebook-f text-xl"></i></a>
                        <a href="#" class="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"><i class="fab fa-instagram text-xl"></i></a>
                        <a href="#" class="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"><i class="fab fa-linkedin-in text-xl"></i></a>
                    </div>
                </div>

                <div class="space-y-4">
                    <h4 class="text-xl font-semibold">Thông tin pháp lý</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">GIẤY PHÉP KINH DOANH DỊCH VỤ LỮ HÀNH QUỐC TẾ</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Số GP/ No: 79-1680/2023/ TCDL – GP LHQT</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Do TCDL cấp ngày 17/08/2022</a></li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h4 class="text-xl font-semibold">Thông tin thêm</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Chính sách đặt tour</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Chính sách bảo mật</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Ý kiến khách hàng</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Góp ý</a></li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h4 class="text-xl font-semibold">Kết nối với chúng tôi!</h4>
                    <ul class="space-y-2">
                        <li class="flex items-center space-x-3">
                            <i class="fas fa-map-marker-alt text-blue-400"></i>
                            <span class="text-gray-300">93/8 Phạm Văn Hai, Phường 3

Quận Tân Bình, TP Hồ Chí Minh

Việt Nam</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <i class="fas fa-phone text-blue-400"></i>
                            <span class="text-gray-300">08 1800 2728</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <i class="fas fa-envelope text-blue-400"></i>
                            <span class="text-gray-300">vngrouptourist@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
                <p>© Copyright VNGroup Tourist 2024</p>
                <p>Designed by VNGroup Tourist</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
  background-color: #111;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

.brand-title {
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: #fff;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background-color: #fff;
  color: #111;
}

h5 {
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  font-weight: 600;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #fff;
}

.legal-info ul {
  font-size: 0.9rem;
  opacity: 0.8;
}

.copyright {
  background-color: #000;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.designer-link {
  color: #00ffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.designer-link:hover {
  color: #fff;
}

@media (max-width: 992px) {
  .footer {
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
    margin-bottom: 2rem;
  }
  
  .col-lg-3:not(:last-child) {
    margin-bottom: 2rem;
  }
}
</style> 