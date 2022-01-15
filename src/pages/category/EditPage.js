import React from "react";
import { Form , Image , Badge , Spinner , Button  } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import {
    useHistory
  } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const schema = yup.object({
    name: yup.string().required('Category news cannot be null'),
  }).required();

const EditPage = () => {

     const history = useHistory()
     const { id } = useParams()
     const [category , setCategory] = React.useState([])
     const [loading , setLoading] = React.useState(false)
     const [error , setError] = React.useState(null)

     const { register, handleSubmit, formState:{ errors } } = useForm({
         resolver: yupResolver(schema)
       });
      
       const onSubmit = async(data) => {
        //    const apiURL = 'https://api.codingthailand.com/api/category'
        //    const response = await axios.put(apiURL,
        //     {
        //         id : id,
        //         name : data.name
        //     }
        //     ).catch(error => {
        //         console.error('There was an error!', error.message);
        //     });
        //     alert(response.data.message)
        //     history.replace("/category")
       }

       const getData = async(id) => {
            try {
                setLoading(true)
                const response = await axios.get(`https://api.codingthailand.com/api/category/` + id)
                console.log(response.data)
                setCategory(response.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
    
        React.useEffect(() => {
            getData(id)
        }, [id])

        if(loading === true){
            return (
                <div className="text-center mt-5">
                    <Spinner animation="border" variant="primary" />
                </div>
            )
        }
    
        if(error){
            return(
                 <div className="text-center mt-5 text-danger">
                    <h4>Error from API, Please try again</h4>
                    <p>{error.response.data.message}</p>
                </div>
            )
        }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Edit Category</h2>
          <Form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="name">
              <Form.Label>Category News</Form.Label>
              <Form.Control type="text" name="name" ref={register}  className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
               {
                  errors.name && (
                      <Form.Control.Feedback type="invalid">
                          {errors.name.message}
                      </Form.Control.Feedback>
                  )
              } 
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
