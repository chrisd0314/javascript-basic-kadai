// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',() => {
    //新しくh2要素を作成し、定数に代入する
    const h2 = document.createElement(h2);
    // 作成したh2要素にテキストを追加する
    h2.textContent = 'ボタンをクリックしました';

})