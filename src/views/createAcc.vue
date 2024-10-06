<template>
    <v-container>
        <v-row>
            <v-col cols="12" lg="3" md="7" sm="6" class="mx-auto">
                <div id="creatingAccDiv" class="d-flex flex-column align-center">
                    <h2 class="mb-2" id="header">Create an Account</h2>
                    <hr id="lineBreak" class="mb-5">
                    <div class="w-100">
                        <input type="text" class="pa-2 ml-2 mb-2 input" placeholder="Name" v-model="getData.name">
                        <input type="text" class="pa-2 ml-2 mb-2 input" placeholder="Surname" v-model="getData.surname">
                    </div>
                    <input type="text" class="pa-2 w-75 mb-2 input" placeholder="Email" v-model="getData.email">
                    <input type="password" class="pa-2 w-75 mb-2 input" placeholder="Password"
                        v-model="getData.password">
                    <input type="password" class="pa-2 w-75 mb-2 input" placeholder="Mobile number"
                        v-model="getData.mobileNumber">
                    <div class="d-flex flex-row justify-center align-center w-100 mb-2">
                        <select class="pa-2 w-25" v-model="getData.day">
                            <option v-for="(day, index) in getDays" :key="index" :value="day">
                                {{ day }}
                            </option>
                        </select>
                        <select class="pa-2 ml-2 w-25" v-model="getData.month">
                            <option v-for="(month, index) in getMonths" :key="index" :value="month">
                                {{ month }}
                            </option>
                        </select>
                        <select class="pa-2 ml-2 w-25" v-model="getData.year">
                            <option v-for="(year, index) in years" :key="index" :value="year">
                                {{ year }}
                            </option>
                        </select>
                    </div>
                    <div id="gender" class="mt-3">
                        <v-radio-group inline v-model="getData.gender">
                            <v-radio label="Male" value="male" class="mr-5 radio"></v-radio>
                            <v-radio label="Female" value="female" class="ml-5 radio"></v-radio>
                        </v-radio-group>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            years: []
        }
    },
    mounted() {
        const currentYear = new Date().getFullYear();
        this.getData.month = this.getMonths[0];
        this.getData.day = this.getDays[0];
        this.getData.year = currentYear;

        for (let i = currentYear; i >= currentYear - 100; i--) {
            this.years.push(i);
        }
    },
    computed: {
        getData() {
            return this.$store.state.signUpData;
        },
        getDays() {
            return this.$store.state.days;
        },
        getMonths() {
            return this.$store.state.months;
        }
    }
}
</script>

<style scoped>
#creatingAccDiv {
    background: rgba(205, 27, 244, 0.1);
    border-radius: 5px;
}

.input {
    border: 1px solid rgba(205, 27, 244, 0.3);
    border-radius: 5px;
    height: 35px;
}
.input::placeholder {
    color:  rgba(205, 27, 244, 0.5);
}
.input:focus {
    outline: 1px solid rgba(205, 27, 244, 1);
}

#header {
    font-weight: lighter;
    color: rgba(205, 27, 244, 1);
}

select {
    border: 1px solid rgba(205, 27, 244, 0.3);
    border-radius: 5px;
    padding: 8px;
    cursor: pointer;
    color: rgba(205, 27, 244, 0.5);;
}

select:focus {
    outline: none;
    border: 2px solid rgba(205, 27, 244, 1);
}
.radio { 
    color:rgba(205, 27, 244, 1);
}
#lineBreak {
    border: none;
    height: 1px;
    background-color: rgba(205, 27, 244, 0.5);
    width: 75%;
}
</style>
