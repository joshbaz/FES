<template>
  <v-content>
     <v-img :src="head__title" class="screen">
     <v-content>
       <v-layout column justify-center style="margin-top:13%">
         <v-card data-aos="zoom-in" color="transparent" flat id="fes-intro">
            <h1>Transforming the learning experience</h1>
         </v-card>
         <v-layout column justify-center align-center>
            <v-card  data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" color="transparent" flat id="fes-intro">
               <p>Firefly Edtech Solutions is a management system solutions company that aims <br>
                to transform the education experience in the African contient by providing<br>
                solutions that produce unique learning and teaching experiences using the <br>
                latest emerging technologies.
            </p>
            </v-card>
          
         </v-layout>
       </v-layout>    
     </v-content>
     <img>
   </v-img>

   <v-layout column justify-center align-center id="fes-motivation">
     <h2 data-aos="fade-up">Our Motivation</h2>
   </v-layout>
    <v-layout row justify-space-around="" class="motivation__items">
          <v-card flat class="motivation__item text-center" data-aos="fade-up"  data-aos-delay="250">
             <img :src="journy">
             <p class="btn">OUR JOURNEY</p>
          </v-card>
          <v-card flat class="motivation__item text-center" data-aos="fade-up"  data-aos-delay="350">
             <img :src="crus">
             <p class="btn">OUR CRUCIBLE</p>
          </v-card>
          <v-card flat class="motivation__item text-center" data-aos="fade-up"  data-aos-delay="450">
            <img :src="design" >
            <p class="btn">CONCEPT & DESIGN</p>
          </v-card>
        </v-layout>

        <v-layout column justify-center align-center>
            <section id='fes-message'>
            <v-layout column justify-center align-center class="message__items">
                <h2 class="message__item">OUR JOURNEY</h2>
                <p>
                    When i learned accounting at college, it was not a nice experience. The teacher adopted a more teacher-<br>
                    centered approach, where he was in full control of the class. He was the only one who was responsible for<br>
                    imparting knowledge and he had always the final word. We, the students were spectators in class. It was<br>
                    mainly,"the teacher talks and we note down" with limited opportunities to comment or respond. His way<br>
                    of teaching accounting was not enjoyable at all. I had difficulties grasping the content. My parents were <br>
                    assured it would succeed because i was an exemplary student at mathematics in my A-levels.
                </p>
            </v-layout>
        </section>
        <section id='fes-message'>
            <v-layout column justify-center align-center class="message__items">
            <h2 class="message__item">OUR CRUCIBLE</h2>
            <p>
                Technology is the best approach that a teacher and student can use to implement a transformation in <br>
                achieving their learning objectives. The university college ICT infrastructure available was an Learning<br>
                Management System that was used to post students' grades, list reading materials and update crucial <br>
                communication to teachers and students; a universal email address domain given upon joining the <br>
                university; a huge team of computer science and IT staff to support students' and teachers' concerns on <br>
                about the application of their personal digital devices during on-campus and off-campus assignments<br>
                and obtain authorized access to ICT facilities on campus.
            </p>
            </v-layout>
        </section>
        <section id='fes-message'>
            <v-layout column justify-center align-center class="message__items">
            <h2 class="message__item">CONCEPT & DESIGN</h2>
            <p>
                Technology is the best approach that a teacher and student can use to implement a transformation in <br>
                achieving their learning objectives. The university college ICT infrastructure available was an Learning<br>
                Management System that was used to post students' grades, list reading materials and update crucial <br>
                communication to teachers and students; a universal email address domain given upon joining the <br>
                university; a huge team of computer science and IT staff to support students' and teachers' concerns on <br>
                about the application of their personal digital devices during on-campus and off-campus assignments<br>
                and obtain authorized access to ICT facilities on campus.
            </p>
            </v-layout>

        </section>
        </v-layout>

  </v-content>
</template>

<script>
export default {
  name:'contact',
  data: () => ({
     title:"About Us",

     //images
     head__title:'https://ik.imagekit.io/qpt2onjfe/fes/background_HRJ60zWCxI.svg',
     journy: 'https://ik.imagekit.io/qpt2onjfe/fes/journy-icon_XNqELlZDr.svg',
     crus:'https://ik.imagekit.io/qpt2onjfe/fes/crus-icon_Lxqq9-LGCr.svg',
     design:'https://ik.imagekit.io/qpt2onjfe/fes/design-icon_4d7CzCiAy.svg'

  }),
    head: {
        title: function () {
            return {
                inner: 'Firefly Edtech Solutions',
                complement: this.title
            }
        }
    },
    
  components: {
    //
  },
};
</script>

<style scoped>
.screen{
  height: 100vh;
}
#fes-intro > h1 {
    text-align: center;
    color: grey;
    font-size: 45px;
}
#fes-intro > h2 {
    text-align: center;
    color: #2612A6;
    font-size: 36px;
}
#fes-intro > p {
    text-align: center;
    padding-top: 4%;
    font-weight: bold;
    font-size: 20px;
}

.motivation__items{
 margin:6%
}


.motivation__item > img {
  width: 180px;
  height: auto;
  
}

p.btn {
    padding: 10px !important;
    background:#fda503;
    height: 3rem;
    border-radius: 25px !important;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    
    }


h2.message__item {
     padding: 10px !important;
    background:#fff4df;
    height: 3rem;
    border-radius: 25px !important;
      color: #5f5f5f;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px
}

</style>