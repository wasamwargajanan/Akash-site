<template>
    <div>
        <widget
          customHeader
          :name="`CMS`"
          title="<h1><span class='font-weight-bold'>Contact Us</span></h1>"
        >
        <div cols="12" slot="body" class="pt-2">
            <p class="text-center">Any question or remarks just write us a message</p>
            <v-row class="mt-10">
                <v-col cols="12"   md="4">
                    <v-card
                        class="mx-auto"
                        color="purple"
                        dark
                        height="425px"
                    >
                    <v-card-title>
                        <h2 class="my-4">Contact Information</h2>
                        
                    </v-card-title>
                    <v-card-text>
                        <p class="caption  ">
                            Fill up the form and our team will get back to you within 24 hours...
                        </p>
                    </v-card-text>

                    <v-card-text>
                        <span>
                            <v-icon class="pr-2">mdi-phone</v-icon>
                        +917777888854
                        </span>
                    </v-card-text>

                    <v-card-text>
                        <span>
                            <v-icon class="pr-2">mdi-email</v-icon>
                        test@gmail.com
                        </span>
                    </v-card-text>

                    <v-card-text>
                        <span>
                            <v-icon class="pr-2">mdi-map-marker</v-icon>
                        102 Streat 2714 Pune
                        </span>
                    </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12"   md="8">
                    <v-form v-model="valid">
                     <v-row>
                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="firstname"
                                :rules="nameRules"
                                :counter="10"
                                label="First name"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="lastname"
                                :rules="nameRules"
                                :counter="10"
                                label="Last name"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Telephone"                                 
                                :rules="phoneNumberRules"
                                v-model="telephone"                                 
                                @input="acceptNumber"                                 
                                color="primary"
                            ></v-text-field>
                            <span class="red--text caption ml-3" v-show="phoneNumberError">Telephone is required</span>
                        </v-col>
                        <v-col cols="12">
                            <span>
                                Tell us the reason why are you trying to contact us?
                            </span>
                            <v-radio-group
                            v-model="row"
                            row
                            class="my-6"
                            >
                            <v-radio
                                label="New board"
                                value="radio-1"
                            ></v-radio>
                            <v-radio
                                label="Existing board maintenance"
                                value="radio-2"
                            ></v-radio>
                            <v-radio
                                label="Visiting cards"
                                value="radio-3"
                            ></v-radio>
                            <v-radio
                                label="LED board"
                                value="radio-4"
                            ></v-radio>
                            <v-radio
                                label="others"
                                value="radio-5"
                            ></v-radio>
                            </v-radio-group>
                            <v-text-field
                                label="Message"                                 
                                v-model="telephone"                                 
                                color="primary"
                            ></v-text-field>
                        </v-col>
                        <v-btn
                        align="right"
                        color="purple"
                        
                        >
                        Send Message
                        </v-btn>
                     </v-row>
                    </v-form>
                </v-col>
            </v-row>
        </div>
    </widget>
    </div>
  </template>
  
  <script>
import Widget from './Widget.vue'

    export default {
      name: 'ContactUs',
      components:{Widget},
      data: () => ({
        valid: false,
      firstname: '',
      lastname: '',
      telephone:null,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      phoneNumberRules: [
      v => !!v || "Telephone is required",
      v => (v && v.length >= 8) || "Phone Number must be at least 8 characters"
    ],
      
      }),
      methods:{
        acceptNumber() {
        let x = this.telephone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        this.telephone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    },
      }
    }
  </script>
  