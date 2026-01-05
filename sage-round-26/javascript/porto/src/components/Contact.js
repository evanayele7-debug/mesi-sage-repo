function Contact() {
  return (
    <section id="contact">
      	<header class="major last" style={{justifyItems:"center",color:"aqua"}} >
						<h2>Questions or comments?</h2>
					</header>
            <div style={{justifyItems:"center",color:'dark'}} >
              <div style={{flex:40,justifyContent:"center",display:"flex",alignItems:"flex-end"}}>
							<div class="col-6 col-12-mobilep">
								<input type="text" name="name" placeholder="Name" style={{width:440,height:50,backgroundColor:"aqua"}} />
							</div>
							<div class="col-6 col-12-mobilep" style={{color:"aqua"}}>
								<input type="email" name="email" placeholder="Email" style={{width:660,height:50,backgroundColor:"aqua"}} />
							</div>
              </div>
							<div class="col-12" style={{backgroundColor:"aqua"}}>
								<textarea name="message" placeholder="Message" rows="6" style={{width:850,backgroundColor:"aqua"}} ></textarea>
							</div>
							<div class="col-12">
								<ul class="actions special">
									<li><input type="submit"value=" Send Message" style={{width:500,height:50,backgroundColor:"aqua"}} /></li>
								</ul>
							</div>
              </div>
      <div style={{justifyItems:"center",color:'aqua'}} ><h1>Contact Me </h1>
       </div>
<div style={{color:'white'}} >
  <div style={{color:"aqua",}}>  <h3>Let's Work Together </h3>
  </div>
  <div style={{color:"#653"}}> <p>Email: evanayele7@gmail.com</p>
      <p>Phone:0982834527</p></div>
        <div style={{color:"white",justifyItems:"flex-end",flex:"flexs"}}>
          <ul class="copyright"style={{color:"#653"}}>
          		<li>&copy; Untitled. All rights reserved.</li>
					</ul>
          </div>
      </div>
      
       <div style={{alignItems:"flex-end",justifyContent:"left",display:"flex"}} >
       <ul class="icons">
						<a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a>
						<a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a>
						<a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a>
						<a href="#" class="icon brands fa-github"><span class="label">Github</span></a>
						<a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a>
        	</ul>
          </div>
    </section>
  );
}

export default Contact;
