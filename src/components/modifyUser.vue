<template>
    <div class="login">
    <div class="box has-background-danger" v-if="apiErrors.length!=0">
         <ol>
           <li v-for="s in apiErrors" :key="s">
           {{s}}
           </li>
         </ol>
       </div>
        <div class="card">
            <div class="card-content">
                <div class="content">
                   <div class="is-hcentered" style="text-align:center; margin:3%;">
                       <figure class="image is-96x96">
                            <img  alt="logo" :src="photo">
                        </figure>
                        <b-field label="Photo"
                                :message="errors.file">
                                <b-input type="file"
                                    @change.native="FileChange"
                                    >
                                </b-input>
                        </b-field>
                   </div>
                   <form>
                   <div class="columns">
                        <div class="column">
                              <b-field label="Name"
                                :type="errors.name==null?'':'is-danger'"
                                :message="errors.name">
                                <b-input type="text"
                                    @keyup="errors.name=null"
                                    maxlength="30"
                                    v-model="name">
                                </b-input>
                            </b-field>
                            <b-field label="Surname"
                            :type="errors.surname==null?'':'is-danger'"
                            :message="errors.surname">
                                <b-input type="text"
                                    v-model="surname"
                                    @keyup="errors.surname=null"
                                    >
                                </b-input>
                            </b-field>
                        </div>
                        <div class="column">
                              <b-field label="Email"
                                :type="errors.email==null?'':'is-danger'"
                                :message="errors.email">
                                <b-input type="text"
                                    @keyup="errors.email=null"
                                    maxlength="30"
                                    v-model="email">
                                </b-input>
                            </b-field>
                            <b-field label="Age"
                            :type="errors.age==null?'':'is-danger'"
                            :message="errors.age">
                                <b-input type="number"
                                    v-model="age"
                                    @keyup="errors.age=null"
                                    >
                                </b-input>
                            </b-field>
                            <b-field label="Status">
                                <input type="checkbox"
                                     :checked="actif" @change="actif=(!actif)">
                             </b-field>
                               
                            
                        </div>
                        
                    </div>
                   </form>
                    <div class="field">
                        <p class="control">
                            <button class="button is-warning is-medium is-outlined is-fullwidth" @click="UpdateUser">
                            Update user <b-loading :is-full-page="isFullPage" v-model="isLoading" :can-cancel="true"></b-loading>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import api from '../api/http'
export default {
    name: 'Login',
    components: {
  },
    data() {
            return {
                isLoading: false,
                isFullPage: true,
                apiErrors:[],
                photo:this.$route.params.user.photoUrl,
                file:null,
                id:this.$route.params.user.id,
                name:this.$route.params.user.name,
                age:this.$route.params.user.age,
                actif:0,
                photoUrl:this.$route.params.user.photoUrl,
                email:this.$route.params.user.email,
                surname:this.$route.params.user.surname,
                errors:{"email":null,"surname":null}
            }
        },
        mounted() {
            console.log(this.$route.params.user.actif)
        },
        methods: {
            getStatus()
            {
              return this.actif==false?0:1
            },
            UpdateUser() {
                 this.isLoading = true
                setTimeout(() => {
                    this.isLoading = false
                }, 10 * 1000) 
                this.errors.email=null
                this.errors.surname=null
                if(!this.email)
                {
                  this.errors.email = "Email is required!!!"
                  this.isLoading = false
                }else if(!this.surname)
                {
                    this.errors.surname = "surname is required!!!"
                    this.isLoading = false
                }else if(!this.name)
                {
                    this.errors.name = "Name is required!!!"
                    this.isLoading = false
                }else if(!this.age)
                {
                    this.errors.age = "Age is required!!!"
                    this.isLoading = false
                }else if(!this.validEmail(this.email))
                {
                    this.errors.email = "Email is incorrect!!!"
                    this.isLoading = false
                }else
                {
                 
                    const formData = new FormData();
                    formData.append("name",this.name);
                    formData.append("surname",this.surname);
                    formData.append("email",this.email);
                    if(this.file!=null)
                    formData.append("file",this.file);
                    formData.append("age",this.age);
                    formData.append("actif",this.actif==false?0:1);
                    console.log(formData)
                    api.updateUser(this.id,formData)
                                        .then((response)=>{
                                             console.log(response)
                                             this.isLoading=false
                                             this.$router.push('/')
                                             })   
                                        .catch((error)=>
                                        {
                                            
                                            console.log(error.response.data)
                                            this.apiErrors=error.response.data.errors
                                            this.isLoading=false
                                        })            //console.log(api)
                
                }
                console.log(this.email,this.surname)
            },
            validEmail: function (email) {
              var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(email);
            },
            FileChange(event) {
                    this.file=event.target.files[0];
                    const toBase64 = file => new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => resolve(reader.result);
                        reader.onerror = error => reject(error);
                    });
                    this.photo=toBase64(this.file);
              }
           
        }
}
</script>
<style lang="scss" scoped>
  .login{
      max-width:35%;
      margin-top:8%;
      margin-left: auto;
      margin-right: auto;
  }
</style>