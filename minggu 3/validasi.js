document.getElementById('registerForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const nama = document.getElementById('nama').value.trim();
    const tglLahir = document.getElementById('tgl_lahir').value;
    const alamat = document.getElementById('alamat').value.trim();
    const telp = document.getElementById('telp').value.trim();

    if (username === '') {
        alert('Username tidak boleh kosong!');
        return;
    }
    if (username.length < 3) {
        alert('Username harus memiliki panjang minimal 3 karakter!');
        return;
    }

    if (password === '') {
        alert('Password tidak boleh kosong!');
        return;
    }
    if (password.length < 8) {
        alert('Password harus memiliki panjang minimal 8 karakter!');
        return;
    }

    if (nama === '') {
        alert('Nama tidak boleh kosong!');
        return;
    }

    if (tglLahir === '') {
        alert('Tanggal lahir tidak boleh kosong!');
        return;
    }
    const inputDate = new Date(tglLahir);
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    
    if (inputDate > today) {
        alert('Tanggal lahir tidak boleh di masa depan !');
        return;
    }

    if (alamat === '') {
        alert('Alamat tidak boleh kosong!');
        return;
    }

    if (telp === '') {
        alert('Nomor telepon tidak boleh kosong!');
        return;
    }
    if (!telp.startsWith('62')) {
        alert('Nomor telepon harus berawalan angka 62!');
        return;
    }

    alert('Registrasi berhasil! Mengarahkan ke dashboard...');
    this.submit();
});