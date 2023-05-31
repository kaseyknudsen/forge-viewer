var viewer;
var options = {
  env: "AutodeskProduction2",
  api: "streamingV2", // for models uploaded to EMEA change this option to 'streamingV2_EU'
  getAccessToken: function (onTokenReady) {
    var token =
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIiwicGkuYXRtIjoiN3ozaCJ9.eyJzY29wZSI6WyJjb2RlOmFsbCIsImRhdGE6Y3JlYXRlIiwiZGF0YTp3cml0ZSIsImRhdGE6cmVhZCIsImJ1Y2tldDpjcmVhdGUiLCJidWNrZXQ6ZGVsZXRlIl0sImNsaWVudF9pZCI6IjliWDZjeG41WW9wWHFpb0kydzJZb0k5cXJidWJuT1NzIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20vYXVkL2Fqd3RleHA2MCIsImp0aSI6IjlPY2F6cVNJTDlhaUFBZUtyZUJnWm1MV1BJTWNpVWFJSzRpOWZIRWZWNXBDcHlzMEpGa3laanR4elViMDF5QWwiLCJleHAiOjE2ODU1MDIzODN9.RJYTAhn0xX-g1_T80JyTZ9p95p97Gd1hcKBgsWc3DP9NUbSbllzecxV5HDYVkJnk8jpwaOhoydcsy1uD8gH2SiuMX6BDrZ77oChCIbB3ljm2lnsF5plznfu7RSTl-gyLVZ4zY29jzHyWUUbE-t-Cwlzln5oAvBDaXyNwQluRiUNBCABqPQ6qewWHUQdoPibRgN0sss6sh3NNlIbato5pVl6jwAd4uqNQyJLXo-jiJxxVFbS5fn_r0srzub9ufFggBk8CFy54kdufU1sxlSVQzorhYSkPdkF9IVOu5gCHgMi66-NrWmYvOneFzhzGOTfNO0ZV6thdedw5ovKFUs7TGA";
    var timeInSeconds = 3600; // Use value provided by APS Authentication (OAuth) API
    onTokenReady(token, timeInSeconds);
  },
};

Autodesk.Viewing.Initializer(options, function () {
  var htmlDiv = document.getElementById("forgeViewer");
  viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv);
  var startedCode = viewer.start();
  if (startedCode > 0) {
    console.error("Failed to create a Viewer: WebGL not supported.");
    return;
  }

  console.log("Initialization complete, loading a model next...");
});
