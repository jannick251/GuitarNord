let tag = document.createElement('script');
   tag.src = "https://www.youtube.com/iframe_api";
   let firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

   function onYouTubeIframeAPIReady() {
    player = new YT.Player('video1', {
      height: '375',
      width: '350',
      videoId: 'G8Z2AJlSEHs',
    });
    player = new YT.Player('video2', {
        height: '375',
        width: '350',
        videoId: 'ahDlrq2WW6Y',
      });
    player = new YT.Player('video3', {
        height: '375',
        width: '350',
        videoId: 'rJFq52UhK3Y',
      });
  }