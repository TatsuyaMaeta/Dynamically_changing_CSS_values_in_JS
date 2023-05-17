$("#stop-btn").on("click", function () {
    // 新しいcontentの値を設定
    const newContent = "こちらは変更後";
    $("#stop-btn").text(newContent);

    // alert("msg");
    // console.log("1111111");

    // 要素を取得します
    const element = document.querySelector("#stop-btn");

    // カスタムCSS変数の値を更新します
    element.style.setProperty("--custom-content",`'${newContent}'`);
});
