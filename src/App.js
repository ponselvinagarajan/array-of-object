import logo from './logo.svg';
import './App.css';
import Web from './web'


function App() {
  const obj=[
    {
      Image:"./image/grill.webp",
      hotelName:"A2B - Adyar Ananda Bhavan "     ,
      Rating:"4.4 .20 mins",
      location:"Pallikaranai"
    },
    {
      Image:"./image/grill.webp",
      hotelName:"Mani's Dum Biryani "     ,
      Rating:"4.2.40 mins",
      location:"Karapakkam  "
    },
    {
      Image:"./image/meals.webp",
      hotelName:"Geetham Veg Restaurant      "     ,
      Rating:"3.5 .10 mins",
      location:"thoraipakkam"
    },
    {
      Image:"./image/grill.webp",
      hotelName:"A2B - Adyar Ananda Bhavan "     ,
      Rating:"4.0.30 mins",
      location:"Karapakkam      "
    },
    {
      Image:"./image/dosas.webp",
      hotelName:"Mani's Dum Biryani      "     ,
      Rating:"2.4 .20 mins",
      location:"Karapakkam      "
    },
    {
      Image:"./image/meals.webp",
      hotelName:"A2B - Adyar Ananda Bhavan "     ,
      Rating:"2.4 .20 mins",
      location:"Pallikaranai"
    },
    {
      Image:"./image/grill.webp",
      hotelName:"Fathima Biriyani'      "     ,
      Rating:"3.4 .15 mins",
      location:"Velachery      "
    },
    {
      Image:"./image/grill.webp",
      hotelName:"Fathima Biriyani's      "     ,
      Rating:"3.5 .20 mins",
      location:"Pallikaranai"
    }

  ]
  return (
    <div className="App">
      <Web  data={obj}/>

    </div>
  );
}

export default App;
