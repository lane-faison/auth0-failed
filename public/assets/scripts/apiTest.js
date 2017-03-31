$(document).ready( function () {
  $.ajax({
    url: 'http://www.airnowapi.org/aq/forecast/latLong/?format=application/json&latitude=39.964982&longitude=-104.992297&date=2017-03-30&distance=25&API_KEY=AC32AB9C-773E-44F0-8C31-9B29ADB7C373',
    method: 'GET',
    beforeSend: function (req) {
      req.setRequestHeader('Access-Control-Allow-Headers', '*')
    },
    Accept: 'application/json',
    success: function (data) {
      console.log(data);
    }
  })
  // $.get('http://www.airnowapi.org/aq/forecast/latLong/?format=application/json&latitude=39.964982&longitude=-104.992297&date=2017-03-30&distance=25&API_KEY=AC32AB9C-773E-44F0-8C31-9B29ADB7C373', function (data) {
  //   console.log(data);
  // })
})

// curl --get --include 'https://jgentes-Crime-Data-v1.p.mashape.com/crime?enddate=9%2F25%2F2015&lat=39&long=-104&startdate=9%2F19%2F2014' \
//   -H 'X-Mashape-Key: 24MjAGDqCEmshuIiSUbUXpCdficsp1KG2RPjsntdpsQbVVFzy9' \
//   -H 'Accept: application/json'
