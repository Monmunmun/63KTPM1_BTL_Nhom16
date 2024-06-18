
var isLoggedIn = false;

function showLoginPage() {
    document.getElementById("headerImage").style.display = "none";
    document.getElementById("searchResults").innerHTML = "";
    document.getElementById("supportPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
    document.getElementById("userProfilePage").style.display = "none";
    document.getElementById("manageDocumentsPage").style.display = "none";
    document.getElementById("notificationsPage").style.display = "none";
}

function showManageDocumentsPage() {
    if (isLoggedIn) {
        document.getElementById("headerImage").style.display = "none";
        document.getElementById("searchResults").innerHTML = "";
        document.getElementById("supportPage").style.display = "none";
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("userProfilePage").style.display = "none";
        document.getElementById("manageDocumentsPage").style.display = "block";
        document.getElementById("notificationsPage").style.display = "none";
    } else {
        alert("Bạn cần đăng nhập để truy cập vào trang Quản Lý Tài Liệu.");
    }
}



function extendBookLoan(row) {
    var daysToExtend = prompt("Nhập số ngày bạn muốn gia hạn:");
    if (daysToExtend !== null && !isNaN(daysToExtend)) {
        var days = parseInt(daysToExtend);
        var dueDateCell = row.querySelector('.due-date');
        var currentDate = new Date(dueDateCell.textContent.split('/').reverse().join('/')); 
        currentDate.setDate(currentDate.getDate() + days);

        var newDueDate = currentDate.toLocaleDateString('vi-VN'); 
        dueDateCell.textContent = newDueDate;
    } else {
        alert("Vui lòng nhập số ngày hợp lệ.");
    }
}

function updateBorrowedBooksCount() {
    var table = document.querySelector("#manageDocumentsPage table tbody");
    var rowCount = table.querySelectorAll("tr").length;
    document.getElementById("borrowedBooksCount").textContent = "Số sách đang mượn: " + rowCount;
}
function handleLogin(event) {
    event.preventDefault();
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Kiểm tra đơn giản cho mục đích minh họa
    if (username === "admin" && password === "123") {
        isLoggedIn = true;
        loginSuccess();
    } else {
        alert("Đăng nhập thất bại. Vui lòng thử lại.");
    }
}

function loginSuccess() {
    var loginBtn = document.getElementById("loginBtn");
    loginBtn.textContent = "User";
    loginBtn.onclick = function() {
        showUserProfile(); // Hiển thị giao diện người dùng khi nhấn vào "User"
    };
    showHomePage(); // Quay lại trang chủ sau khi đăng nhập thành công
}

// Thêm bất kỳ logic khởi tạo nào khác ở đây
document.addEventListener("DOMContentLoaded", function() {
    // Các mã khởi tạo khác...
});

function showUserProfile() {
    document.getElementById("headerImage").style.display = "none";
    document.getElementById("searchResults").innerHTML = "";
    document.getElementById("supportPage").style.display = "none";
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("userProfilePage").style.display = "block";
    document.getElementById("manageDocumentsPage").style.display = "none";
    document.getElementById("notificationsPage").style.display = "none";
}

function updateUserInfo() {

    alert("Thông tin đã được cập nhật thành công!");
    var updatedEmail = document.getElementById("emailInput").value;
    var updatedPhone = document.getElementById("phoneInput").value;
    document.getElementById("emailDisplay").textContent = updatedEmail;
    document.getElementById("phoneDisplay").textContent = updatedPhone;
}

// Đăng xuất
function logout() {
    var loginBtn = document.getElementById("loginBtn");
    loginBtn.textContent = "Đăng nhập";
    loginBtn.onclick = function() {
        showLoginPage(); // Quay lại giao diện đăng nhập khi nhấn vào "Đăng nhập"
    };
    showHomePage(); // Quay lại trang chủ sau khi đăng xuất
}
// Thêm bất kỳ logic khởi tạo nào khác ở đây
document.addEventListener("DOMContentLoaded", function() {
    // Các mã khởi tạo khác...
});

document.getElementById("searchBtn").addEventListener("click", function() {
    var searchValue = document.getElementById("searchInput").value.toLowerCase();
    var searchType = document.getElementById("searchType").value;
    var searchResultsDiv = document.getElementById("searchResults");

    if (searchValue.trim() === "") {
        searchResultsDiv.innerHTML = "<p class='text-danger'>Vui lòng nhập từ khóa tìm kiếm.</p>";
        return;
    }
    var searchData = [
        { title: "Sách Toán Cao Cấp 1", author: "Nguyễn Văn A", year: 2021, category: "Toán học", image: "image/book.png", description: "Tạo nền tảng vững chắc: Cung cấp nền tảng vững chắc cho các cấp học tiếp theo.", contents: "Chủ Đề 1: Các số đến 10..." },
        { title: "Sách Toán Cao Cấp 2", author: "Nguyễn Văn A", year: 2021, category: "Toán học", image: "image/book.png", description: "Tạo nền tảng vững chắc: Cung cấp nền tảng vững chắc cho các cấp học tiếp theo.", contents: "Chủ Đề 1: Các số đến 10..." },
        { title: "Sách Toán Cao Cấp 3", author: "Nguyễn Văn A", year: 2021, category: "Toán học", image: "image/book.png", description: "Tạo nền tảng vững chắc: Cung cấp nền tảng vững chắc cho các cấp học tiếp theo.", contents: "Chủ Đề 1: Các số đến 10..." },
        { title: "Sách Toán Cao Cấp 4", author: "Nguyễn Văn A", year: 2021, category: "Toán học", image: "image/book.png", description: "Tạo nền tảng vững chắc: Cung cấp nền tảng vững chắc cho các cấp học tiếp theo.", contents: "Chủ Đề 1: Các số đến 10..." },
        { title: "Sách Lịch Sử Việt Nam", author: "Trần Thị B", year: 2020, category: "Lịch sử", image: "image/book.png", description: "Lịch sử Việt Nam từ thời cổ đại đến hiện đại.", contents: "Chủ Đề 1: Thời kỳ Hùng Vương..." },
        { title: "Sách Vật Lý Đại Cương", author: "Phạm Minh C", year: 2019, category: "Vật lý", image: "image/book.png", description: "Kiến thức cơ bản về vật lý đại cương.", contents: "Chủ Đề 1: Động lực học..." },
        { title: "Sách Tiếng Anh Giao Tiếp", author: "Hoàng Thị D", year: 2018, category: "Tiếng Anh", image: "image/book.png", description: "Các bài học về giao tiếp tiếng Anh hàng ngày.", contents: "Chủ Đề 1: Chào hỏi..." },
        { title: "Sách Khoa Học Công Nghệ", author: "Lê Minh E", year: 2022, category: "Khoa học", image: "image/book.png", description: "Những phát kiến mới trong công nghệ hiện đại.", contents: "Chủ Đề 1: Công nghệ sinh học..." },
        { title: "Sách Triết Học Cổ Điển", author: "Ngọc Hải F", year: 2021, category: "Triết học", image: "image/book.png", description: "Những tư tưởng triết học từ thời cổ đại.", contents: "Chủ Đề 1: Triết học phương Đông..." },
        { title: "Sách Văn Học Tân Thư", author: "Mai Thanh G", year: 2020, category: "Văn học", image: "image/book.png", description: "Các tác phẩm văn học mới nhất của các tác giả nổi tiếng.", contents: "Chủ Đề 1: Tiểu thuyết hiện đại..." },
        { title: "Sách Kinh Tế Học Phát Triển", author: "Quốc Bảo H", year: 2019, category: "Kinh tế", image: "image/book.png", description: "Các lý thuyết và thực tiễn trong kinh tế học phát triển.", contents: "Chủ Đề 1: Phát triển bền vững..." },
        { title: "Sách Y Học Cổ Truyền", author: "Thị Mai I", year: 2018, category: "Y học", image: "image/book.png", description: "Những phương pháp y học truyền thống của các nền văn minh.", contents: "Chủ Đề 1: Đông y và Tây y..." },
        { title: "Sách Mỹ Thuật Hiện Đại", author: "Hùng Dũng K", year: 2021, category: "Mỹ thuật", image: "image/book.png", description: "Các xu hướng và phong cách trong mỹ thuật đương đại.", contents: "Chủ Đề 1: Hội họa phong phú..." },
        { title: "Sách Kỹ Năng Sống", author: "Thanh Tùng L", year: 2020, category: "Sống đẹp", image: "image/book.png", description: "Những kỹ năng và lời khuyên để sống một cuộc sống trọn vẹn.", contents: "Chủ Đề 1: Kỹ năng quản lý thời gian..." },
        { title: "Sách Phát Triển Bản Thân", author: "Mai Lan M", year: 2019, category: "Phát triển cá nhân", image: "image/book.png", description: "Các phương pháp và kỹ năng để phát triển bản thân một cách toàn diện.", contents: "Chủ Đề 1: Tự tin và thành công..." }
    ]

    var filteredResults = searchData.filter(function(item) {
        if (searchType === "title") {
            return item.title.toLowerCase().includes(searchValue);
        } else if (searchType === "author") {
            return item.author.toLowerCase().includes(searchValue);
        } else if (searchType === "category") {
            return item.category.toLowerCase().includes(searchValue);
        } else if (searchType === "publisher") {
            // Chưa có dữ liệu nhà xuất bản, chỉ ví dụ với 3 trường dữ liệu khác
            return false;
        }
    });

    displaySearchResults(filteredResults);
});

function displaySearchResults(results) {
    var headerImage = document.getElementById("headerImage");
    var supportPage = document.getElementById("supportPage");
    var userProfilePage = document.getElementById("userProfilePage");
    var manageDocumentsPage= document.getElementById("manageDocumentsPage");
    var notificationsPage = document.getElementById("notificationsPage");
    var loginPage= document.getElementById("loginPage");

    var searchResultsDiv = document.getElementById("searchResults");
    searchResultsDiv.innerHTML = ""; // Xóa bỏ nội dung cũ

    if (results.length > 0) {
        headerImage.style.display = "none";
        supportPage.style.display = "none";
        userProfilePage.style.display = "none";
        manageDocumentsPage.style.display = "none";
        notificationsPage.style.display = "none";
        loginPage.style.display = "none"; // Ẩn header image nếu có kết quả tìm kiếm

        results.forEach(function(result) {
            var resultItem = document.createElement("div");
            resultItem.classList.add("search-result", "col-md-3");

            var image = document.createElement("img");
            image.src = result.image;
            image.alt = result.title;
            image.style.maxWidth = "100%";
            image.style.height = "auto";

            var title = document.createElement("h4");
            title.textContent = result.title;

            var author = document.createElement("p");
            author.textContent = "Tác giả: " + result.author;

            var borrowButton = document.createElement("button");
            borrowButton.textContent = "Đăng ký mượn";
            borrowButton.classList.add("btn", "btn-primary", "mt-2");
            // Thêm sự kiện khi click vào button "Đăng ký mượn"
            borrowButton.addEventListener("click", function() {
                alert("Đã đăng ký mượn sách: " + result.title);
            });

            var detailButton = document.createElement("button");
            detailButton.textContent = "Xem chi tiết";
            detailButton.classList.add("btn", "btn-secondary", "mt-2", "ml-2");
            detailButton.addEventListener("click", function() {
                showBookDetails(result);
            });

            resultItem.appendChild(image);
            resultItem.appendChild(title);
            resultItem.appendChild(author);
            resultItem.appendChild(borrowButton);
            resultItem.appendChild(detailButton);

            searchResultsDiv.appendChild(resultItem);
        });
    } else {
        headerImage.style.display = "none";
        supportPage.style.display = "none";
        userProfilePage.style.display = "none";
        manageDocumentsPage.style.display = "none";
        notificationsPage.style.display = "none";
        loginPage.style.display = "none";
        searchResultsDiv.innerHTML = "<p class='text-danger'>Không tìm thấy kết quả nào.</p>";
    }
}

function showNotifications() {
    var headerImage = document.getElementById("headerImage");
    var notificationsPage = document.getElementById("notificationsPage");
    var supportPage = document.getElementById("supportPage");
    var userProfilePage = document.getElementById("userProfilePage");
    var manageDocumentsPage= document.getElementById("manageDocumentsPage");
    var searchResultsDiv = document.getElementById("searchResults");
    var loginPage= document.getElementById("loginPage");

    headerImage.style.display = "none";
    notificationsPage.style.display = "block";
    supportPage.style.display = "none";
    userProfilePage.style.display = "none";
    manageDocumentsPage.style.display = "none";
    loginPage.style.display = "none";
    searchResultsDiv.innerHTML = "";

    var notifications = [
        "Thư viện sẽ đóng cửa vào ngày lễ quốc khánh.",
        "Khuyến mãi: Mượn sách miễn phí trong 7 ngày tới.",
        "Thêm sách mới về khoa học công nghệ.",
        "Nếu cần hỗ trợ, vui lòng trang hỗ trợ",
        "Vui lòng trả sách đúng hạn",
        " Sách quá hạn sẽ bị phạt."
    ];

    var notificationList = document.getElementById("notificationList");
    notificationList.innerHTML = "";

    notifications.forEach(function(notification) {
        var listItem = document.createElement("li");
        listItem.textContent = notification;
        notificationList.appendChild(listItem);
    });
}

document.getElementById("supportForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn gửi form mặc định

    // Hiển thị modal
    $('#successModal').modal('show');

    // Đặt lại form sau khi gửi thành công
    this.reset();
});

function showBookDetails(book) {
    document.getElementById("detailBookImage").src = book.image;
    document.getElementById("detailBookTitle").textContent = "Tiêu Đề: " + book.title;
    document.getElementById("detailBookAuthor").textContent = "Tác Giả: " + book.author;
    document.getElementById("detailBookYear").textContent = "Năm Xuất Bản: " + book.year;
    document.getElementById("detailBookDescription").textContent = "Mô tả: " + book.description;
    document.getElementById("detailBookContents").textContent = "Mục Lục: " + book.contents;

    $('#bookDetailModal').modal('show');
}

function showSupportPage() {
    document.getElementById("headerImage").style.display = "none";
    document.getElementById("searchResults").innerHTML = "";
    document.getElementById("supportPage").style.display = "block";
    document.getElementById("userProfilePage").style.display = "none";
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("manageDocumentsPage").style.display = "none";
    document.getElementById("notificationsPage").style.display = "none";
}

function showHomePage() {
    document.getElementById("headerImage").style.display = "block";
    document.getElementById("searchResults").innerHTML = "";
    document.getElementById("supportPage").style.display = "none";
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("userProfilePage").style.display = "none";
    document.getElementById("manageDocumentsPage").style.display = "none";
    document.getElementById("notificationsPage").style.display = "none";
}

document.getElementById("supportForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Simulate sending support form data
    setTimeout(function() {
        document.getElementById("supportForm").reset();
        document.getElementById("successMessage").style.display = "block";
    }, 1000);
});


document.querySelector('a[href="#"]').addEventListener("click", function(event) {
    event.preventDefault();
    showHomePage();
    document.getElementById("searchResults").style.display = "none";
});

