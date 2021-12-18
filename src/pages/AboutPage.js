import React from 'react'
import axios from 'axios'

const AboutPage = () => {

    const [version , setVersion] = React.useState("")

    const getUser = async() => {
        try {
            const response = await axios.get('https://api.codingthailand.com/api/version')
            //console.log(response.data.data.version)
            setVersion(response.data.data.version)
        } catch (error) {
            console.error(error)
            setVersion("load api error")
        }
    }

    React.useEffect(() => {
            getUser()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-4">
                    <h2>About</h2>
                    <p>Backend API Version {version}</p>
                </div>
            </div>
        </div>
    )
}


export default AboutPage
