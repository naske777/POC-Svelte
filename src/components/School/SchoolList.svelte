<script lang="ts">
    import { onMount } from 'svelte';
   import AddTeacher from '../../SubComponents/modal/AddTeacher.svelte';
   import AddClassrom from '../../SubComponents/modal/AddClassrom.svelte';
   import {loadData, loadSchool, saveData} from '../../backend/backend'
   import DataTable, { Head, Body, Row, Cell  } from '@smui/data-table';
  import IconButton from '@smui/icon-button';
import './School.css';
    import { schoolsStore } from '../../store/store';
    import EditSchool from '../../SubComponents/modal/EditSchool.svelte';
    import { goto } from '$app/navigation';

    let schools :any[]= [];

  // Suscribirse a los datos del store
  schoolsStore.subscribe((value) => {
    schools = value;
  });

   let name = '';
   let SchoolId = 0;

  function addSchool() {
    let id = 0
    if (schools.length != 0) {
       id = schools[schools.length - 1].id + 1;
      }

      schools = [...schools, { id, name, teachers: [], classrooms: [] }];
      
      name = '';
      saveData('school',schools)
  }

   function deleteSchool(id : number) {
   const schoolIndex = schools.findIndex(school => school.id === id);
  if (schoolIndex !== -1) {
       schools.splice(schoolIndex, 1);
       schools = schools
        saveData('school', schools);
  }
}

  function add(Id: number) {
    SchoolId = Id
  }

function schoolDetails(id:number){
  goto("/classrom-teacher/" + id);

}

</script>

<div class="container">
  
  <div class="input-group mb-3 " >
    <input type="text" class="form-control" bind:value={name} placeholder="Nombre de la escuela"
    aria-label="Username" aria-describedby="basic-addon1">
        <button  type="button" class="btn btn-primary"  on:click={addSchool}><span class="icon">+</span> Agregar escuela</button>
  </div>
  <div class="d-grid gap-2 d-md-block">
   


</div>
 

  <DataTable table$aria-label="User list" style="    width: 100%;
max-width: 100%; margin-top: 15px;">
  
  <Head>
    <h1 style="    text-align: left;
    margin-left: 15px;
    margin-top: 15px;">Aulas</h1>

    <Row>
      <Cell >#</Cell>
      <Cell >Nombre</Cell>

      <Cell >Profesores</Cell>
      <Cell >Aulas</Cell>
      <Cell style="width: 10%;" >Acciones</Cell>

    </Row>
  </Head>
  <Body>
    {#if schools != null }
    {#each schools as item }
      <Row  on:click={() =>  schoolDetails(item.id)}>
        <Cell>{item.id}</Cell>
        <Cell>{item.name}</Cell>
        <Cell>{item.teachers.length}</Cell>
        <Cell>{item.classrooms.length}</Cell>
        <Cell> 
          <IconButton data-bs-toggle="modal"
          data-bs-target="#modalEditSchool" on:click={() => add(item.id)} class="material-icons" ripple={true}
          >edit</IconButton>
          <IconButton   on:click={() =>  deleteSchool(item.id)} class="material-icons" ripple={true}
          >delete</IconButton>
        
          
        </Cell> 
 
      </Row>
    {/each}
    {/if}
  </Body>

  
</DataTable >
</div>

<!-- Modal -->
<div class="modal fade" id="modalTeacher" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <AddTeacher {SchoolId}/>
    </div>
  </div>
</div>



<!-- Modal -->
<div class="modal fade" id="modalEditSchool" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      
      <EditSchool {SchoolId}/>
    </div>
  </div>
</div>


