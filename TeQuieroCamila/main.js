
function validatePassword() {
    const password = document.getElementById('password').value.trim().toLowerCase();
    if (password === 'camila') {
        document.getElementById('part1').classList.add('hidden');
        document.getElementById('part2').classList.remove('hidden');
        document.getElementById('bg-music').play();
    } else {
        alert('Nombre incorrecto 😢');
    }
}
