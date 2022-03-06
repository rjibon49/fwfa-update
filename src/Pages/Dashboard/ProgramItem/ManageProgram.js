import React, { useEffect, useState } from 'react';
import { Image, Table } from 'react-bootstrap';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';
import UseProgram from '../../../hooks/UseProgram';

const ManageProgram = () => {

  const [dataDelete, setDataDelete] = useState([]);
  const [program] = UseProgram();
  const  {programId} = program;

  useEffect(() => {
    fetch ('https://bby8e7ppz5.execute-api.us-west-1.amazonaws.com/programdata/programs')
    .then ( res => res.json())
    .then ( data => setDataDelete(data.programs));
}, []);

  const handleDelete = programId => {
    const url = `https://bby8e7ppz5.execute-api.us-west-1.amazonaws.com/programdata/program?programId=${programId}`;
    console.log(programId);
    fetch(url, {
        method: 'DELETE'
    })
    .then( res => res.json())
    .then( data => {
        console.log(data);
        if(data.deletedCount) {
          toast.success('Data Delete Successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            });
            const remaining = dataDelete.filter(pl => pl.programId !== programId)
            setDataDelete(remaining);
        }
    })
}

console.log(dataDelete);
    return (
      <div class="table-responsive">
          <Table striped bordered hover variant="dark" >
            <thead style={{verticalAlign:"middle"}}>
              <tr className="text-center">
                <th>Title</th>
                <th>Id</th>
                <th>Image</th>
                <th className='w-50'>Details</th>
                <th>Action</th>
              </tr>
              {
                dataDelete.map(pg => <tr key={pg.programId}>
                    <td>{pg.programName}</td>
                    <td>{pg.programId}</td>
                    <td><Image src={pg.image}  className="dashboardImage"/></td>
                    <td>{pg.programDescription}</td>
                    <td className="text-center">
                    <button className="btn btn-danger p-1 m-1" ><BorderColorIcon className="m-1"/></button>
                    <button className="btn btn-danger p-1 m-1" onClick={ () => handleDelete(pg.programId)}><DeleteIcon className="m-1"/></button>
                    </td>
                  </tr>)
              }
            </thead>
          </Table>
      </div>
    );
};

export default ManageProgram;