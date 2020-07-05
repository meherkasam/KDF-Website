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

    uploadHandler = event => {
        const formData = new FormData()
        formData.append(
            'query_img',
            this.state.selectedFile,
            this.state.selectedFile.name
        )

        let endpoint = localStorage.getItem('endpoint')
        axios.post(`${endpoint}/search`, formData)
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
