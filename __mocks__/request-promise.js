const locationsResponse = {
  "resultsPage": {
    "status":"ok",
    "results": {
      "location":[
        {
          "city":{
            "lat":51.5078,
            "lng":-0.128,
            "country":{
              "displayName":"UK"
            },
            "displayName":"London"
          },
          "metroArea":{
            "lat":51.5078,
            "lng":-0.128,
            "country":{"displayName":"UK"},
            "uri":"http://www.songkick.com/metro_areas/24426-uk-london?utm_source=58958&utm_medium=partner",
            "displayName":"London",
            "id":24426
          }
        },
        {
          "city":{
            "lat":42.9833,
            "lng":-81.25,
            "country":{
              "displayName":"Canada"
            },
            "state":{
              "displayName":"ON"
            },
            "displayName":"London"
          },
          "metroArea":{
            "lat":42.9833,
            "lng":-81.25,
            "country":{
              "displayName":"Canada"
            },
            "uri":"http://www.songkick.com/metro_areas/27374-canada-london?utm_source=58958&utm_medium=partner",
            "state":{
              "displayName":"ON"
            },
            "displayName":"London",
            "id":27374
          }
        }
      ]
    },
    "perPage":50,
    "page":1,
    "totalEntries":2
  }
}

const rpMock = options => {
  if (options.uri.includes('locations')) {
    console.log('using mock')
    return locationsResponse
  }
}

module.exports = rpMock
