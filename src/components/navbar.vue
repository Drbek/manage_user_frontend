<template>
<div class="columns">
    <!-- <div class="column is-2 is-hcentered">

    </div> -->
   <b-navbar class="column">
      
        <template #start>
            <b-navbar>
               <figure class="image is-96x96">
                    <img  alt="logo" src="../assets/img/BEKPIXCAM (8).png">
                </figure>
            </b-navbar>
            <b-navbar-item class="has-text-black dropdown" v-for="n in nav" @click="displaySub(n.subItem,n.img)"  :key="n.label" href="#">
                {{ n.label }}
            </b-navbar-item>
             <b-navbar-item href="#">
                Promotion
            </b-navbar-item>
        
            <b-navbar-dropdown label="Concours photo">
                <b-navbar-item href="#">
                   Poster votre photo
                </b-navbar-item>
                <b-navbar-item href="#">
                    Voir les photos
                </b-navbar-item>
            </b-navbar-dropdown>  
        </template>

        <template #end>
            <b-navbar-item v-if="!getUser" tag="div">
                <div class="buttons">
                    
                   <router-link to="/login"> <a class="button is-light">
                        Se connecter
                    </a></router-link>
                </div>
            </b-navbar-item>
            <b-navbar-item v-if="getUser" tag="div">
               <div class="buttons">
                    
                    <a @click="logout" class="button is-light">
                        Logout
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    <div v-show="isSub" @mouseleave="isSub=false" style="margin-top: 150px" class="is-overlay column dropdown-content">
        <div class="columns  has-background-light">
            <div class="is-3  column is-pulled-right menu mt-5">
                <ul v-for="s in subItemActive" :key="s.label" class="menu-list">
                  <router-link to="/produit">  <li><a>{{ s.label }}</a></li></router-link>
                </ul>
                 
                
            </div>
            <div class=" column is-8">
                <figure class="image m-5">
                   <img :src="imgActive" alt="" >
                </figure>
               
            </div>
        </div>
    </div>
</div>
    
</template>
<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  },
  data(){
return {
    nav:[
        {
            label:"Calendriers et Agenda",
            img:require("@/assets/img/Agendas-calendriers-07-2020.jpg"),
            subItem:
                   [
                       {label:"Calendriers muraux",link:"/"},
                       {label:"Calendriers de bureau",link:"/"},
                       {label:"Calendriers de l'avant",link:"/"},
                       {label:"Agenda photo",link:"/"},
                       {label:"Calendriers photo à petit prix",link:"/"},
                   ]
        },
        {
            label:"Livres Photo",
            img:require("@/assets/img/Agendas-calendriers-07-2020.jpg"),
            subItem:
                   [
                       {label:"Paysage",link:"/"},
                       {label:"Carré",link:"/"},
                       {label:"Portrait",link:"/"},
                       {label:"Livres photo ouverture à plat",link:"/"},
                       {label:"Facile, rapide et à petit prix",link:"/"},
                       {label:"Livres photo à fenêtre",link:"/"},
                       {label:"Livres photo par occasion",link:"/"},
                   ]
        },
        {
            label:"Tirages Photo",
            img:require("@/assets/img/Agendas-calendriers-07-2020.jpg"),
            subItem:
                   [
                       {label:"Tirages photo à format standard",link:"/"},
                       {label:"Agrandissement photo et poster",link:"/"},
                       {label:"Tirage photo vintage",link:"/"},
                       {label:"Livres photo ouverture à plat",link:"/"},
                       {label:"Facile, rapide et à petit prix",link:"/"},
                       {label:"Livres photo à fenêtre",link:"/"},
                       {label:"Livres photo par occasion",link:"/"},
                   ]
        },
        {
            label:"Déco murale",
            img:require("@/assets/img/Agendas-calendriers-07-2020.jpg"),
            subItem:
                   [
                       {label:"Posters photo et encadrées",link:"/"},
                       {label:"Tableaux photo",link:"/"},
                       {label:"Photo sur étoile",link:"/"},
                       {label:"Poster tissu à suspendre",link:"/"},
                       {label:"Pêles-Mêles",link:"/"},
                       {label:"Photos sur bois",link:"/"},
                       {label:"Magnets",link:"/"},
                   ]
        },
        {
            label:"Maison et Objets",
            img:require("@/assets/img/Agendas-calendriers-07-2020.jpg"),
            subItem:
                   [
                       {label:"Jeux personnalisés",link:"/"},
                       {label:"Objets et jeux personnalisés",link:"/"},
                       {label:"Textile personnalisé",link:"/"},
                       {label:"Mugs et gourdes personnalisés",link:"/"},
                       {label:"Magnets",link:"/"},
                       {label:"Boites à photo",link:"/"},
                       {label:"Bloc photo bois",link:"/"},
                       {label:"Décoration de noêl",link:"/"},
                   ]
        },
        {
            label:"Cartes de voeux",
            img:require("@/assets/img/Agendas-calendriers-07-2020.jpg"),
            subItem:
                   [
                       {label:"Voeux",link:"/"},
                       {label:"Naissance",link:"/"},
                       {label:"Mariage",link:"/"},
                       {label:"Fête et Anniversaire",link:"/"},
                       {label:"Baptême et communion",link:"/"},
                       {label:"Deuil",link:"/"},
                       {label:"Modèles vierges",link:"/"},
                       {label:"Faire-part par format",link:"/"},
                   ]
        }
        
        ],
isSub:false,
subItemActive:[],
imgActive:''
}
  },
  methods:{
      displaySub(sub,img){
          console.log(this.isSub)
        this.isSub=true
        this.subItemActive=sub
        this.imgActive=img
      },
      logout(){
          this.$store.commit('setUser',null)
          this.$router.push('/login')
      }
  },
  computed:{
    getUser(){
        console.log(this.$store.state.user)
      return this.$store.state.user;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dropdown-content {
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  width: 100%;
  left: 0;
  z-index: 1;
  overflow-block:inherit;
}
.dropdown {
  float: left;
  overflow: hidden;
}
.navbar a:hover, .dropdown:hover {
  
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>