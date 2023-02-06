<script setup>
import { useRouter } from 'vue-router';
import Icon from './Icon.vue';
let router=useRouter();
</script>
<template>
    <div class="header">
        <div class="header-wrapper">
            <div class="header-wrapper-nama">
               Shopping
                <Icon name='food' />
            </div>
            <div class="header-wrapper-logo2" @click="router.push({name:'cart'})">
                <Icon name='cart' />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.header {
    &-wrapper {
        display: flex;
        justify-content: space-between;
        padding: 15px;

        &-nama {
            font-size: 24px;
            font-weight: 700;
            display: flex;
            gap: 15px;
            & svg {
                height: 30px;
            }
        }

        &-logo2 {
            & svg {
                height: 30px;
            }
        }
    }
}
</style>
