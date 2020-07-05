import React from 'react'

class Config extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            endpoint: localStorage.getItem('endpoint')
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSave = this.handleSave.bind(this)
    }

    handleChange(event) {
        this.setState({endpoint: event.target.value})
    }

    handleSave(event) {
        localStorage.setItem('endpoint', this.state.endpoint)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Configuration</h1>
                <form onSubmit={this.handleSave}>
                    <label>
                        Endpoint:
                <input type="text" value={this.state.endpoint} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Save" />
                </form>
            </div>
        )
    }
}

export default Config
