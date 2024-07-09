import "../css/style.css";
const Home =() =>{
    return(
        <>
            
        <video autoplay ='' muted loop id="myVideo">
  <source src="https://studio-chapeaux.cdn.prismic.io/studio-chapeaux/e35a5f91-f7f1-454f-8ee2-37f3dd51d9a6_studio-chapeaux.mp4" type="video/mp4"/>
  Your browser does not support HTML5 video.
</video>
<div class="overlay">
        <h2 className='studio_header_title' data-animation="title">
            <span><span >Studio</span></span>
            <br/>
        <span><span >®</span><span ><em>Chapeaux</em></span></span>
        </h2>
        <h2 className='studio_header_right'><span><span >Creating</span></span>
         <span><span >that:</span></span> <br/><span>
            <span ><em>Chapeaux</em></span></span>
            </h2>
            </div>
            
        </>
    )
}

export default Home;