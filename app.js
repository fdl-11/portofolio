function Contact(){
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var hp = document.getElementById("hp").value;
    var msg = document.getElementById("msg").value;
    if (nama != "" && email != "" && hp != "" && msg != ""){
        alert("Terima Kasih sudah mengirim pesan :)")
    }
    else{
        alert("Anda Harus Mengisi Semuanya!!")
    }
}