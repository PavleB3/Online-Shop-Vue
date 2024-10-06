<template>
    <v-container>
        <v-row>
            <v-col cols="12" lg="3" md="7" sm="6" class="mx-auto">
                <div class="flex-column mx-auto d-flex align-center justify-center pa-2 rounded-lg loginForm ">
                    <input type="text" class="input mb-3 w-75" placeholder="Email or phone number">
                    <input type="password" class="input w-75" placeholder="password">
                    <button class="mt-3 mb-3 w-75 loginBtn">Log In</button>
                    <router-link>
                        <span>Forgot Your Password ?</span> 
                    </router-link>
                    <hr id="lineBreak">
                    <button id="createBtn" class="mb-3 w-75">Create An Account</button>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

</script>

<style scoped>
 .loginForm {
    background:rgba(205, 27, 244, 0.1);
 }
 .input {
    border: 1px solid rgba(205, 27, 244, 0.3);
    border-radius: 5px;
    height:35px;
 }
 .input:focus {
    outline: 1px solid rgba(205, 27, 244, 1);
 }
 .loginBtn {
    height: 35px;
    background: rgba(205, 27, 244, 1);
    color:white;
    border-radius: 5px;
    font-size: 20px;
 }
 span {
    color:rgba(205, 27, 244, 1);
 }
 #lineBreak { 
    border: none;
    height: 1px; 
    background-color: rgba(205, 27, 244, 0.5);
    width: 75%; 
    margin: 20px auto;
 }
 #createBtn { 
    background: rgba(205, 27, 244, 1);
    color:white;
    height:35px;
    border-radius:5px;
    font-size: 18px;
 }
</style>