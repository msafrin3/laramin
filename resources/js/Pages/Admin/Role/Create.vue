<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { reactive, onMounted } from 'vue';
import Swal from 'sweetalert2';
import MyChoices from '@/Pages/Shared/MyChoices.vue';

const breadcrumbs = [
    {
        title: 'Administrator',
        active: true
    },
    {
        title: 'Role management',
        active: false,
        link: route('admin.role.index')
    },
    {
        title: 'Create Role',
        active: true
    }
];

let props = defineProps({
    errors: Object,
    permissions: Object
});

let role = reactive({
    name: null,
    permissions: []
});

let submit = () => {
    router.post(route('admin.role.store'), role, {
        onSuccess: (response) => {
            if (response.props.response.success) {
                Swal.fire('Success!', response.props.response.succes, 'success');
            }
        }
    });
}

let setPermissions = (payload) => {
    role.permissions = payload;
}
</script>

<template>
    <Head title="Create Role" />

    <AuthenticatedLayout>
        <ContentHeader title="Create Role" :breadcrumbs="breadcrumbs" />

        <div class="row justify-content-center">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Create New Role</h3>
                    </div>
                    <form @submit.prevent="submit">
                        <div class="card-body">
                            <div class="form-group">
                                <label class="form-label">Role Name</label>
                                <input type="text" class="form-control" placeholder="Enter Role Name" v-model="role.name">
                                <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                            </div>
                            <div class="form-group mt-3">
                                <label class="form-label">Select Permission(s)</label>
                                <MyChoices id="selectpermission" placeholder="Select Permission" type="multiple" @get-value="setPermissions">
                                    <option v-for="permission in permissions" :key="permission.id" :value="permission.id">{{ permission.name }}</option>
                                </MyChoices>
                            </div>
                        </div>
                        <div class="card-footer d-grid gap-2">
                            <button type="submit" class="btn btn-success">Save</button>
                            <Link :href="route('admin.role.index')" class="btn btn-light">Back</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>