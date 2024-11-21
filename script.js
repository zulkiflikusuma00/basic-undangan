document.getElementById("rsvpForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman form secara default

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Tampilkan alert atau lakukan sesuatu dengan data
  alert(`Terima kasih, ${name}! Anda telah mengonfirmasi kehadiran. Kami akan mengirimkan detail lebih lanjut ke ${email}.`);

  // Reset form
  this.reset();
});
