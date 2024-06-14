<template>
    <div class="w-100 h-100 d-flex justify-center align-center" id="cartWrapper">
        <div id="login" class="mx-auto d-flex flex-column align-center">
            <input type="email" id="emailInput" placeholder="e-mail" class="mb-5 mt-3 rounded-lg"
                v-model="loginData.email">
            <input type="password" id="passwordInput" placeholder="password" class="rounded-lg"
                v-model="loginData.password">
            <v-btn class="rounded-lg mt-3" id="logInBtn" @click="logInForm">Log In</v-btn>
            <a href="" id="passReq" class="mt-3">Forgot password ?</a>
            <v-btn class="rounded-lg mt-5 w-50" id="signUp">Sign Up</v-btn>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    computed: {
        loginData() {
            return this.$store.state.loginData
        }
    },
    methods: {
        ...mapActions([
            'logIn'
        ]),

    },
    logInForm() {
        this.logIn()
    }
}
</script>

<style>
#login {
    background: white;
    height: 300px;
    width: 420px;
    border-radius: 5px;
}

#emailInput {
    background: white;
    height: 40px;
    border: 1px solid rgba(199, 199, 199, 1);
    width: 410px;
}

#emailInput:focus {
    border: 3px solid rgba(66, 147, 218, 1);
    outline: none;
}

#passwordInput {
    background: white;
    height: 40px;
    border: 1px solid rgba(199, 199, 199, 1);
    width: 410px;
}

#passwordInput:focus {
    border: 3px solid rgba(66, 147, 218, 1);
    outline: none;
}

#logInBtn {
    width: 410px;
    background: rgba(66, 147, 218, 1);
}

#passReq {
    color: rgba(66, 147, 218, 1);
}

#signUp {
    background: rgba(114, 231, 79, 1);
}
</style>