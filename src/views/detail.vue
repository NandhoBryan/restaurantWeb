<script setup>

import { useRouter, useRoute } from 'vue-router';
import Icon from '../components/Icon.vue';
import { reactive ,ref, onMounted } from 'vue';
import { urlApi ,apiClient } from '../api/axios-config';
let value = ref(0);
let router = useRouter();
let route = useRoute();

let rowDetailMenu = reactive({
    items: []
})

const getDetailMenu = async ()=>{
    const { data } = await apiClient.get(`/menu/${route.params.id}`);
    rowDetailMenu.items = data.data
    console.log(rowDetailMenu)
}
 onMounted(() => {
    getDetailMenu()
 });
</script>
<template>
    <div class="detail" @click="router.push({ name: 'home' })">
        <div class="detail-wrapper">
            <div class="detail-wrapper-back">
                <Icon name='left' />
            </div>
        </div>
    </div>
    <div class="detail-menu">
        <div class="detail-menu-img">
            <img :src="urlApi + rowDetailMenu.items.cover" alt="">
        </div>
    </div>
    <div class="detail-info">
        <div class="detail-info-jumlah">
            <p @click="value--">-</p>
            <p>{{ value }}</p>
            <p @click="value++">+</p>
        </div>
    </div>
    <div class="detail-content">
        <div class="detail-content-nama">{{ rowDetailMenu.items.nama }}</div>
        <div class="detail-content-deskripsi">{{ rowDetailMenu.items.deskripsi }}</div>
    </div>
    <div class="detail-rating">
        <div class="detail-rating-icon">
            <Icon name="star" />
            4,5
        </div>
        <div class="detail-rating-waktu">
            <Icon name="time" />
            15 min
        </div>
    </div>
    <div class="detail-cart">
        <div class="detail-cart-pesan" @click="router.push({ name: 'cart' })">
            Tambah Ke Keranjang
        </div>
    </div>
</template>

<style lang="scss">
.detail {


    &-wrapper {
        display: flex;
        justify-content: space-between;
        padding: 15px;

        &-back {
            font-size: 24px;
            font-weight: 700;
            display: flex;
            gap: 15px;

            & svg {
                height: 30px;
            }
        }
    }

    &-menu {
        display: flex;
        padding: 15px;
        justify-content: center;

        &-img {
            & img {
                height: 300px;
            }
        }
    }

    &-info {
        display: flex;
        justify-content: center;

        &-jumlah {
            display: flex;
            align-items: center;
            gap: 20px;
            width: fit-content;
            padding: 5px 20px;
            font-size: 30px;
            font-weight: 700;
            box-shadow: 4px 4px 20px rgba(128, 128, 128, 0.219);
            border-radius: 30px;
        }
    }

    &-rating {
        display: flex;
        justify-content: center;
        gap: 80px;

        &-icon {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 20px;
            font-weight: 600;

            & svg {
                height: 30px;
            }
        }

        &-waktu {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 20px;
            font-weight: 600;

            & svg {
                height: 30px;
            }
        }
    }

    &-content {
        padding: 35px 50px;

        &-nama {
            font-size: 24px;
            font-weight: 700;
        }
    }

    &-cart {
        display: flex;
        justify-content: center;
        padding: 50px 0px 25px 0px;

        &-pesan {
            background-color: grey;
            font-size: 18px;
            font-weight: 600;
            padding: 10px 90px;
            border-radius: 30px;
        }
    }
}
</style>
