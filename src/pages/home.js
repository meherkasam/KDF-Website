import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = { selectedFile: null }
    }

    fileChangedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] })
    }

    uploadHandler = async(event) => {
        const formData = new FormData()
        formData.append(
            'query_img',
            this.state.selectedFile,
            this.state.selectedFile.name
        )

        let endpoint = localStorage.getItem('endpoint')
        try {
            const response = await axios.post(`${endpoint}/search`, formData, { crossdomain: true })
            console.log(response)
        } catch (e) {
            alert(e)
        }
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.fileChangedHandler} />
                <button onClick={this.uploadHandler}>Upload</button>
            </div>
        )
    }
}

export default Home
