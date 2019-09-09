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

const eventsRespsone = {
  "resultsPage": {
    "status": "ok",
    "results": {
      "event": [{
          "id": 39019317,
          "displayName": "Joel Bailey at Sofar Sounds (September 15, 2019)",
          "type": "Concert",
          "uri": "http://www.songkick.com/concerts/39019317-joel-bailey-at-sofar-sounds?utm_source=58958&utm_medium=partner",
          "status": "ok",
          "popularity": 3.1e-05,
          "start": {
            "date": "2019-09-15",
            "datetime": null,
            "time": null
          },
          "performance": [{
            "id": 73902792,
            "displayName": "Joel Bailey",
            "billing": "headline",
            "billingIndex": 1,
            "artist": {
              "id": 1953622,
              "displayName": "Joel Bailey",
              "uri": "http://www.songkick.com/artists/1953622-joel-bailey?utm_source=58958&utm_medium=partner",
              "identifier": []
            }
          }],
          "ageRestriction": null,
          "flaggedAsEnded": false,
          "venue": {
            "id": 862241,
            "displayName": "Sofar Sounds",
            "uri": "http://www.songkick.com/venues/862241-sofar-sounds?utm_source=58958&utm_medium=partner",
            "metroArea": {
              "displayName": "London",
              "country": {
                "displayName": "UK"
              },
              "id": 24426,
              "uri": "http://www.songkick.com/metro_areas/24426-uk-london?utm_source=58958&utm_medium=partner"
            },
            "lat": null,
            "lng": null
          },
          "location": {
            "city": "Bethnal Green, UK",
            "lat": null,
            "lng": null
          }
        },
        {
          "id": 38821744,
          "displayName": "Hyperion Ensemble and Iancu Dumitrescu at IKLECTIK (September 15, 2019)",
          "type": "Concert",
          "uri": "http://www.songkick.com/concerts/38821744-hyperion-ensemble-at-iklectik?utm_source=58958&utm_medium=partner",
          "status": "ok",
          "popularity": 4.2e-05,
          "start": {
            "date": "2019-09-15",
            "datetime": "2019-09-15T19:30:00+0100",
            "time": "19:30:00"
          },
          "performance": [{
              "id": 73559789,
              "displayName": "Hyperion Ensemble",
              "billing": "headline",
              "billingIndex": 1,
              "artist": {
                "id": 2229552,
                "displayName": "Hyperion Ensemble",
                "uri": "http://www.songkick.com/artists/2229552-hyperion-ensemble?utm_source=58958&utm_medium=partner",
                "identifier": [{
                  "mbid": "10929d6e-6245-4d9a-905f-57a39e6766dc",
                  "href": "http://api.songkick.com/api/3.0/artists/mbid:10929d6e-6245-4d9a-905f-57a39e6766dc.json"
                }]
              }
            },
            {
              "id": 73559794,
              "displayName": "Iancu Dumitrescu",
              "billing": "headline",
              "billingIndex": 2,
              "artist": {
                "id": 184977,
                "displayName": "Iancu Dumitrescu",
                "uri": "http://www.songkick.com/artists/184977-iancu-dumitrescu?utm_source=58958&utm_medium=partner",
                "identifier": [{
                  "mbid": "42d86d89-5a40-41f2-a2f0-57f92b3a06fc",
                  "href": "http://api.songkick.com/api/3.0/artists/mbid:42d86d89-5a40-41f2-a2f0-57f92b3a06fc.json"
                }]
              }
            }
          ],
          "ageRestriction": null,
          "flaggedAsEnded": false,
          "venue": {
            "id": 2852218,
            "displayName": "IKLECTIK",
            "uri": "http://www.songkick.com/venues/2852218-iklectik?utm_source=58958&utm_medium=partner",
            "metroArea": {
              "displayName": "London",
              "country": {
                "displayName": "UK"
              },
              "id": 24426,
              "uri": "http://www.songkick.com/metro_areas/24426-uk-london?utm_source=58958&utm_medium=partner"
            },
            "lat": 51.49757,
            "lng": -0.11526
          },
          "location": {
            "city": "London, UK",
            "lat": 51.49757,
            "lng": -0.11526
          }
        }
      ]
    }
  }
}

const rpMock = options => {
  if (options.uri.includes('locations')) {
    return locationsResponse
  } else if (options.uri.includes('events')) {
    return eventsRespsone
  }
}

module.exports = rpMock
