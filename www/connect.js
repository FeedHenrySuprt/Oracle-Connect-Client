document.getElementById('go').onclick = function () {
  // Connect to Iracle instance using the on screen parameters.
  document.getElementById('connectResponse').innerHTML = "<p style=background-color:white>Connecting.....</p>";
  $fh.cloud(
      {
        path: 'connect',
        method: "GET",
        data: {
          host: document.getElementById('host').value,
          port: document.getElementById('port').value,
          database: document.getElementById('database').value,
          user: document.getElementById('user').value,
          password: document.getElementById('password').value,
        }
      },
      function (res) {
        document.getElementById('connectResponse').innerHTML = "<p style=background-color:green>" + res.msg + "</p>";
      },
      function (code, errorprops, params) {
        document.getElementById('connectResponse').innerHTML = "<p style=background-color:red>" + errorprops.message + "</p>";
      }
  );
};