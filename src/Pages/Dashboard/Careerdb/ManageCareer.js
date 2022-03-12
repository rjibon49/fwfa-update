import React, { useEffect, useState } from 'react';
import { Image, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import UseArticles from '../../../hooks/UseArticles';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import EditCareer from './EditCareer';

const ManageCareer = () => {
  const [dataDelete, setDataDelete] = useState([]);
  const {editdatainfo} = UseArticles();

  const [openOrder, setOpenOrder] = useState(false);
  const handleOrderOpen = () => setOpenOrder(true);
  const handleOrderClose = () => setOpenOrder(false);

  useEffect(() => {
    fetch ('https://shrouded-retreat-25778.herokuapp.com/career')
    .then ( res => res.json())
    .then ( data => setDataDelete(data));
}, []);

  const handleDelete = id => {
    const proceed = window.confirm("Are you sure, You want to delete? ");
    if(proceed) {
      const url = `https://shrouded-retreat-25778.herokuapp.com/career/${id}`;
    console.log(id);
    fetch(url, {
        method: 'DELETE'
    })
    .then( res => res.json())
    .then( data => {
        console.log(data);
        if(data.deletedCount) {
          toast.success('Career Delete Successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            });
            const remaining = dataDelete.filter(pl => pl._id !== id)
            setDataDelete(remaining);
        }
    })
    }
}

console.log(dataDelete);
    return (
      <div class="table-responsive">
          <Table striped bordered hover variant="dark" >
            <thead style={{verticalAlign:"middle"}}>
              <tr className="text-center">
                <th>Title</th>
                <th>Image</th>
                <th className='w-50'>Details</th>
                <th>Action</th>
              </tr>
              {
                dataDelete.map(pg => <tr key={pg.programId}>
                    <td>{pg.ArticleName}</td>
                    <td><Image src={pg.image}  className="dashboardImage"/></td>
                    <td>{pg.undefined}</td>
                    <td className="text-center">
                    <button className="btn btn-danger p-1 m-1" onClick={handleOrderOpen}><BorderColorIcon className="m-1"/></button>
                    <button className="btn btn-danger p-1 m-1" onClick={ () => handleDelete(pg._id)}><DeleteIcon className="m-1"/></button>
                    </td>
                  </tr>)
              }
            </thead>
          </Table>

          <EditCareer
          key ={dataDelete._id}
          handleOrderClose = {handleOrderClose}
          openOrder = {openOrder}
          dataDelete={dataDelete}
        ></EditCareer>
      </div>
    );
};

export default ManageCareer;