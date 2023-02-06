<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Icon from '../components/Icon.vue';
let router = useRouter();
let value = ref(0);
</script>
<template>
    <div class="cart">
        <div class="cart-wrapper">
            <div class="cart-wrapper-logo1" @click="router.push({ name: 'detail' })">
                <Icon name='left' />
            </div>
            <div class="cart-wrapper-name">
                Cart
            </div>
            <div class="cart-wrapper-logo2" @click="router.push({ name: 'home' })">
                <Icon name='x' />
            </div>
        </div>
    </div>
    <div class="cart-wrapper-menu">
        <div class="cart-wrapper-menu-item">
            <div class="cart-wrapper-menu-item-gambar">
                <img src="../assets/img/burger.png" alt="">
            </div>
            <div class="cart-wrapper-menu-item-info">
                Burger king<br>
                $25.00
                <div class="cart-wrapper-menu-item-info-jumlah">
                    <p @click="value--">-</p>
                    <p>{{ value }}</p>
                    <p @click="value++">+</p>
                </div>
                <Icon name='delete' />
            </div>
        </div>
    </div>
    <div class="cart-total">
        <div class="cart-total-wrapper">
            <div class="cart-total-wrapper-subtotal1">Subtotal Produk <p>$15.00</p>
            </div>
            <div class="cart-total-wrapper-subtotal2">Subtotal Produk <p>$15.00</p>
            </div>
            <div class="cart-total-wrapper-subtotal3">Subtotal Produk <p>$15.00</p>
            </div>
            <div class="cart-total-wrapper-harga">
                Chekout
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.cart {


    &-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;

        &-logo1 {
            & svg {
                height: 30px;
            }
        }

        &-name {
            font-size: 24px;
            font-weight: 600;
        }

        &-logo2 {
            & svg {
                height: 30px;
            }
        }

        &-menu {
            margin: 20px;

            &-item {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 50px;
                padding: 15px;
                border-radius: 20px;
                box-shadow: 4px 4px 20px rgba(128, 128, 128, 0.219);

                &-gambar {
                    & img {
                        height: 200px;
                    }
                }

                &-info {
                    display: flex;
                    align-items: center;
                    gap: 100px;
                    font-size: 20px;
                    font-weight: 600;

                    & svg {
                        height: 30px;
                    }

                    &-jumlah {
                        display: flex;
                        align-items: center;
                        gap: 20px;
                        width: fit-content;
                        font-size: 30px;
                        font-weight: 700;
                    }
                }
            }
        }

    }

    &-total {
        margin: 20px;

        &-wrapper {
            box-shadow: 4px 4px 20px rgba(128, 128, 128, 0.219);
            border-radius: 30px;
            padding: 25px;

            &-subtotal1 {
                display: flex;
                justify-content: space-between;
                padding-top: 5px;
                font-size: 20px;

            }

            &-subtotal2 {
                display: flex;
                justify-content: space-between;
                padding-top: 20px;
                font-size: 20px;
                font-weight: 600;
            }

            &-subtotal3 {
                display: flex;
                justify-content: space-between;
                padding-top: 25px;
                font-size: 20px;
                font-weight: 700;
            }

            &-harga {
                margin: 20px 0;
                padding: 10px;
                border-radius: 30px;
                text-align: center;
                font-size: 20px;
                font-weight: 700;
                background-color: grey;
            }
        }
    }
}
</style>