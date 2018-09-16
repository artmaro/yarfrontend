$(document).ready(() => {
  const talkAreas = document.getElementsByClassName('talk-area');

  function labelsResize() {
    for (let area of talkAreas) {
      const about = $(area.getElementsByClassName('about'));
      const labels = $(area.getElementsByClassName('labels'));

      about.css('margin-bottom', labels.height() + 30);
    }
  }

  labelsResize();
  $(window).on('resize', labelsResize);
});
