<template>
    <v-container>
        <v-row class="d-flex justify-space-between">
            <v-col cols="12" md="6" sm="7" lg="6" id="checkout" class="mt-10">
                <div class="d-flex justify-center align-center">
                    <h1 class="mb-2 checkoutTitle">Checkout</h1>
                </div>
                <div id="userNameSur" class="d-flex justify-space-between mb-1">
                    <div class="d-flex flex-column nameInput">
                        <label for="name" class="labelClass">Name</label>
                        <input type="text" class="inputs" id="name">
                    </div>
                    <div class="d-flex flex-column surnameInput">
                        <label for="surname" class="labelClass">Surname</label>
                        <input type="text" class="inputs" id="surname">
                    </div>
                </div>
                <div id="country" class="d-flex flex-column mb-1">
                    <label for="Country" class="labelClass">Country</label>
                    <input type="text" class="inputs" id="Country">
                </div>
                <div id="cityAndZip" class="d-flex justify-space-between mb-1">
                    <div class="d-flex flex-column cityInput">
                        <label for="city" class="labelClass">City</label>
                        <input type="text" class="inputs" id="city">
                    </div>
                    <div class="d-flex flex-column zipCodeInput">
                        <label for="zipCode" class="labelClass">Postal Code</label>
                        <input type="text" class="inputs" id="zipCode">
                    </div>
                </div>
                <div id="addressAndNumber" class="d-flex justify-space-between mb-1">
                    <div class="d-flex flex-column addressInput">
                        <label for="address" class="labelClass">Address</label>
                        <input type="text" class="inputs" id="address">
                    </div>
                    <div class="d-flex flex-column numberInput">
                        <label for="number" class="labelClass">No.</label>
                        <input type="text" class="inputs" id="number">
                    </div>
                </div>
                <div id="email" class="d-flex mb-1">
                    <div class="d-flex flex-column emailInput">
                        <label for="email" class="labelClass">Email</label>
                        <input type="text" class="inputs" id="email">
                    </div>
                </div>
                <div id="phoneNumber" class="d-flex">
                    <div class="d-flex flex-column phoneInput">
                        <label for="phone" class="labelClass">Phone Number</label>
                        <input type="text" id="phone" class="inputs">
                    </div>
                </div>
            </v-col>
            <!-- <v-col cols="12" md="3" sm="4" lg="3"> Ukoliko je tablet ili mobilni telefon, ide position fixed bottom 0
                <div id="order" class="h-100">
                    <h1>hello</h1>
                </div>
            </v-col> -->
        </v-row>
        <v-row>
            <v-col cols="12" md="6" lg="6" sm="7">
                <div>
                    <h2 class="checkoutTitle mb-3">Payment Method</h2>
                    <div class="d-flex flex-column align-start mb-3" id="paymentInput">
                        <div>
                            <input type="radio" name="order" class="mb-5 ml-3 mr-3 radioClass" @click="addressOrder()">
                            <label for="name">Order</label>
                        </div>
                        <div>
                            <input type="radio" name="order" class="ml-3 mr-3 radioClass" @click="cardPayment()">
                            <label for="cardPayment">Card Payment</label>
                        </div>
                    </div>
                    <v-btn id="orderBtn" class="w-100">Order</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return { 
            orderOnAddress: true,
            cardOrder: false,
        }
    },
    methods: {
        addressOrder() {
            this.orderOnAddress = true;
            this.cardOrder = false;
        },
        cardPayment() {
            this.cardOrder = true;
            this.orderOnAddress = false;
        }
    }
}
</script>

<style scoped>
#checkout {
    background: rgba(205, 27, 244, 0.1);
}

.checkoutTitle {
    font-weight: lighter;
    color: rgba(205, 27, 244, 1);
}

#userNameSur {
    height: 50px;
}

.labelClass {
    font-weight: 300;
}

.inputs {
    width: 100%;
    height: 35px;
    border: 1px solid rgba(205, 27, 244, 0.5);
    border-radius: 5px;
    font-weight: 300;
    height: 100%;
}

.inputs:focus {
    outline: none;
    border: 2px solid rgba(205, 27, 244, 0.5);
}

.nameInput {
    width: 48%;
}

.surnameInput {
    width: 48%;
}

#country {
    height: 50px;
}

.cityInput {
    width: 48%;
}

.zipCodeInput {
    width: 48%;
}

#cityAndZip {
    height: 50px;
}

#addressAndNumber {
    height: 50px;
}

.addressInput {
    width: 83%;
}

.numberInput {
    width: 13%;
}

.emailInput {
    width: 100%;
}

#email {
    height: 50px;
}

#phoneNumber {
    height: 50px;
}

.phoneInput {
    width: 100%;
}

#order {
    background: lightblue;
}

#paymentInput {

}

.radioClass {
    transform: scale(1.4);
}
.radioClass:hover { 
    cursor:pointer;
}
#orderBtn {
    background: rgba(205, 27, 244, 0.2);
    color:rgba(205, 27, 244, 0.7);
}
</style>