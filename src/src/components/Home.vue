<template>
  <v-container>
    <div 
    class="landing" id="landing">
      <v-badge color="black" content="TM"><v-img style="margin: auto;" src="@/assets/cryptfo.png" width="375" ></v-img></v-badge>
      <p style="font-family: Times New Roman, Times, serif;">created by Dom-inators<v-icon size="10">fas fa-copyright</v-icon></p>
      <div class="coins">
        <img src="@/assets/btc.png">
        <img src="@/assets/eth.png">
        <img src="@/assets/ltc.png">
        <img src="@/assets/doge.png">
        <img src="../assets/sol.png">
        <img src="../assets/cardano.png">
      </div>
      <br>
      <button type="button"><a href="#about"><v-icon>fas fa-chevron-down</v-icon></a></button>
    </div>

    <v-divider horizontal></v-divider>
    <div
    class="about"
    id="about"
    >
      <h2>Mission</h2>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                      deserunt mollit anim id est laborum."</p>
    </div>
    <v-divider horizontal></v-divider>
    <div
    class="creators">
      <h2>Meet the developers</h2>
    </div>
    
    <div>

      <v-card
      class="mx-auto mb-5"
      max-width="100%"
      mb-10
      style="border-radius:20px; font-family: Times New Roman, Times, serif;">

        <v-img src="https://wallpapercave.com/wp/wp3764720.jpg"
                height="325">

          <v-row >
            <v-col
              cols="16"
              sm="4">

              <div class="ml-5" style="color:White;">
                <h2>Carly Perdue</h2>
                <h5 style="color:lightGray;">Taylor, MI</h5>
              </div>
            
                <v-avatar
                  class="profile ml-5"
                  size="275">
                  <v-img alt="Photo of Carly Perdue" src="https://srkheadshotday.com/wp-content/uploads/Danielle_Lussier_Q4332_Crop32.jpg"></v-img>
                </v-avatar>

            </v-col>
            <v-divider vertical></v-divider>
            <v-col 
              cols="12"
              sm="6">
                <div style="color: white; font-size: 20px;">
                  
                  <h1>About me</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                      deserunt mollit anim id est laborum."
                    </p>
                </div>
            </v-col>
            <v-divider vertical></v-divider>
          
          </v-row>
        </v-img>
      </v-card>
  
 
      <v-card
      class="mx-auto mb-5"
      max-width="100%"
      mb-10
      style="border-radius:20px; font-family: Times New Roman, Times, serif;">

        <v-img src="https://wallpapercave.com/wp/wp3764720.jpg"
                height="325">

          <v-row >
            <v-col
              cols="16"
              sm="4">

              <div class="ml-5" style="color:White;">
                <h2>Priscilla Ontiveros</h2>
                <h5 style="color:lightGray;">Taylor, MI</h5>
              </div>
            
                <v-avatar
                  class="profile ml-5"
                  size="275">
                  <v-img src="https://media.istockphoto.com/photos/portrait-of-a-young-woman-in-the-city-picture-id1007833684?k=20&m=1007833684&s=612x612&w=0&h=lKjFbYYw1oVS69ZvcZqJCJTadXUpugXhnl_Az2H4iUg="></v-img>
                </v-avatar>

            </v-col>
            <v-divider vertical></v-divider>
            <v-col 
              cols="12"
              sm="6">
                <div style="color: white; font-size: 20px;">
                  
                  <h1>About me</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                      deserunt mollit anim id est laborum."
                    </p>
                </div>
            </v-col>
            <v-divider vertical></v-divider>
          
          </v-row>
        </v-img>
      </v-card>        
  

      <v-card
      class="mx-auto mb-5"
      max-width="100%"
      mb-10
      style="border-radius:20px; font-family: Times New Roman, Times, serif;">

        <v-img src="https://wallpapercave.com/wp/wp3764720.jpg"
                height="325">

          <v-row >
            <v-col
              cols="16"
              sm="4">

              <div class="ml-5" style="color:White;">
                <h2>Devin Merchant</h2>
                <h5 style="color:lightGray;">Taylor, MI</h5>
              </div>
            
                <v-avatar
                  class="profile ml-5"
                  size="275">
                  <v-img src="https://media.istockphoto.com/photos/real-looking-healthy-guy-smiling-outdoors-picture-id1190049544?k=20&m=1190049544&s=612x612&w=0&h=IYHCaV-kb1FC8ruoCCEdhQkWo2UEmCQAbLa7FZ5Cv_U="></v-img>
                </v-avatar>

            </v-col>
            <v-divider vertical></v-divider>
            <v-col 
              cols="12"
              sm="6">
                <div style="color: white; font-size: 20px;">
                  
                  <h1>About me</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                      deserunt mollit anim id est laborum."
                    </p>
                </div>
            </v-col>
            <v-divider vertical></v-divider>
          
          </v-row>
        </v-img>
      </v-card>
       

      <v-card
      class="mx-auto mb-5"
      max-width="100%"
      mb-10
      style="border-radius:20px; font-family: Times New Roman, Times, serif;">

        <v-img src="https://wallpapercave.com/wp/wp3764720.jpg"
                height="325">

          <v-row >
            <v-col
              cols="16"
              sm="4">

              <div class="ml-5" style="color:White;">
                <h2>Dayaseh Johnson</h2>
                <h5 style="color:lightGray;">Taylor, MI</h5>
              </div>
            
                <v-avatar
                  class="profile ml-5"
                  size="275">
                  <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                </v-avatar>

            </v-col>
            <v-divider vertical></v-divider>
            <v-col 
              cols="12"
              sm="6">
                <div style="color: white; font-size: 20px;">
                  
                  <h1>About me</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                      deserunt mollit anim id est laborum."
                    </p>
                </div>
            </v-col>
            <v-divider vertical></v-divider>
          
          </v-row>
        </v-img>
      </v-card>

    </div>
    <!--
    <div class="rows">
      <div class="column">
        <img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg">
        <h2>Dayaseh Johnson</h2>
        <h3>Computer Science</h3>
        <h4>Taylor, MI</h4>
      </div>
      <div class="column">
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                      deserunt mollit anim id est laborum."</p>
      </div>
    </div>
-->
<!--
    <div class="footer">
      <div class="frow">

        <div class="fcolumn">
          <h4>Careers</h4>
          <a style="color:black;" href="">Apply here</a>
        </div>

        <div class="fcolumn">
          <h4>Follow Us!</h4>
          <a href=""> <v-icon> fab fa-twitter </v-icon> </a> <br>
          <a href=""> <v-icon> fab fa-instagram </v-icon> </a> <br>
          <a href=""> <v-icon> fab fa-pinterest </v-icon> </a> <br>
          <a href=""> <v-icon> fab fa-facebook </v-icon> </a> <br>
        </div>

        <div class="fcolumn">
          <h4>Legal</h4>
          <p> This wesite is purely for entertainment. Some information on this sight may be inaccurate.</p>
        </div>
      </div>
-->
<div class="footer">
      <v-img style="margin:auto;" src="@/assets/cryptfo.png" max-width="200"></v-img>
      <a href=""> <v-icon> fab fa-facebook </v-icon> </a>
      <a href=""> <v-icon> fab fa-pinterest </v-icon> </a>
      <a href=""> <v-icon> fab fa-instagram </v-icon> </a>
      <a href=""> <v-icon> fab fa-twitter </v-icon> </a>
    </div>
  </v-container>

</template>


<style>
  .landing{
    margin-top: 15%;
    height: 500px;
    text-align: center;
    font-size: 325%;
  }

  .landing p{
    font-size: medium;
    color:gray;
  }
  .coins{
    margin: auto;
    text-align: center;
    height: 30px;
  }
  .coins img{
    margin:auto;
    height: 75%;
    margin-left: 5px;
    margin-right: 5px;
  }
  .creators{
    height: 225px;
    text-align: center;
    font-size: 325%;
    width: 100%;
    font-family: 'Courier New', Courier, monospace;
  }
  .creators p{
    font-size: medium;
    color:gray;
  }
  .about{
    height: 550px;
    text-align: center;
    font-size: 325%;
    width: 100%;
    font-family: 'Courier New', Courier, monospace;
    margin-top: 7.5%;
  }

  .about p{
    font-size: 55%;
    color:black;
  }
  a{
    text-decoration: none;
  }
  .footer{
    background-color: #16697a;
    width: 100%;
    margin-top: 5%;
  }

  .column{
    float: left;
    width: 50%;
    height: 275px;
  }
  .column img{
    height: 65%;
    width: 70%;
    border-radius: 15px;
  }
  .column p{
    color: black;
    font-size: large;
  }
  .column h4{
    color: black;
  }
  .rows::after{
    content: "";
    display: table;
    clear: both;
  }

  .rows{
    margin-top: 25px;
    font-family: 'Courier New', Courier, monospace;
  }
  .frow::after{
    content: "";
    display: table;
    clear: both;
  }
  .fcolumn{
    float: left;
    width: 33%;
    text-align: center;
  }
  .frow{
      color:black;
  }
  
  .footer{
    text-align: center;
  }
  .footer a{
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
</style>
<script>
export default {

}
</script>
