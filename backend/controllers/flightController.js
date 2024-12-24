import axios from 'axios';

// Function to get the access token using client credentials
export const getAccessToken = async () => {
  try {
    const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: process.env.AMADEUS_CLIENT_ID,
      client_secret: process.env.AMADEUS_CLIENT_SECRET,
    }), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw new Error('Unable to fetch access token');
  }
};

// Function to get location suggestions from Amadeus API
// export const getLocations = async (req, res) => {
//   try {
//     const { keyword } = req.query; 

//     const accessToken = await getAccessToken();


//     const response = await axios.get('https://test.api.amadeus.com/v1/reference-data/locations', {
//       params: {
//         subType: 'CITY,AIRPORT',
//         keyword,

//       },
//       headers: { Authorization: `Bearer ${accessToken}` },
//     });


//     res.json(response.data);
//   } catch (error) {
//     console.error('Error fetching locations:', error);
//     res.status(500).json({ error: 'Unable to fetch locations' });
//   }
// };
export const getLocations = async (req, res) => {
  try {
    const { keyword } = req.query;
    const response = await axios.get('https://www.baratoflight.us/api/airport_data.json', {
      params: {
        subType: 'CITY,AIRPORT',
        keyword,
      },
    });
    const flightLocations = response.data;

    // Filter locations based on the keyword
    const filteredLocations = flightLocations.filter(location =>
      location.toLowerCase().includes(keyword.toLowerCase())
    );

    res.json(filteredLocations);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ error: 'Unable to fetch locations' });
  }
};

export const flightResultController = async(req, res)=>{

  try{
    
    const { source, destination, date, adults, children, infants, class: travelClass } = req.query;
    const rSource = source.split('-')[0]
    const rDest = destination.split('-')[0]
    
    console.log(date);
    // https://cloudapi.wikiproject.in/flight/?currency=USD&JType=oneway&org=DEL&dest=BLR&depDt=Dec-30-2024&adt=1&chd=0&inf=0&ct=M&userid=dash&password=JMD5fky8&metaId=2020&website=baratoflight&limit=100
    // const response = await axios.get(`https://cloudapi.wikiproject.in/flight/?currency=USD&JType=oneway&org=DEL&dest=BLR&depDt=${date}&adt=${adults}&chd=${children}&inf=${infants}&ct=M&userid=dash&password=JMD5fky8&metaId=2020&website=baratoflight&limit=100`);

    const  response = await axios.get(`https://cloudapi.wikiproject.in/flight/?currency=USD&JType=oneway&org=${rSource}&dest=${rDest}&depDt=${date}&adt=${adults}&chd=${children}&inf=${infants}&ct=M&userid=dash&password=JMD5fky8&metaId=2020&website=baratoflight&limit=100`)
    console.log(response.data);

  }catch(error){
    console.log(error);
    res.status(500).send({
      success:false,
      message:"error in fetching the results",
      error
    })
  }
}
