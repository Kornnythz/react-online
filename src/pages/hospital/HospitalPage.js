import React from 'react'
import axios from 'axios'
import { Table , Image , Badge , Spinner , Button  } from 'react-bootstrap'
import Pagination from "react-js-pagination";

const pageSize = 10;

const HospitalPage = () => {

    const [hospital , setHospital] = React.useState([])
    const [loading , setLoading] = React.useState(false)
    const [error , setError] = React.useState(null)
    const [page , setPage] = React.useState(1)
    const [total , setTotal ] = React.useState(0)

    

    const getData = async(page) => {
        try {
            setLoading(true)
            const response = await axios.get(`https://api.codingthailand.com/api/hospital2?page=${page}&page_size=${pageSize}`)
            console.log(response.data.data)
            setHospital(response.data.data)
            setTotal(response.data.meta.pagination.total)
            console.log(response.data.meta.pagination.total)
        } catch (error) {
            console.error(error.response.data.status_code)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
            getData()
    }, [page])

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

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber)
    }

    return (
        <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <h2>Hospital Page</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Code</th>
                                <th>Hospital Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    hospital.map((hospital,index)=>{
                                        return(
                                            <tr key={hospital.id}>
                                                <td>{hospital.id}</td>
                                                <td>{hospital.code}</td>
                                                <td>{hospital.h_name}</td>
                                                {/* <td>{p.date}</td> */}
                                                {/* <td>{p.view}</td> */}
                                                {/* <td><Badge variant="success">{p.view}</Badge></td> */}
                                                {/* <td><img src={p.picture} width="100px"/></td> */}
                                                {/* <td><Image src={p.picture} width={60} rounded /></td>
                                                <td><Link to={`/detail/${p.id}/title/${p.title}`}><Button variant="outline-info" >Click <FaMouse/></Button></Link></td> */}
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </Table>
                        <Pagination
                        activePage={page}
                        itemsCountPerPage={pageSize}
                        totalItemsCount={total}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                        prevPageText="ก่อนหน้า"
                        nextPageText="ถัดไป"
                        />
                    </div>
                </div>
            </div>
    )
}

export default HospitalPage
