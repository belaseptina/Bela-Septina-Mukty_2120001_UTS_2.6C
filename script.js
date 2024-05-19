<script>
function calculateSum() {
    // Ambil nilai dari input
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;

    // Konversi nilai input menjadi integer
    const num1 = parseInt(number1);
    const num2 = parseInt(number2);

    // Hitung penjumlahan
    const sum = num1 + num2;

    // Tampilkan hasil
    document.getElementById('result').textContent = 'Hasil: ' + sum;
}
</script>