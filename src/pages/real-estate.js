import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function RealEstate() {
 
  const listing = useListing()

  const numRandom = Math.floor((Math.random() * (5 - 1)) + 1);
  console.log("NumRandom: ", numRandom);

  const address = decodeURIComponent(JSON.parse('"\\u05ea\\u05de\\u05d9\\u05e8 \\u05e9\\u05de\\u05d5\\u05d0\\u05dc 53, \\u05d9\\u05e8\\u05d5\\u05e9\\u05dc\\u05d9\\u05dd"'));
  console.log("Address: ", address)


  return (
    <div style={{ display: 'flex', width: '80%', flexDirection: 'column', width: '100%'}}>
      <div style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-around'}}>
        <Typography variant="h4">Listing</Typography>
        <TextField id="outlined-basic" label="Search by address" variant="outlined" />
      </div>
      <div className="row">
        <div style={{ display: 'flex', width: '80%', margin: '0 auto', flexFlow: 'row wrap'}}>

          {listing.map(item => (
            <Card key={item.id} sx={{ minWidth: 350, margin: '10px'}}>
              <CardMedia
                component="img"
                alt="Apartment" 
                height="140"
                image={`images/prop${numRandom}.jpg`}
              />
              <CardContent>
                <Typography variant="body1" color="text.primary">
                  ${item.price}
                </Typography>
                {/* <Typography variant="body2" color="text.primary">
                  {decodeURIComponent(JSON.parse(`"${item.address}"`))}
                  {console.log(decodeURIComponent(JSON.parse(`"${item.address}"`)))}
                </Typography> */}
                <Typography variant="body2" color="text.secondary">
                  Square mts: {item.sqm}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Num Rooms: {item.num_rooms}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Floors: {item.num_floors}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Elevator: {item.elevator}
                </Typography>
                <Typography variant="body2" color='text.secondary'>
                  Parking: {item.parking}
                </Typography>
              </CardContent>
            </Card>
          ))}
        
        </div>
      </div>
    </div>
  )
}

function useListing() {
  const [listing, setListing] = useState([])
 
  useEffect(() => {
    fetch(`api/transactions.json`, {
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setListing(response.properties);
    })
    .catch((error) => console.log(error, " Error"))
  }, [0]); 
  console.log(listing)
  return listing;
}