import React from "react";
import { Form , Image , Badge , Spinner , Button  } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import {
    useHistory
  } from "react-router-dom";

const schema = yup.object({
    name: yup.string().required('Category news cannot be null'),
  }).required();

const CreatePage = () => {
     const history = useHistory()
     const { register, handleSubmit, formState:{ errors } } = useForm({
         resolver: yupResolver(schema)
       });
      
       const onSubmit = async(data) => {
           const apiURL = 'https://api.codingthailand.com/api/category'
           const response = await axios.post(apiURL,
            {
                name : data.name
            }
            ).catch(error => {
                console.error('There was an error!', error.message);
            });
            alert(response.data.message)
            history.replace("/category")
       }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Add New Category</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
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

export default CreatePage;
