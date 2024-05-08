import React from 'react'
import { Link } from 'react-router-dom'

export default function Edit() {
  return (
    <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    

  <button type="button" class="btn btn-outline-success btn-rounded" data-mdb-ripple-init  data-mdb-ripple-color="dark">
    <Link class="nav-link" to="/Profile">
    Back
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
</svg>
    </Link>

</button>
      
  </div>
</nav>

<div className='m-5'>

      <h2 className='m-3'>Edit Your profile</h2>
      <button type="button" class="btn btn-success m-3" data-mdb-ripple-init>Update Photo</button>
{/* <button type="button" class="btn btn-danger m-3" data-mdb-ripple-init>Delete Profile</button> */}

{/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-danger m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Delete Account
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete your account</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Delete account permanently.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</div>

<button type="button" class="btn btn-warning m-3" data-mdb-ripple-init>Logout</button>
<button type="button" class="btn btn-info m-3" data-mdb-ripple-init>Change you info</button>

</div>


    </div>
  )
}
