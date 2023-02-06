<script setup>
import Icon from '../components/Icon.vue';
import Header from '../components/Header.vue';
import { useRouter } from 'vue-router';
import { reactive ,ref, onMounted } from 'vue';
import { urlApi ,apiClient } from '../api/axios-config';
let router = useRouter();

let goDetail = (id, name) => {
    router.push({name: 'detailMenu', params: {id: id, name: name}});
};

let rowMenu = reactive({
    items: []
})

const getMenu = async ()=>{
    const { data } = await apiClient.get('/menu');
    rowMenu.items = data.data
    console.log(rowMenu)
}

const getMenuByCat = async (cat)=>{
    await router.push({ name: 'homeCategory', params: {category: cat}});
    const { data } = await apiClient.get(`/menu/kategori/${route.params.category}`);
    rowMenu.items = data.data
}

 onMounted(() => {
    getMenu()
 });


</script>
<template>
    <Header></Header>
    <div class="home-adds">
        <div class="home-adds-img" style="background: url('/src/assets/img/iklan.jpg')">
        </div>
    </div>
    <div class="home-hero">
        <p class="home-hero-text">Find The <span>Best</span><br> <span>Food</span> Around You</p>
    </div>
    <div class="home-search">
        <div class="home-search-wrapper">
            <Icon name="search" />

            <input type="text" id="" name="" placeholder="Search Your Favorit Food" />
        </div>
    </div>
    <div class="home-categoris">
        <div class="home-categoris-wrapper">
            <p>Categoris</p>
        </div>
    </div>
    <div class="home-content">
        <div class="home-content-wrapper">
            <img src="/src/assets/img/burger.png" alt="">
            <p>Makanan</p>
        </div>
        <div class="home-content-wrapper">
            <img src="/src/assets/img/boba.png" alt="">
            <p>Minuman</p>
        </div>
    </div>
    <div class="home-img">
        <div class="home-img-wrapper" v-for="item in rowMenu.items " @click="goDetail(item.id, item.nama)">
            <img :src="urlApi + item.cover" alt="">
            <p class="home-img-wrapper-nama">{{ item.nama }}</p>
            <p class="home-img-wrapper-info">{{ item.created_ad }}</p>
            <!-- <p class="home-img-wrapper-rating">
                <Icon name="star" />
                <P>4,5</P>
            </p> -->
            <p class="home-img-wrapper-sale">{{ item.harga }}</p>
        </div>
    </div>
</template>
<style lang="scss">
.home-adds {
    display: flex;

    &-img {
        height: 300px;
        width: 100%;
        background-position: center !important;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        box-shadow: 4px 4px 20px rgba(128, 128, 128, 0.219) !important;
        margin: 15px;
        border-radius: 25px;
    }
}

.home-hero {
    padding: 15px;

    &-text {
        font-size: 46px;
        font-weight: 400;
        line-height: 1.1;

        & span {
            font-weight: 900;
        }
    }
}

.home-search {
    padding: 15px;

    &-wrapper {
        display: flex;
        padding: 12px 50px;
        border-radius: 30px;
        box-shadow: 4px 4px 20px rgba(128, 128, 128, 0.219);
        gap: 40px;

        & input {
            font-weight: 700;
            border: none;
            outline: none;
            background-color: inherit;
            font-size: 20px;
            width: 100%;

            &::placeholder {
                color: rgba(grey, .6);
            }
        }

        & svg {
            height: 30px;
        }
    }
}

.home-categoris {
    padding: 5px 45px;

    &-wrapper {
        & p {
            font-size: 30px;
            font-weight: 700;
        }
    }
}

.home-content {
    display: flex;
    padding: 15px;
    gap: 30px;

    &-wrapper {
        display: flex;
        align-items: center;
        border-radius: 30px;
        box-shadow: 4px 4px 20px rgba(128, 128, 128, 0.219);
        gap: 15px;
        padding: 5px 10px;
        font-size: 20px;

        & p {
            font-weight: 500;
        } 

        & img {
            height: 35px;
        }
    }
}

.home-img {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 15px;
    gap: 30px;

    &-wrapper {
        border-radius: 30px;
        box-shadow: 4px 4px 20px rgba(128, 128, 128, 0.219);
        padding: 5px 10px;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;

        & img {
            height: 200px;
        }

        &-nama {
            font-size: 24px;
            font-weight: 600;
        }

        &-info {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 10px;

            & svg {
                height: 15px;
            }
        }

        &-sale {
            align-self: center;
            padding: 0px 10px 5px 10px;
            font-weight: 700;
        }

        &-rating {
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }
}
</style>