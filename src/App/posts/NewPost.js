import React from 'react'

class NewPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input
        }
    }
    render() {
        return (
            <div className="divNew">
                <div>
                    <h2>New post</h2>
                    <label onChangehtmlFor="inp">Title</label>
                    <input type="text" id='inp' />
                </div>
                <div>
                    <label htmlFor="area">Content</label>
                    <textarea id='area'></textarea>
                </div>
                <div>
                    <button>Cancel</button>
                    <button>Save</button>
                </div>
            </div>
        )
    }
}

export default NewPost