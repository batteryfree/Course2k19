<template>
    <form class="form">
        <h2 class="form__headline">City to search</h2>
        <div class="form__block">
            <label class="form__label">City&nbsp;
                <input v-model="city" class="form__input" type="text" placeholder="Input city">
            </label>
            <label class="form__label">Country&nbsp;
                <input v-model="country" class="form__input" type="text" placeholder="Input country code">
            </label>
            <button class="form__button" type="button" @click="getForecate">Show weather</button>
        </div>
    </form>
</template>
<script>
import axios from 'axios'
export default {
    name: 'FormSerch',

    data() {
        return ({
            dataForCast: null,
            city: 'Zolotonosha',
            country: 'UA',
        })
    },

    methods: {
        reFormat: function(){
            if (!this.dataForCast) return null;

            let reFormatData = [];
            let index = 0;

            if (new Date(this.dataForCast[0].dt * 1000).getUTCHours() !== 0) {
                reFormatData.push({date: new Date(this.dataForCast[0].dt * 1000).toLocaleDateString('uk-UA',{timeZone: 'utc'}), main:[]});
            }

            this.dataForCast.forEach((e) => {
                const date = new Date(e.dt * 1000);
                if (date.getUTCHours() === 0) {
                    reFormatData.push({date: date.toLocaleDateString('uk-UA',{timeZone: 'utc'}), main:[]});
                    index++;
                }
                reFormatData[index].main.push({dt: date.toLocaleTimeString('uk-UA',{timeZone: 'utc'}), temp: e.main.temp});
            });
            console.log(reFormatData)
            this.dataForCast = reFormatData;
        },

        getForecate: function () {
            const API_KEY = 'b181fb457bf4a1386993c45cd85215a8';
            const URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}&q=${this.city},${this.country}&units=metric`
            axios
                .get(URL)
                .then(response => (this.dataForCast = response.data.list))
                .finally(() => {
                    this.reFormat();
                    this.$emit('getForecast', this.dataForCast);
                });
        }
    }
}
</script>
<style>
.form {
    border: 1px solid #777;
    width: 800px;
    margin:auto;
    padding-top: 25px;
    padding-bottom: 50px;
}

.form__button {
    background: transparent;
    color:#777;
    border: 2px solid #777;
    border-radius: 50px;
    height: 25px;
    margin: 10px;
}

.form__button:hover {
    background-color: #777;
    color:#FFF;
    border: 2px solid #333;
}

.form__button:focus {
    background-color: #777;
    color:#FFF;
    border: 2px solid #333;
}

.form__block {
    display: flex;
    text-align: left;
    justify-content:center;
    align-items: flex-end;
}

.form__label {
    display: block;
    margin: 10px;
}

.form__input {
    display: block;
    margin-top: 5px;
}

.form__headline {
    color: #555;}
</style>