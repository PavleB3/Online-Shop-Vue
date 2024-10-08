<template>
    <div class="w-100 h-100 d-flex justify-center align-center" id="cartWrapper">
        <div id="login" class="mx-auto d-flex flex-column align-center">
            <input type="email" id="emailInput" placeholder="email" class="mb-5 mt-3 rounded-lg"
                v-model="loginData.email">
            <input type="password" id="passwordInput" placeholder="password" class="rounded-lg"
                v-model="loginData.password">
            <v-btn class="rounded-lg mt-3" id="logInBtn" @click="logInForm">Log In</v-btn>
            <a href="" id="passReq" class="mt-3">Forgot password ?</a>
            <v-btn class="rounded-lg mt-5 w-50" id="signUp" @click="activateSignUp = !activateSignUp">Create an
                Acount</v-btn>
        </div>
    </div>
    <div v-if="activateSignUp" id="signUpForm"
        class="h-100 w-100 position-fixed top-0 d-flex justify-center align-center">
        <v-btn id="exitSignUp" @click="activateSignUp = !activateSignUp">Go back</v-btn>
        <div id="signUpDiv" class="mx-auto d-flex flex-column align-center">
            <h1 class="mb-2">Sign In</h1>
            <hr class="w-100">
            <div id="personInfo" class="w-100 d-flex flex-row mt-5">
                <input type="text" placeholder="First name" id="personName" class="rounded-lg ml-2"
                    v-model="getData.firstName">
                <input type="text" placeholder="Last name" id="personName" class="rounded-lg ml-2"
                    v-model="getData.lastName">
            </div>
            <input type="email" id="signEmail" class="rounded-lg mt-3" placeholder="Email" v-model="getData.email">
            <input type="password" id="signEmail" class="rounded-lg mt-3" placeholder="Password"
                v-model="getData.password">
            <h3 class="mt-3" id="birthday">Birthday:</h3>
            <div id="birthday" class="w-100 d-flex flex-row justify-space-between mt-3">
                <select name="months" id="months" class="rounded-sm ml-3" v-model="getData.month">
                    <option v-for="(month, i) in getMonths" :key="i" id="month" :value="month">
                        {{ month }}
                    </option>
                </select>
                <select name="days" id="day" class="rounded-sm" v-model="getData.day">
                    <option v-for="(day, i) in getDays" :key="i" :value="day">
                        {{ day }}
                    </option>
                </select>
                <select name="years" id="year" class="rounded-sm mr-3" v-model="getData.year">
                    <option v-for="(year, i) in years" :key="i" :value="year">
                        {{ year }}
                    </option>
                </select>
            </div>
            <hr class="w-100 mt-3">
            <h3 class="mt-3" id="gender">Gender:</h3>
            <div id="gender" class="mt-3">
                <v-radio-group inline v-model="getData.gender">
                    <v-radio label="Male" value="male" class="mr-5"></v-radio>
                    <v-radio label="Female" value="female" class="ml-5"></v-radio>
                </v-radio-group>
            </div>
            <hr class="w-100">
            <v-btn id="signUpBtn" class="mt-7" @click="signUpForm">Sign up</v-btn>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            activateSignUp: false,
            years: [],
        }
    },
    computed: {
        loginData() {
            return this.$store.state.loginData
        },
        getMonths() {
            return this.$store.state.months
        },
        getDays() {
            return this.$store.state.days
        },
        getData() {
            return this.$store.state.signUpData
        }
    },
    mounted() {
        const currentYear = new Date().getFullYear();
        this.getData.month = this.getMonths[0]
        this.getData.day = this.getDays[0]
        this.getData.year = currentYear
        for (let i = currentYear; i >= currentYear - 100; i--) {
            this.years.push(i)
        }
        return this.years
    },
    methods: {
        ...mapActions([
            'logIn',
            'signUp'
        ]),
        logInForm() {
            this.logIn()
            this.$router.push({ name: "catalogView" })

        },
        signUpForm() {
            if (!this.getData.firstName || !this.getData.lastName ||!this.getData.email || !this.getData.password
                || !this.getData.month || !this.getData.day || !this.getData.year || !this.getData.gender) {
                alert("You need to fill in all inputs!")
            } else {
                this.signUp()
                alert("You've created an Account!")
                this.activateSignUp = false;
            }
        }
    },

}
</script>

<style lang="scss">
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
    text-indent: 10px;
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
    text-indent: 10px;
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

#signUpDiv {
    background: white;
    border-radius: 5px;
    width: 420px;
    height: 530px;
}

#signUpForm {
    background: transparent;
    backdrop-filter: blur(5px);
}

#personName {
    @extend #emailInput;
    width: 200px;
    text-indent: 10px;
}

#signEmail {
    @extend #emailInput;
    text-indent: 10px;
}

#months {
    @extend #emailInput;
    width: 100px;
    height: 35px;
    padding-left: 10px;
}

#day {
    @extend #emailInput;
    width: 100px;
    height: 35px;
    padding-left: 10px;
}

#year {
    @extend #emailInput;
    width: 100px;
    height: 35px;
    padding-left: 10px;
}

#exitSignUp {
    position: absolute;
    top: 20px;
    left: 20px;
}

#gender {
    font-weight: 400;
}

#birthday {
    @extend #gender;
}

#signUpBtn {
    @extend #signUp;
    color: white;
    width: 400px;
}

#months option,
#day option,
#year option {
    color: gray
}
@media (max-width: 375px){
    #login{
        width:370px;
    }
    #emailInput{
        width:360px;
    }
    #passwordInput{
        width:360px;
    }
    #logInBtn{
        width:360px;
    }
}
@media (max-width: 390px){
    #login{
        width:380px;
    }
    #emailInput{
        width:360px;
    }
    #passwordInput{
        width:360px;
    }
    #logInBtn{
        width:360px;
    }
}
</style>