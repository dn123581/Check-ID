
const form = document.getElementById("form");

form.addEventListener("submit", checkID);

function checkID() {
    const fullname = document.getElementById("fullname").value;
    const birthdate = document.getElementById("birthdate").value;
    const id = document.getElementById("id").value;
    const url = "https://dichvucong.yenbai.gov.vn/dichvucong/cong-dan/thong_tin_cong_dan";
    const data = "txt_CMND_CONG_DAN=" + id + "&txt_HO_TEN=" + fullname + "&txt_NGAY_SINH=" + birthdate
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById("result").innerHTML = this.responseText;
    }
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
}
