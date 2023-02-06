<script setup>
import { ref } from 'vue';
import { reactive, onMounted } from 'vue';
import { urlApi, apiClient } from '../../api/axios-config';


let toggleMenuPopup = ref(false);

let rowDetailMenu = reactive({
    cover: "",
    deskripsi: "",
    harga: "",
    id: 0,
    kategori: "",
    nama: "",
})

let formAddMenu = reactive({
    cover: "",
    deskripsi: "",
    harga: "",
    id: 0,
    kategori: "",
    nama: "",
})

let rowMenu = reactive({
    items: []
})

let onCoverChange = (e) => {
    let path = (formAddMenu.cover = e.target.files[0]);
}

const getMenu = async () => {
    const { data } = await apiClient.get('/menu');
    rowMenu.items = data.data
    console.log(rowMenu)
}

const deleteAny = async (id) => {
    const { data } = await apiClient.delete(`/menu/${id}`);
    getMenu()
}



const addMenu = async () =>{
    const field = new FormData();
    field.append('nama', formAddMenu.nama)
    field.append('cover', formAddMenu.cover)
    field.append('harga', formAddMenu.harga)
    field.append('kategori', formAddMenu.kategori)
    field.append('deskripsi', formAddMenu.deskripsi)
    const { data } = await apiClient.post('/menu', field);
    getMenu()
}



onMounted(() => {
    getMenu()
});
</script>
<template>
    <div class="">
        <div class="card mb-4">
            <h5 class="card-header">Nama Makanan/Minuman</h5>
            <form @submit.prevent="addMenu()" class="card-body">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nama</label>
                    <input v-model="formAddMenu.nama" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Harga</label>
                    <input v-model="formAddMenu.harga" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Price">
                </div>
                <div class="mb-3">
                    <label for="exampleDataList" class="form-label">Kategori</label>
                    <input v-model="formAddMenu.kategori" class="form-control" list="datalistOptions" id="exampleDataList"
                        placeholder="Type to search...">
                    <datalist id="datalistOptions">
                        <option value="Makanan"></option>
                        <option value="Minuman"></option>
                    </datalist>
                </div>
                <div class="input-group mb-3">
                    <label for="exampleUpload" class="form-label">Upload Image</label>
                    <input v-on:change="onCoverChange" type="file" class="form-control w-100" id="inputGroupFile02">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Deskripsi</label>
                    <textarea v-model="formAddMenu.deskripsi" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button class="btn btn-secondary btn-lg" type="submit">Button</button>
            </form>
        </div>
    </div>
    <div class="d-flex gap-3">
        <div v-for="item in rowMenu.items "
            @click="toggleMenuPopup = true, rowDetailMenu.cover = item.cover, rowDetailMenu.deskripsi = item.deskripsi, rowDetailMenu.harga = item.harga, rowDetailMenu.kategori = item.kategori, rowDetailMenu.nama = item.nama , rowDetailMenu.id = item.id" 
            class="card h-100">
            <div class="card-body">
                <h5 class="card-title">Makanan</h5>
                <h6 class="card-subtitle text-muted">{{ item.nama }}</h6>
            </div>
            <img :src="urlApi + item.cover" class="img-fluid p-2" alt="Card image cap" style="height: 150px">
            <div class="card-body">
                <p class="card-text">{{ item.harga }}</p>
                <p class="card-text">{{ item.deskripsi }}</p>
            </div>
        </div>
    </div>
    <div v-if="toggleMenuPopup" class="modal fade show" id="modalToggle" tabindex="-1"
        style="display: block; background: #0000006b;" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalToggleLabel">Edit/Delete</h5>
                    <button type="button" class="btn-close" @click="toggleMenuPopup = false"></button>
                </div>
                <div class="modal-body">
                    <div class="">
                        <div class="card mb-4">
                            <h5 class="card-header">Nama Makanan/Minuman</h5>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Nama</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Name" :value ="rowDetailMenu.nama">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Harga</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Price" :value="rowDetailMenu.harga">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleDataList" class="form-label">Kategori</label>
                                    <input class="form-control" list="datalistOptions" id="exampleDataList"
                                        placeholder="Type to search..." :value="rowDetailMenu.kategori">
                                    <datalist id="datalistOptions">
                                        <option value="Makanan"></option>
                                        <option value="Minuman"></option>
                                    </datalist>
                                </div>
                                <div class="input-group mb-3">
                                    <label for="exampleUpload" class="form-label">Upload Image</label>
                                    <input type="file" class="form-control w-100" id="inputGroupFile02" >
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Deskripsi</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" :value="rowDetailMenu.deskripsi"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" @click="toggleMenuPopup = false">
                        Batal
                    </button>
                    <button class="btn btn-primary">
                        Simpan Edit
                    </button>
                    <button class="btn btn-danger" @click="deleteAny(rowDetailMenu.id)">
                        Hapus Menu
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>           