import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function FilterOwner() {
    const height = ""
    const [users, setUsers] = useState([])
    useEffect(() => {
        loadUsers()
    },[])
    const loadUsers = async(e) => {
        const result=await axios.get(`http:localhost:80/owners/filterByHeight/${e}`)
        setUsers(result.data)
    }

  return <div className='container'>
    <div className='row'>
      <div className='col-md-6 offsert-md-3 border rounded p-4 mt-2 shadow'>
        <h2 className='text-center m-4'>Filter Owner</h2>
        {/* <form onSubmit={(e) => loadUsers(e)}> */}
        <div className='mb-3'>
          <label htmlFor='Name' className='form-label'>Height</label>
          <input
            type={"int"}
            className="form-control"
            placeholder='The minimum height'
            name="height"
            value={height}
          />
        </div>
        <button type='submit' className='btn btn-outline-dark' onClick={() => loadUsers(height)}>Filter</button>
        <Link className='btn btn-outline-danger mx-2' to='/'>Cancel</Link>
        {/* </form> */}
      </div>
    </div>
    <div className='container'>
            <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Height</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((user, index) => (
                        <tr>
                            <th scope="row" key={index}>{user.ownerId}</th>
                            <td>{user.name}</td>
                            <td>{user.addres}</td>
                            <td>{user.height}</td>
                            <td>{user.weight}</td>
                            <td>{user.description}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    </div>
  </div>;
}
