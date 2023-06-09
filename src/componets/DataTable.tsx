import React, { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [
   { field: 'id', headerName: 'ID', width: 98, hide:true},
   { field: 'name', headerName: 'Name', flex: 1},
   { field: 'make', headerName: 'Make', flex: 1},
   { field: 'aged',headerName: 'Aged',flex: 1},
   { field: "price", headerName: 'price',flex: 2},


]

function DataTable() {
   const [ open, setOpen ] = useState(false);
   const {DrinksData, getData} = useGetData();
   const [ selectionModel, setSelectionModel ] = useState<string[]>([])
   


   const handleOpen = () => {
    setOpen(true)
   }

   const handleClose = () => {
    setOpen(false)
   }
  
   const deleteData =() => {
    server_calls.delete( selectionModel[0]);
    getData();
    console.log('Selection model: ${selectionModel}')
    setTimeout ( () => { window.location.reload() }, 500)
   }

   return (
    <>
        <Modal
        id={selectionModel}
        open={open}
        onClose={handleClose}
        
        />
        <div className ='flex flex-row'>
            <div>
               <button className ='p-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white '
               onClick={() => handleOpen()}
               >
                Make your own drink!
               </button>
            </div>
           
            <button onClick={handleOpen}className ='p-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white' >Update</button>
            <button onClick={deleteData} className ='p-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white'>Delete</button>
         
        


        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
            >
                <h2 className="p-3 bg-slate-300 my-2 rounded">Come Drink with us!</h2>
                <DataGrid rows={DrinksData} columns={columns} rowsPerPageOptions={[5]}
                checkboxSelection={true} 
                onSelectionModelChange ={ ( item:any) => {
                    setSelectionModel(item)

                }}
                
                />

        </div>

    </>
  )
}

export default DataTable

function getData() {
    throw new Error('Function not implemented.');
}
