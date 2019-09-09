const rp = require('request-promise')

const rootURL = 'https://api.songkick.com/api/3.0'

const searchLocations = async location => {
  const locationSearchUrl = `${rootURL}/search/locations.json`

  const options = {
    uri: locationSearchUrl,
    qs: {
      query: location,
      apikey: process.env.SONGKICK_API_KEY
    },
    json: true
  }

  const res = await rp(options)
  const locations = res.resultsPage.results.location
  return parseLocations(locations)
}

const parseLocations = locations => {
  return locations.map(l => {
    return {
      id: l.metroArea.id,
      name: parseLocationName(l)
    }
  })
}

const parseLocationName = ({city}) => {
  const {
    displayName,
    state: {
      displayName: state
    } = {},
    country: {
      displayName: country
    }
  } = city

let name = displayName
if (state) {
  name += `, ${state}`
}
name += `, ${country}`

return name
}

const getGigs = async (metroAreaId, date) => {
  const eventsSearchUrl = `${rootURL}/events.json`

  const options = {
    uri: eventsSearchUrl,
    qs: {
      location: `sk:${metroAreaId}`,
      min_date: date,
      max_date: date,
      apikey: process.env.SONGKICK_API_KEY
    },
    json: true
  }

  const res = await rp(options)
  const gigs = res.resultsPage.results.event
  return gigs
}

module.exports = {
  searchLocations,
  getGigs
}
