  const videoModal = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');

  videoModal.addEventListener('show.bs.modal', () => {
    videoFrame.src += "?autoplay=1";
  });

  videoModal.addEventListener('hidden.bs.modal', () => {
    videoFrame.src = videoFrame.src.replace("?autoplay=1", "");
  });