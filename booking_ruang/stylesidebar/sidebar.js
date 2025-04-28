
function pindahHalaman(hari) {
  if (hari === 'senin') {
    window.location.href = 'booking_ruang_senin.html';
  } else if (hari === 'selasa') {
    window.location.href = 'booking_ruang_selasa.html';
  } else if (hari === 'rabu') {
    window.location.href = 'booking_ruang_rabu.html';
  } else if (hari === 'kamis') {
    window.location.href = 'booking_ruang_kamis.html';
  } else if (hari === 'jumat') {
    window.location.href = 'booking_ruang_jumat.html';
  }
}