// ItemPage.js
import React from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { FaArrowLeft, FaInstagram } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Arrow = styled(FaArrowLeft)`
  margin: 10px;
  font-size: 30px;
  font-weight: bold;
  display:block;
`;
const Image = styled.img`
width:80%;
margin:auto;
height:auto;
border-radius:50px;`
const ImageContainer = styled.div`
display:flex;
justify-content:center;
align-item:center;
`
const P = styled.p`
 font-family: "Poppins", sans-serif;
 padding-left:20px;
 font-weight:bold;
 font-size:20px;
  color:#3c2f2f;
 `
 const P3 = styled.div`
 font-family: "Poppins", sans-serif;
 padding-left: 20px;
 font-size: 20px;
 color: #6a6a6a;
 flex: 1 1 45%;
 white-space: pre-wrap; /* Ensures that whitespace is preserved, and text wraps */
 word-wrap: break-word; /* Ensures that long words will wrap to the next line */
`;
 const Star = styled(FaStar)`
 margin-left:20px;
 color:orange;
 font-size:25px;
 `
 const Pdis = styled.p`
  font-family: "Poppins", sans-serif;
 padding:0 0 0 20px;
 font-size:20px;
 display:inline;
 margin:0;
 text-align:start;
 color:#3c2f2f;
 `
 const Span = styled.span`
 font-family: "Poppins", sans-serif;
 margin: 20px auto;
 margin-top:70px;
 font-size:30px;
background-color:#CA8A71;
 border-radius:10px;
 color:white;
 padding:10px 50px ;

 `
 const Hr = styled.hr`
  border: 0;
  height: 5px;
  background: linear-gradient(to right, #f4ca01, #f4ca01 50%, #CA8A71 50%);
  margin: 20px 0;
  width:90%;
  margin:auto;
  border-radius:2px;
  box-shadow: 10px 10px 20px rgba(0.1, 0.1, 0.1, 0.15); 
`;

const Who = styled.p`
  font-size: 1rem;
  text-align:center;
 font-family: "Poppins", sans-serif;
`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
  flex-grow: 1;
`;
import { FaTelegram, FaTiktok, FaPhone, FaFacebook , FaEnvelope} from 'react-icons/fa'; 
const IconsContainer = styled.div`
  display: gird;
  gap: 20px; /* Space between icons */
  padding: 20px; /* Optional padding around the container */
`;

const IconStyle = {
  fontSize: '24px', // Adjust size of the icons
  color: '#f4ca01', // Default color of the icons
  cursor: 'pointer', // Change cursor to pointer on hover
  transition: 'color 0.3s', // Smooth color transition on hover
};

const ItemPage = () => {
  const navigate = useNavigate();
  const items = useSelector(state => state.items.item);
  const { name } = useParams();
  const handlePhoneClick = () => {
    window.location.href = 'tel:0910862323';
  };

  const handleTikTokClick = () => {
    // Attempt to open TikTok app, fallback to website
    // window.location.href = 'tiktok://@shebelemenssuit?_t=8pNzMPaADGX&_r=1'; // Replace @username with the actual username
    // setTimeout(() => {
      window.open('https://www.tiktok.com/@shebelemenssuit?_t=8pNzMPaADGX&_r=1', '_blank'); // Fallback to website
  //  }, 1000); // Delay fallback to allow app launch
  };
  const emailAddress = "hulugeneralcommission@gmail.com";
  <a href={`mailto:${emailAddress}`} style={{ textDecoration: 'none', color: "#117BF6" }}>
  <p style={{ padding: "0", margin: "0", display: "inline" }}>{emailAddress}</p>
</a>
  return (
    <>
      <Arrow onClick={() => navigate("/")}></Arrow>
      <ImageContainer>
      <Image src={items.ImagePath} alt='cake'></Image>
      </ImageContainer>
    <P>{items.Name}</P>
    <div style={{display:'flex'}}>
    <Star></Star> <Pdis>{items.Rate}/5 - {items.Price}% sold</Pdis> 
    </div>

    <P3>{items.detail}</P3>
 {/* <div style={{display:"flex", justifyContent:"center" }}><Span>{items.Price} Birr</Span></div>  */}
 <Container>
 <IconsContainer>
  <div style={{display:"grid" , gridTemplateColumns:"1fr 1fr 1fr" , justifyContent:"center" , marginLeft:"20px" , gap:"10px"}}>


   <div> <FaTelegram style={IconStyle} /> <span style={{color:"black" , fontFamily:"Raleway" , display:"block"}}>Telegram</span></div> 
      <div onClick={handleTikTokClick}> <FaTiktok style={IconStyle} /><span style={{color:"black" , fontFamily:"Raleway", display:"block"}}>Tiktok</span>
      </div>
      <div><FaInstagram style={IconStyle} /><span style={{color:"black" , fontFamily:"Raleway", display:"block"}}>Instagram</span></div>
     <div><FaFacebook style={IconStyle} /><span style={{color:"black" , fontFamily:"Raleway", display:"block"}}>face book</span></div>
     <div>   <FaPhone style={{ ...IconStyle, color: '#f4ca01' }} onClick={handlePhoneClick} /><span style={{color:"black" , fontFamily:"Raleway", display:"block"}}>call us</span></div>
     <div>    <a href={`mailto:${emailAddress}`} style={{textDecoration:"none"}} ><FaEnvelope style={{ ...IconStyle, color: '#f4ca01' }} /><span style={{color:"black" , fontFamily:"cursive", display:"block"}}>Mail us</span></a></div>
      </div>
    </IconsContainer>
 <Hr></Hr>
    <Who>
    Designed by <span style={{color: '#f4ca01',fontFamily: "Poppins", }}>HULU GENERALS</span>
  </Who>
 </Container>

    </>
  );
};

export default ItemPage;
