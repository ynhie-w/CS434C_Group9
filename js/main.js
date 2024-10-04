// Lấy phần tử button và danh sách
const toggleButton = document.getElementById('toggleButton');
const myList = document.getElementById('myList');

// Khi click vào nút, hiển thị hoặc ẩn danh sách
toggleButton.addEventListener('click', function() {
    if (myList.classList.contains('hidden')) {
        myList.classList.remove('hidden');
        toggleButton.textContent = "Ẩn danh sách"; // Đổi nội dung nút thành "Ẩn danh sách"
    } else {
        myList.classList.add('hidden');
        toggleButton.textContent = "Hiển thị danh sách"; // Đổi lại thành "Hiển thị danh sách"
    }
});
