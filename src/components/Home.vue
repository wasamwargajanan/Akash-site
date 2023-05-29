<template>
    <div>
       <v-container>
        <v-row class="main-content">
            <v-col cols="12" md="6" >
                <h1 class="heading heading-content">DIGITAL LED SIGNS</h1>
            <h2 class="sub-heading-content">New Generation LED sign banners</h2>
            <ul v-for="text,id in ledVariety" :key="id" class="mt-6">
              <li><h3>{{ text }}</h3></li>
            </ul>
            </v-col>
            <v-col cols="12" md="6">
                <v-img src="@/5b2751fbab52d604549aa476.webp">

                </v-img>
            </v-col>
        </v-row>

        <v-row class="mt-8">
          <v-col cols="12" md="4">
            <div class="sections1">
              <h2>ON TIME DELIVERY</h2>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="sections2">
              <h2>BEST TECHNOLOGY</h2>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="sections3">
              <h2>ALWAYS BEST PRICE</h2>
            </div>
          </v-col>
        </v-row>
        <p class="text-center services mt-12">OUR SERVICES</p> 
        <h1 class="text-center  mb-8">We Offer a Wide
Variety of Displays</h1>
        <v-row>           
                    
          <v-col cols="12" md="4">
            <div class="info-container">
              <v-img
              src="@/5b2751fbab52d604549aa476.webp"
              class="my-4 ledImg"
              ></v-img>
              <h2 class="mb-4">LED SCROLLING BOARD</h2>
              <p>
                PixelDiode, We Have varieties of color options in single color led display boards, we offer Red, green, Blue, Yellow, Pink, White color display Boards with user customization.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="info-container">
              <v-img
              src="@/LED-Display-Board-PNG-Image.png"
              class="my-4 ledImg"
              ></v-img>
              <h2 class="mb-4">FULL COLOR DISPLAY</h2>
              <p>
                RGB Led Board offers a variety of color in single Boards, Supports animation, Multi-color Text, clock, temperature, the Multicolor background can be displayed on this board.
               
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="info-container">
              <v-img
              src="@/Home-RPC.png"
               class="ledImg my-4"
              ></v-img>
              <h2 class="mb-4">LED VIDEO WALL</h2>
              <p>
                SMD technology based outdoor LED. Video Screen are suitable for larger audience and open premises. We have P10, P8, P6, P4, P4.8, P3, P2.5 suitable for outdoor and indoor. 
              </p>
            </div>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col cols="12">
            <v-img src="@/clients_banner-1-1024x160.jpg">             
            </v-img>
          </v-col>

          <v-col cols="12">
            <div class="priceDiv">
              <h1 class="text-center black--text">GET A PRICE FOR YOUR OUTDOOR DIGITAL BANNER</h1>
              <p class="text-center black--text">It’s very easy! Just fill the sizes you are interested in and get your quote now</p>
              <div class="d-flex">
                <v-text-field
                v-model="boardWidth"
                color="white"
                label="Width ( ft )"
                class="mr-6"
                outlined
                dense
                ></v-text-field>
                <v-text-field
                v-model="boardHeight"
                color="white"
                label="Height ( ft )"
                class="mr-6"
                outlined
                dense
                ></v-text-field>
                <v-hover v-slot="{ hover }">
                  <v-btn
                  :outlined="hover ? true:false"
                  :color="hover ? 'white' : 'purple'"                  
                   tile
                   
                  @click="getPrice"
                  >GET A PRICE</v-btn>
                </v-hover>
                 
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row v-if="totalBoardSize">
          <v-col cols="12" md="4">
            <ul cols="12" class="priceList pa-md-3">
                <h1>Price List</h1>
                <li><h2>Normal Board Rate  = {{ nrmlPrice }}    </h2></li>
                <li><h2>BackLight Board Rate  = {{ backlightPrice }}  </h2></li>
                <li><h2>LED Board Rate  = {{ ledPrice }}  </h2></li>
              </ul>
          </v-col>
          <v-col cols="12" md="4">
            <ul class=" pa-md-3 priceList">
                <h1>Total Size</h1>
                <li><h2>Size is: {{ totalBoardSize }}ft</h2></li>
              </ul>
          </v-col>
          <v-col cols="12" md="4">
            <ul class=" pa-md-3 priceList">
                <h1>Total Amount</h1>
                <li><h2>Normal: {{ nrmlTotalPrice }}rs </h2></li>
                <li><h2>BackLight: {{ backlightTotalPrice }}rs </h2></li>
                <li><h2>LED: {{ ledTotalPrice }}rs </h2></li>
              </ul>
          </v-col>
        </v-row>
        
       </v-container>
    </div>
  </template>
  
  <script>
    export default {
      name: 'HomeVue',
  
      data: () => ({
        ledVariety:[
          "Rótulos de nueva generación para comercios",
          "Diferenciese de su competencia",
          "Inversion rentable rapida amortizacion"
        ],
        listOfBoards:[
          'Normal Board Rate',
          'BackLight Board Rate',
          'LED Board Rate'
        ],
        boardWidth:null,
        boardHeight:null,
        totalBoardSize:null,
        ledTotalPrice:null,
        backlightTotalPrice:null,
        nrmlTotalPrice:null,
        ledPrice:900,
        backlightPrice:700,
        nrmlPrice:500
      
      }),
      methods:{
        getPrice(){
          if(this.boardWidth && !this.boardHeight || !this.boardWidth && this.boardHeight || this.boardWidth == null && this.boardHeight == null){
            alert('please fill both the fields')
          }
          if(this.boardWidth && this.boardHeight){
           this.totalBoardSize =  this.boardWidth * this.boardHeight
            this.ledTotalPrice = this.totalBoardSize * this.ledPrice
            this.backlightTotalPrice = this.totalBoardSize * this.backlightPrice
            this.nrmlTotalPrice = this.totalBoardSize * this.nrmlPrice
          }


        }
      }
    }
  </script>
  <style>
  .main-content{
    position: relative;
  }
/* .heading-content{
    position: absolute;
    top: 150px;
    left: 60px;
} */
.heading{
    font-size: 55px;
}
.sub-heading-content{
    color: rgb(99, 95, 95);
}
.sections1{
  background: rgb(255, 0, 85);
  padding: 26px 18px;
}
.sections2{
  background: rgb(255, 0, 191);
  padding: 26px 18px;
}
.sections3{
  background: rgb(0, 153, 255);
  padding: 26px 18px;
}
.info-container{
  border: 1px solid rgb(92, 90, 90);
  padding: 15px 30px;
  max-height: 500px;
}
.services{
  font-weight: bold;
}
.ledImg{
  width: 300px;
  height: 100px;
  
}
.clients{
  background: white;
}
.priceDiv{
  background: rgb(247, 92, 36);
  border: 1px solid black;
  padding: 20px 35px;
}
.priceList{   
  background: rgb(102, 29, 2);
  list-style: none;
  }
 
</style>