// Một số validation thường kiểm tra
// Dữ liệu rỗng, người dùng chưa nhập gì
// Định dạng email
// định dạng số
// định dạng chữ
// Định dạng mật khẩu: nhập trong mật khẩu phải có 1 ký tự chữ cái viết hoa và 1 ký tự đặc biệt

function checkEmptyValue(value, errorId) {
    // nếu đi vào được if sẽ là trường hợp người dùng đã nhập dữ liệu vào
    if (value) {
      document.getElementById(errorId).innerHTML = '';
      return true;
    } else {
      // trường hợp khi value rỗng
      document.getElementById(errorId).innerHTML = 'Vui lòng không bỏ trống';
      return false;
    }
  }
  
  function checkEmailValue(value, errorId) {
    var regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // chuỗi regex sử dụng phương thức test và truyền dữ liệu muốn kiểm tra vào
    var checkEmail = regexEmail.test(value);
    // khi test sẽ trả về 2 kết quả true hoặc false
    if (checkEmail) {
      // xử lí khi value đúng định dạng
      document.getElementById(errorId).innerHTML = '';
      return true;
    } else {
      // xử lí khi email không đúng định dạng
      document.getElementById(errorId).innerHTML =
        'Vui lòng nhập đúng định dạng email';
      return false;
    }
  }
  