<template>
<div class="content">
    <div >
        <h1 style="text-align:center;">List of users</h1>

    </div> 
    <b-loading :is-full-page="isFullPage" v-model="isLoading" :can-cancel="true"></b-loading>
   <b-navbar>
        <template #end>
            <b-navbar-item  tag="div">
                <div class="buttons">
                    
                   <router-link to="/createUser"> <a class="button is-success">
                        Create user
                    </a></router-link>
                </div>
            </b-navbar-item>
            
        </template>
    </b-navbar>
    <div class="box has-background-danger" v-if="apiErrors.length!=0">
         <ol>
           <li v-for="s in apiErrors" :key="s">
           {{s}}
           </li>
         </ol>
       </div>
    <table class="table">
        <thead>
            <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Age</th>
            <th>Status</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
            <th><figure class="image is-32x32">
                            <img  alt="logo" :src="user.photoUrl">
                        </figure></th>
            
            <td>{{user.name}}</td>
            <td>{{user.surname}}</td>
            <td>{{user.email}}</td>
            <td>{{user.age}}</td>
            <td>{{user.actif==false?'Inactif':'Actif'}}</td>
            <td>
                    <router-link :to="{ name: 'modifyUser', params: {user:user}}"> 
                    <a class="button is-warning"  style="magin-right:5px;">
                            <span class="icon has-text-info">
                                <i class="fas fa-solid fa-pen"></i>
                            </span>
                     </a>
                    </router-link>
                    <a @click="deleteUser(user.id)" class="button is-danger">
                           <span class="icon has-text-info">
                            <i class="fas fa-solid fa-trash"></i>
                        </span>
                     </a>
                    
                    
            </td>
           </tr>
        </tbody>
    </table>
    
</div>
    
</template>
<script>
import api from '../api/http'
export default {
  name: 'Navbar',
  props: {
    msg: String
  },
  data(){
return {
    users:[],
    isLoading: false,
    isFullPage: true,
    apiErrors:[],
}
  },
  methods:{
      getUsers(){
         this.isLoading = true
       api.getAllUsers()
           .then((response)=>{
                    console.log(response)
                    this.isLoading = false
                     this.users=response.data;
            })   
            .catch((error)=>{console.log(error)})  
    },
    deleteUser(id){
        api.deleteUser(id)
           .then((response)=>{
               console.log(response)
               this.isLoading=false
               this.getUsers();
            })   
            .catch((error)=>
            {
                console.log(error.response.data)
                this.apiErrors=error.response.data.errors
                this.isLoading=false
            }) 
    }
  },
  computed:{
    
  },
  mounted() {
    this.getUsers()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .content{
      max-width:65%;
      margin-top:8%;
      margin-left: auto;
      margin-right: auto;
  }
</style>