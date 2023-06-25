fetch(
    "https://sheet.best/api/sheets/1c30b72c-3d72-419f-8c48-941775fd4ab5"
  )
    .then((res) => res.json())
    .then((data) => {
      $("#modal").modal("show");

      $("#btn").on("click", () => {
        const text = $("#mssv").val();
        const sv = data.filter((item) => item.mssv === text)[0];
        if (!sv) {
          notValid();
        } else if (sv.pass === "FALSE") {
          notPass();
        } else {
          $("#modal").modal("hide");
          $("#content").removeClass("d-none");
          $("#name").text(`${sv.holot} ${sv.ten}`);
        }
      });
    });

const notValid = () =>{
    alert("Mã số sinh viên không hợp lệ/Chưa có kết quả phỏng vấn");
    window.location.reload();
}

const notPass = () =>{
    $("#modal").modal("hide");
    $("#content").removeClass("d-none");
    $("#top").html("");
    $("#w").html("");
    $("#name").text(``);
    $("#text").html(
      `Chúng mình rất tiếc vì không được đồng hành cùng bạn trong Chiến dịch tình nguyện Mùa Hè Xanh trường Đại học Sài Gòn lần thứ 30 - 2023. Hẹn gặp lại bạn vào các hoạt động tiếp theo nhé!`
    );
}