// js/script.js

/**
 * Hàm tìm kiếm và lọc loài cá dựa trên từ khóa nhập vào
 */
function filterFish() {
    // 1. Lấy giá trị từ ô tìm kiếm
    const searchInput = document.getElementById('fishSearch');
    // Chuyển sang chữ in hoa để tìm kiếm không phân biệt chữ hoa/thường
    const filter = searchInput ? searchInput.value.toUpperCase() : ''; 

    // 2. Lấy tất cả các thẻ <details> chứa thông tin cá
    const fishDetails = document.querySelectorAll('.section details');

    // 3. Lặp qua từng thẻ cá để kiểm tra và ẩn/hiện
    fishDetails.forEach(detail => {
        // Lấy nội dung cần so sánh (Summary và các thẻ <p> bên trong)
        const summary = detail.querySelector('summary').textContent;
        const info = detail.textContent; // Lấy toàn bộ text trong details
        
        // 4. Kiểm tra xem nội dung có chứa từ khóa tìm kiếm không
        if (summary.toUpperCase().indexOf(filter) > -1 || info.toUpperCase().indexOf(filter) > -1) {
            // Nếu khớp, hiển thị thẻ
            detail.style.display = '';
            
            // Tự động mở thẻ nếu người dùng tìm kiếm cụ thể (tùy chọn)
            // detail.open = true; 
        } else {
            // Nếu không khớp, ẩn thẻ
            detail.style.display = 'none';
            detail.open = false; // Đảm bảo thẻ bị đóng khi ẩn
        }
    });
}

// Gắn sự kiện filterFish vào ô tìm kiếm sau khi trang tải xong
window.onload = function() {
    const searchInput = document.getElementById('fishSearch');
    if (searchInput) {
        // Lắng nghe sự kiện gõ phím để lọc ngay lập tức
        searchInput.addEventListener('keyup', filterFish);
    }
};