import Button from "./Button"
import input from "./input"
import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseName, choosePrice, chooseYear, chooseModel, chooseDescription, chooseCarQuality} from "../redux/slices/Rootslice";

interface CarFormProps{
    id?:string[]
   

}

const CarForm = (props:CarFormProps) => {
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
        dispatch(chooseYear(data.year));
        dispatch(chooseModel(data.model));
        dispatch(chooseDescription(data.description));
        dispatch(choosePrice(data.price));
        dispatch(chooseCarQuality(data.car_quailty));

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
                <label htmlFor='year'>Year</label>
                <input {...register('year')} name='year' placeholder="year"/>
            </div>
            <div>
                <label htmlFor='model'>Model</label>
                <input {...register('model')} name='model' placeholder="model"/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input {...register('description')} name='description' placeholder="description"/>
            </div>
            <div>
                <label htmlFor="car_quality">Car Quality</label>
                <input {...register('car_quality')} name='car_quality' placeholder="car_quality"/>
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

export default CarForm