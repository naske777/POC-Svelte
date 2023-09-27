<script lang="ts">
  import { getSchool, saveData } from "../../../backend/backend"
  import DataTable, { Head, Body, Row, Cell  } from '@smui/data-table';
  import IconButton from '@smui/icon-button';
    import { schoolsStore } from "../../../store/store";
    import AddClassrom from "../../../SubComponents/modal/AddClassrom.svelte";
    import EditClassroom from "../../../SubComponents/modal/EditClassroom.svelte";
    import AddTeacher from "../../../SubComponents/modal/AddTeacher.svelte";
    import EditTeacher from "../../../SubComponents/modal/EditTeacher.svelte";
export let data

const ID =  parseInt(data.params.id)
let schools :any= [];

schoolsStore.subscribe((value) => {
    schools = value;
  });
  let schoolIndex = schools.findIndex((schools: { id: number; }) => schools.id === ID);
let SchoolId = schools[schoolIndex] ? schools[schoolIndex].id : 0
let ClassrommId = 0
let TeacherId = 0

function deleteClassroom(id : number) {
 
schools[schoolIndex].classrooms = schools[schoolIndex].classrooms.filter((c: { key: number; }) => c.key !== id);
saveData('school', schools);
        schools = schools
} 

function deleteTeacher(id : number) {
 
 schools[schoolIndex].teachers = schools[schoolIndex].teachers.filter((c: { id: number; }) => c.id !== id);
 saveData('school', schools);
         schools = schools
 } 
  


</script>



 <div style="text-align: center;">


<DataTable table$aria-label="User list" style="    width: 100%;
max-width: 600px; margin-top: 15px; margin-left: 15px;">
  
  <Head>
    <div style="    text-align: left;
    margin-left: 15px;
    margin-top: 15px;display: flex;">
    <h1 >Aulas</h1>
    <IconButton data-bs-toggle="modal"
    data-bs-target="#modalClassrom" class="material-icons" ripple={true}
    >add</IconButton>
  </div>
    <Row>
      <Cell >Numero</Cell>
      <Cell >Grado</Cell>
      <Cell style="width: 20%;" >Acciones</Cell>

    </Row>
  </Head>
  <Body>
    {#if schools[schoolIndex] }
    {#each schools[schoolIndex].classrooms as item }
      <Row>
        <Cell>{item.id}</Cell>
        <Cell>{item.grade}</Cell>
        <Cell> 
          
          <IconButton on:click={() =>  ClassrommId = item.key} data-bs-toggle="modal"
          data-bs-target="#modalEditClassroom" class="material-icons" ripple={true}
          >edit</IconButton>
          <IconButton on:click={() =>  deleteClassroom(item.key)} class="material-icons" ripple={true}
          >delete</IconButton>
        </Cell> 
 
      </Row>
    {/each}
    {/if}
  </Body>

  
</DataTable >


<DataTable table$aria-label="User list" style="    width: 100%;
max-width: 600px;  margin-top: 15px;  margin-left: 15px">
  <Head>
    <div style="    text-align: left;
    margin-left: 15px;
    margin-top: 15px;display: flex;">
    <h1 >Profesores</h1>
    <IconButton data-bs-toggle="modal"
    data-bs-target="#modalTeacher" class="material-icons" ripple={true}
    >add</IconButton>
  </div>
    <Row>
      <Cell >Nombre</Cell>
      <Cell >Asignatura</Cell>
      <Cell style="width: 20%;">Acciones</Cell>

    </Row>
  </Head>
  <Body>
    {#if schools[schoolIndex] }


    {#each schools[schoolIndex].teachers as item }
      <Row>
        <Cell>{item.name}</Cell>
        <Cell>{item.asignature}</Cell>
        <Cell>
          <IconButton on:click={() =>  TeacherId = item.id} data-bs-toggle="modal"
            data-bs-target="#modalEditTeacher" class="material-icons" ripple={true}
          >edit</IconButton>
          <IconButton on:click={() =>  deleteTeacher(item.id)} class="material-icons" ripple={true}
          >delete</IconButton></Cell>
      </Row>
    {/each}
    {/if}
  </Body>

  
</DataTable>


</div>

<!-- Modal -->

<div class="modal fade" id="modalTeacher" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      
      <AddTeacher {SchoolId}/>
    </div>
  </div>
</div>

<div class="modal fade" id="modalClassrom" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      
      <AddClassrom {SchoolId}/>
    </div>
  </div>
</div>

<div class="modal fade" id="modalEditClassroom" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      
      <EditClassroom {SchoolId}{ClassrommId}/>
    </div>
  </div>
</div>

<div class="modal fade" id="modalEditTeacher" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      
      <EditTeacher {SchoolId}{TeacherId}/>
    </div>
  </div>
</div>