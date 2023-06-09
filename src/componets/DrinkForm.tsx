import Button from "./Button"
import input from "./input"
import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseName,  chooseMake, choosePrice, chooseAged, } from "../redux/slices/Rootslice";

interface DrinkFormProps{
    id?:string[]
   

}

const DrinkForm = (props:DrinkFormProps) => {
    const{ register,handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();



    const onSubmit = (data: any, event: any) => {
       console.log('ID: ${props.id}');
       console.log(props.id)
       console.log(data)
       if (props.id && props.id.length > 0) {
        server_calls.update(props.id[0], data)
        console.log(`Updated: ${ data.name } ${ props.id}`)
        setTimeout(() => {window.location.reload()}, 1000);
        event.target.reset()

       } else {
        //use dispatch to update our state in our store
        dispatch(chooseName(data.name));
        dispatch(chooseAged(data.aged));
        dispatch(chooseMake(data.make));
        dispatch(choosePrice(data.price));
   

        server_calls.create(store.getState())
        setTimeout( () => {window.location.reload()}, 1000);



       }
    }


  return (
    // todo - add
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <input {...register('name')} name='name' placeholder="Name"/>
            </div>
            <div>
                <label htmlFor='price'>Price</label>
                <input {...register('price')} name='price' placeholder="price"/>
            </div>
            <div>
                <label htmlFor='make'>Make</label>
                <input {...register('make')} name='make' placeholder="make"/>
            </div>
            <div>
                <label htmlFor='aged'>Aged</label>
                <input {...register('aged')} name='aged' placeholder="aged"/>
            </div>
           
            
            <div className="flex p-1">
                <Button
                className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
                    Submit
                </Button>
            </div>


        </form>
    </div>
  )
}

export default DrinkForm