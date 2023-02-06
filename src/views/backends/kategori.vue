<script setup>
import { reactive, onMounted } from 'vue';
import { urlApi, apiClient } from '../../api/axios-config';


let rowKategori = reactive({
    items: []
})

let formAddKategori = reactive({
    id: 0,
    cover: "",
    nama: ""
})

let onCoverChange = (e) => {
    let path = (formAddKategori.cover = e.target.files[0]);
}

const getKategori = async () => {
    const { data } = await apiClient.get('/kategori');
    rowKategori.items = data.data
    console.log(rowKategori)
}

const addKategori = async () =>{
    const field = new FormData();
    field.append('nama', formAddKategori.nama)
    field.append('cover', formAddKategori.cover)
    const { data } = await apiClient.post('/kategori', field);
    getKategori()
}

onMounted(() => {
    getKategori()
});
</script>
<template>
    <div class="card" >
        <h5 class="card-header">Tabel Kategori</h5>
        <div class="table-responsive text-nowrap" style="min-height: 250px;">
            <table class="table">
                <thead class="table-light">
                    <tr>
                        <th>Id</th>
                        <th>Kategori</th>
                        <th>Gambar</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody class="table-border-bottom-0">
                    <tr v-for="item in rowKategori.items ">
                        <td class="nomer">{{ item.id }}</td>
                        <td><i class="fab fa-react fa-lg text-info me-3"></i> <strong>{{ item.nama }}</strong></td>
                        <td>
                          <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="" data-bs-original-title="Lilian Fuller">
                              <img :src="urlApi + item.cover" alt="Avatar" class="rounded-circle">
                            </li>
                          </ul>
                        </td>
                        <td><span class="badge bg-label-primary me-1">Active</span></td>
                        <td>
                            <div class="dropdown">
                                <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <div class="dropdown-menu" style="">
                                    <a class="dropdown-item" href="javascript:void(0);"><i
                                            class="bx bx-edit-alt me-1"></i> Edit</a>
                                    <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-1"></i>
                                        Delete</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="mt-5">
        <div class="card mb-4">
            <h5 class="card-header">Tambah Kategori</h5>
            <form @submit.prevent="addKategori()" class="card-body">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Kategori</label>
                    <input v-model="formAddKategori.nama" type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Name" >
                </div>
                <div class="input-group mb-3">
                    <label for="exampleUpload" class="form-label">Upload Image</label>
                    <input v-on:change="onCoverChange" type="file" class="form-control w-100" id="inputGroupFile02">
                </div>
                <button class="btn btn-secondary btn-lg" type="submit">Tambah Kategori</button>
            </form>
        </div>
    </div>
</template>