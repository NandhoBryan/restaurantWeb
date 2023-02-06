<script setup>
import '/src/assets/admin/vendor/css/core.css';
import '/src/assets/admin/vendor/fonts/boxicons.css';
import '/src/assets/admin/vendor/css/theme-default.css';
import '/src/assets/admin/css/demo.css';
import '/src/assets/admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';
import '/src/assets/admin/vendor/js/bootstrap.js';
import Headeradmin from '../../components/Headeradmin.vue';
</script>
<template>
    <div class="dashboard">
        <Headeradmin />
        <div class="dashboard-content">
            <RouterView />
        </div>
    </div>
</template>
<style lang="scss">
.dashboard {
    display: flex;
    &-content {
        margin-left: 250px;
        padding: 2rem;
        min-height: calc(100vh - 7rem);
        height: -webkit-fill-available;
        width: -webkit-fill-available;
        background-color: var(--color-section);
    }
}
</style>