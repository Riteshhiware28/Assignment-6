import React from 'react'
import './Songs.css'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import List from './List';
import ListTwo from './ListTwo';

function Songs() {
    
    return (
       <div className='songs'>
                 <div class="abc">
        		 <Carousel>
        			 <Carousel.Item>
        				<Row>
       					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/showcase/7rVW1aRWk5/rVW1jAYbk5/size_m_1634543388.webp" alt=""/></a></Col>
      					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/showcase/XzVWRLKdqR/zVWRJ71Wdq/size_m_1636734477.webp" alt=""/></a></Col>
          				  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/showcase/0wrb4qNKLg/0wrb45AKLg/size_m_1641836617.webp" alt=""/></a></Col>
        				</Row>
   				 </Carousel.Item>
   			         <Carousel.Item>
   				        <Row>
       					  <Col><a href="" class="banner"><img className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/showcase/a7LWBkzbzX/a7LWBNjWzX/size_m_1641783636.webp" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/images/showcase/1641050331_909.jpg" alt=""/></a></Col>
      				          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/images/showcase/1575482972_7206.jpg" alt=""/></a></Col>
 					</Row>
 			       </Carousel.Item>
  			       <Carousel.Item>
 					<Row>
  					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/images/showcase/1619693836_8059.jpg" alt=""/></a></Col>
   					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/showcase/DwPKOBbqVZ/wPKOznPbqV/size_l_1635507539.webp" alt=""/></a></Col>
          				  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/showcase/9MAWe7KyJe/9MAWelG3yJ/size_l_1632642126.webp" alt=""/></a></Col>
  				       </Row>
			      </Carousel.Item>
		      </Carousel>
                 </div>
             <p class="recent"><b>Trending Songs</b>
             <a href="" class="see" s>See All</a></p>
            <div class="abcd">
        		 <Carousel>
        			 <Carousel.Item>
        				<Row>
       					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/JD2KJAbOLw/2KJyNVRNbO/size_m.jpg" alt=""/></a></Col>
      					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/01A3mrWNQX/A3maO5N53N/size_m.jpg" alt=""/></a></Col>
          				  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/BZgWoOW2d9/gWoQJyZOK2/size_m.jpg" alt=""/></a></Col>
                                          <Col><a href="" class="banner"><img className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/0wrb4kNWLg/rb4q2pAaKL/size_m.jpg" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/9MAWe97WyJ/AWe9Emv7Wy/size_m.jpg" alt=""/></a></Col>
        				</Row>
   				 </Carousel.Item>
   			         <Carousel.Item>
   				        <Row>
       					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/song/0wrb4qNKLg/rb4wDBGMWL/size_m_1638769545.webp" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/21GWwR3pkg/GWwr1edQ3p/size_m.jpg" alt=""/></a></Col>
      				          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/BZgWoQOK2d/gWoQo1j7K2/size_m.jpg" alt=""/></a></Col>
                                          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/9MAWe97WyJ/AWe97o45Wy/size_m.jpg" alt=""/></a></Col>
           				   <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/song/lJvKa16KDV/vKa9BxOXKD/size_m_1638938965.webp" alt=""/></a></Col>
 					</Row>
 			       </Carousel.Item>
  			       <Carousel.Item>
 					<Row>
  					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/song/lJvKa16KDV/vKa9BxOXKD/size_m_1638938965.webp" alt=""/></a></Col>
   					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/song/2lV3d1WRgB/V3dDnzJZ3R/size_m_1638153832.webp" alt=""/></a></Col>
          				  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/MmqK5pEbwR/qK5pmMdEbw/size_m_1637318611.webp" alt=""/></a></Col>
					    <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/g4w3vwrWjJ/w3vwpB5rWj/size_m.jpg" alt=""/></a></Col>
          				  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/4Z9bqgo3yQ/9bqgnJDo3y/size_m.jpg" alt=""/></a></Col>
  				       </Row>
			      </Carousel.Item>
		      </Carousel>
                 </div>

             <p class="recent"><b>New Releases</b>
             <a href="" class="see1">See All</a></p>
              <div class="abcd">
        		 <Carousel>
        			 <Carousel.Item>
        				<Row>
       					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/ZaP37OR3Dy/P37OqNwv3D/size_m.jpg" alt=""/></a></Col>
      					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/4Z9bqo3yQn/9bqgBDP13y/size_m_1640343731.webp" alt=""/></a></Col>
          				  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/10q3Zj1352/q3ZRQpaX35/size_m.jpg" alt=""/></a></Col>
                                          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/XYybzNrb2g/ybzNpa0Eb2/size_m.jpg" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/R7vKX66Wmr/vKX6DZlVWm/size_m.jpg" alt=""/></a></Col>
        				</Row>
   				 </Carousel.Item>
   			         <Carousel.Item>
   				        <Row>
       					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/R7vKX66Wmr/vKX6DZlVWm/size_m.jpg" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/a7LWBzWzXA/LWBkoGPNbz/size_m.jpg" alt=""/></a></Col>
      				          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/XYybzNrb2g/ybzN18w4b2/size_m.jpg" alt=""/></a></Col>
					   <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/qaLKY23pO4/LKY6DJBg3p/size_m.jpg" alt=""/></a></Col>
      				          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/oAJbDlbnL8/JbDEeMJxKn/size_m.jpg" alt=""/></a></Col>
 					</Row>
 			       </Carousel.Item>
  			       <Carousel.Item>
 					<Row>
  					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/21GWwR3pkg/GWwrX9VL3p/size_m_1640274059.webp" alt=""/></a></Col>
   					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/g4w3vwrWjJ/w3vwpB5rWj/size_m.jpg" alt=""/></a></Col>
          				  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/qa4WEqqWP1/4WEkNE0GKP/size_m.jpg" alt=""/></a></Col>
                                          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/ogNWkDbmXJ/NWkLqjAXbm/size_m_1639643114.webp" alt=""/></a></Col>
          				  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/0wrb4N3Lg7/rb4q2RVVKL/size_m.jpg" alt=""/></a></Col>
  				       </Row>
			      </Carousel.Item>
		      </Carousel>
                 </div>

            <p class="recent"><b>Top Charts</b>
             <a href="" class="see2">See All</a></p>
               <div class="abcd">
        		 <Carousel>
        			 <Carousel.Item>
        				<Row>
       					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/P7m3GNKqxo/7m3GQwOybq/size_m_1636699645.webp" alt=""/></a></Col>
      					  <Col><a href="" class="banner"><img className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/w4MKPgOboj/4MKP2xArWo/size_m_1641545494.webp" alt=""/></a></Col>
          				  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/oAJbDElKnL/JbDEDR0lKn/size_m_1641808312.webp" alt=""/></a></Col>
                                          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/oAJbDlbnL8/JbDeDmpvKn/size_m_1638353836.webp" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/jBr3gybR1m/r3gmPRNybR/size_m_1641546010.webp" alt=""/></a></Col>
        				</Row>
   				 </Carousel.Item>
   			         <Carousel.Item>
   				        <Row>
       					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/Dk9KNk23Bx/9KN6Xy6dKB/size_m_1641627582.webp" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/zLp36v3rGe/Lp36kP5NWr/size_m_1636699773.webp" alt=""/></a></Col>
      				          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/kGxbn03y4r/xbnwx1L1Ky/size_m_1641545830.webp" alt=""/></a></Col>
					   <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/7rVW1aRWk5/VW1Q4oQOWk/size_m_1641278793.webp" alt=""/></a></Col>
      				          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/0wrb4kNWLg/rb4qAqpLKL/size_m_1641545670.webp" alt=""/></a></Col>
 					</Row>
 			       </Carousel.Item>
  			       <Carousel.Item>
 					<Row>
  					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/10q3ZR1352/q3Z59rOnK5/size_m_1636701060.webp" alt=""/></a></Col>
   					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/R7vKX66Wmr/vKX1v0Jg3m/size_m_1636699832.webp" alt=""/></a></Col>
          				  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/z8k3yd1Krx/k3yMaGGP3r/size_m_1640152579.webp" alt=""/></a></Col>
					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/d41WjznWPL/41WjBoN5WP/size_m_1636699754.webp" alt=""/></a></Col>
   					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/21GWwR3pkg/1GWwOPLQWp/size_m_1636701167.webp" alt=""/></a></Col>
  				       </Row>
			      </Carousel.Item>
		      </Carousel>
                 </div>

           <p class="recent"><b>Featured Artists</b>
             <a href="" class="see3">See All</a></p>
               <div class="abcd1">
        		 <Carousel>
        			 <Carousel.Item>
        				<Row>
       					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1638898900.webp" alt=""/></a></Col>
      					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/artists/21GWwrR3pk/1GWwYz4DKp/size_m_1567610470.webp" alt=""/></a></Col>
          				  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/artists/zLp36PvbrG/Lp36AR0KrG/size_m_1516707336.webp" alt=""/></a></Col>
                                          <Col><a href="" class="banner"><img className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/artists/Rz4W87v3xD/Rz4W8ppWxD/size_m_1638817418.webp" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/artists/9MAWe7KyJe/MAWe9lBGWy/size_m_1516185303.webp" alt=""/></a></Col>
        				</Row>
   				 </Carousel.Item>
   			         <Carousel.Item>
   				        <Row>
       					  <Col><a href="" class="banner"><img className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/artists/6Zxb2r7b9w/Zxb2xp0w39/size_m.jpg" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/artists/w4MKPDOKoj/4MKPgoQgbo/size_m_1516802409.webp" alt=""/></a></Col>
      				          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/artists/ZaP37OR3Dy/ZaP37lBWDy/size_m_1516796833.webp" alt=""/></a></Col>
                                          <Col><a href="" class="banner"><img className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNgP763B/size_m_1595857138.webp" alt=""/></a></Col>
      				          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1638898900.webp" alt=""/></a></Col>
 					</Row>
 			       </Carousel.Item>
  			 
		      </Carousel>
                 </div>

            <p class="recent"><b>Radio</b>
             <a href="" class="see4">See All</a></p>
               <div class="abcd1">
        		 <Carousel>
        			 <Carousel.Item>
        				<Row>
       					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/m_radio_circle/w4MKPObojg/w4MKPObojg/size_m_1563783532.webp" alt=""/></a></Col>
      					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/g_radio_circle/4Z9bqo3yQn/4Z9bqmJbyQ/size_m_1563778936.webp" alt=""/></a></Col>
          				  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/g_radio_circle/DwPKOxB3qV/DwPKOwkKqV/size_m_1567583117.webp" alt=""/></a></Col>
                                          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/m_radio_circle/Bp1bAnK029/Bp1bAnK029/size_m_1637922143.webp" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/m_radio_circle/XzVWRLKdqR/XzVWRLKdqR/size_m_1637661317.webp" alt=""/></a></Col>
        				</Row>
   				 </Carousel.Item>
   			         <Carousel.Item>
   				        <Row>
       					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/g_radio_circle/21GWwrR3pk/21GWwe4Kpk/size_m_1588760360.webp" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/g_radio_circle/4Z9bqZoKyQ/4Z9bqNPKyQ/size_m_1628848671.webp" alt=""/></a></Col>
      				          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/m_radio_circle/qaLKY23pO4/qaLKY23pO4/size_m_1570442932.webp" alt=""/></a></Col>
   					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/g_radio_circle/a7LWBkzbzX/a7LWBwkbzX/size_m_1567583320.webp" alt=""/></a></Col>
          				  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/m_radio_circle/qa4WEqWP1p/qa4WEqWP1p/size_m_1563783408.webp" alt=""/></a></Col>
  				       </Row>
			      </Carousel.Item>
                               <Carousel.Item>
   				        <Row>
       					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/m_radio_circle/qa4WEqWP1p/qa4WEqWP1p/size_m_1563783408.webp" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/g_radio_circle/a7LWBaz3zX/a7LWBBDWzX/size_m_1563780224.webp" alt=""/></a></Col>
      				          <Col><a href="" class="banner"><img className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/g_radio_circle/10q3ZR1352/10q3Zm2K52/size_m_1563778678.webp" alt=""/></a></Col>
   					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/m_radio_circle/6Zxb27K9wN/6Zxb27K9wN/size_m_1586325953.webp" alt=""/></a></Col>
          				  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/g_radio_circle/0wrb4kNWLg/0wrb4jV3Lg/size_m_1563780013.webp" alt=""/></a></Col>
  				       </Row>
			      </Carousel.Item>
		      </Carousel>
                 </div>
               <p class="recent"><b>Just Arrived</b>
             <a href="" class="see1">See All</a></p>
               <div class="abcd">
        		 <Carousel>
        			 <Carousel.Item>
        				<Row>
       					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/NOXWVRgWkq/XWVVvo10Wk/size_m_1640074701.webp" alt=""/></a></Col>
      					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/MmqK5EKwRO/qK57eLrXWw/size_m_1641751168.webp" alt=""/></a></Col>
          				  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/81l3Me3rMx/l3MZ7qeGWr/size_m_1641783646.webp" alt=""/></a></Col>
                                          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/6Zxb27K9wN/xb2r9oA7b9/size_m_1640073413.webp" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/MmqK5EKwRO/qK5pXnVmbw/size_m_1640322290.webp" alt=""/></a></Col>
        				</Row>
   				 </Carousel.Item>
   			         <Carousel.Item>
   				        <Row>
       					  <Col><a href="" class="banner"><img className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/Oxd3xzPbgV/d3xDxAmq3g/size_m_1640334287.webp" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/0wrb4N3Lg7/rb4q9jJaKL/size_m_1640073469.webp" alt=""/></a></Col>
      				          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/81l3Mye3rM/l3M5LZVe3r/size_m_1641799390.webp" alt=""/></a></Col>
                                          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/Bp1bAynb02/1bALA4e4W0/size_m_1641386372.webp" alt=""/></a></Col>
      				          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/Bp1bAynb02/1bALA4e4W0/size_m_1641386372.webp" alt=""/></a></Col>
 					</Row>
 			       </Carousel.Item>
  			 
		      </Carousel>
                 </div>
                 <p class="recent"><b>Retro Playlists</b>
             <a href="" class="see">See All</a></p>
               <div class="abcd">
        		 <Carousel>
        			 <Carousel.Item>
        				<Row>
       					  <Col><a href="" class="banner"><img className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/qaLKY623pO/aLKYwwezWp/size_m_1634897119.webp" alt=""/></a></Col>
      					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/d41WjznWPL/41WjBoN5WP/size_m_1636699754.webp" alt=""/></a></Col>
          				  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/oAJbDElKnL/AJbDljjlbn/size_m_1633416740.webp" alt=""/></a></Col>
                                          <Col><a href="" class="banner"><img className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/D0PKLrWGl9/0PKLMznZ3G/size_m_1635419806.webp" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/NOXWVgbkqL/OXWVQBqN3k/size_m_1634897255.webp" alt=""/></a></Col>
        				</Row>
   				 </Carousel.Item>
   			         <Carousel.Item>
   				        <Row>
       					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/R7vKX6WmrP/vKX6rrdVWm/size_m_1636699556.webp" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/mGjKr1b6zX/GjKreMrjb6/size_m_1633416533.webp" alt=""/></a></Col>
      				          <Col><a href="" class="banner"><img className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/P7m3GvNKqx/7m3GYJJ6bq/size_m_1634897812.webp" alt=""/></a></Col>
                                          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/ogNWkLDbmX/NWkL76AQbm/size_m_1633417105.webp" alt=""/></a></Col>
      				          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/lJvKa63DV9/JvKa9VQAKD/size_m_1633416958.webp" alt=""/></a></Col>
 					</Row>
 			       </Carousel.Item>
  			 
		      </Carousel>
                 </div>
		    <p class="recent"><b>Gaana Recommends</b>
             <a href="" class="see5">See All</a></p>
               <div class="abcd">
        		 <Carousel>
        			 <Carousel.Item>
        				<Row>
       					  <Col><a href="" class="banner"><img className="d-block w-100" src="https://a10.gaanacdn.com/gn_img/albums/NOXWVgbkqL/OXWVNngWkq/size_m.webp" alt=""/></a></Col>
      					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/9MAWe7KyJe/MAWeeV05Wy/size_m_1641530991.webp" alt=""/></a></Col>
          				  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/oAJbDlbnL8/JbD7mmxqWn/size_m_1626453754.webp" alt=""/></a></Col>
                                          <Col><a href="" class="banner"><img className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/XzVWRLKdqR/zVWRmox63d/size_m_1625063909.webp" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/Rz4W8vKxD5/4W8ed91Jbx/size_m_1631767505.webp" alt=""/></a></Col>
        				</Row>
   				 </Carousel.Item>
   			         <Carousel.Item>
   				        <Row>
       					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/9En3pqeWXD/En3pDq883X/size_m_1619805868.webp" alt=""/></a></Col>
    					  <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/P7m3GNKqxo/7m3GOVNN3q/size_m_1640589341.webp" alt=""/></a></Col>
      				          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/z8k3yd1Krx/k3yqaRZd3r/size_m_1629466625.webp" alt=""/></a></Col>
                                          <Col><a href="" class="banner"><img  className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/01A3mar3NQ/A3mOzpkdbN/size_m_1641351758.webp" alt=""/></a></Col>
      				          <Col><a href="" class="banner"><img className="d-block w-100" src="https://a10.gaanacdn.com/gn_pl_img/playlists/YoEWlabzXB/oEWlYkoQbz/size_m_1630155961.webp" alt=""/></a></Col>
 					</Row>
 			       </Carousel.Item>
  			 
		      </Carousel>
                 </div>
            
        </div>
    )
}

export default Songs
