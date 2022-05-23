import React , {useEffect} from 'react'
import '../Navbar/navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      
      <div className="img0"><img src={require('../../img/logo.png')} /></div>
      
    
    
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <MenuIcon/>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i>Home</i>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
                <i>Ações</i>
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/voluntario" exact>
                <i>Voluntariado</i>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/engajar" exact>
                <i>Doações</i>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact>
                <i>Contato</i>
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/termo" exact>
                <i>Projetos</i>
              </NavLink>
            </li>
            
            
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;