function Navbar() {
  return (
    <header id="Frist " style={{backgroundColor:"#456"}} >
      <title>Portfolio</title>
    <nav className="navbar">
            <div  style={{color:"aqua"}}><h3  >Portfolio</h3></div>
      <ul style={{flex:40,justifyContent:"center",display:"flex",alignItems:"flex-end",gap:40}}>
        <a style={{color:"aqua"}} href="#navbar">Home</a>
        <a style={{color:"aqua"}} href="#about">About</a>
        <a style={{color:"aqua"}} href="#projects">Projects</a>
        <a style={{color:"aqua"}} href="#Skill">Skill</a>
        <a style={{color:"aqua"}} href="#contact">Contact Me </a>
      </ul>
    </nav>
    </header>
     );


}

export default Navbar;
