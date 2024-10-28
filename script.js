document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault(); 

    var nama = document.getElementById("nama").value.trim();
    var email = document.getElementById("email").value.trim();
    var nohp = document.getElementById("nohp").value.trim();

    if (nama === "" || email === "" || nohp === "") {
        sessionStorage.setItem('message', 'Tolong isi dengan benar');
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tolong isi dengan benar!'
        });
    } else {
        Swal.fire({
            title: "Mantapp",
            text: "Thank you for giving me a job",
            imageUrl: "./assets/src/gudjob.jpeg",  // Path relatif ke gambar di dalam folder 'images'
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: "Custom image"
        });
        

        // Kosongkan input setelah submit sukses
        document.getElementById("nama").value = "";
        document.getElementById("email").value = "";
        document.getElementById("nohp").value = "";
    }
});
