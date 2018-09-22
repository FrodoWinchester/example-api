import React from 'react';
import axios from 'axios';


class CreatePost extends React.Component {
    state = {
        title: '',
        categories: '',
        content: ''
    }

    createPost = () => {
        let { title, categories, content } = this.state

        const createPostListUrl = 'http://reduxblog.herokuapp.com/api/posts'

        if (title === '' || categories === '' || content === '') {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน')
            return
        }

        axios.post(createPostListUrl, this.state)
            .then((res) => {
                alert(' Create Post Complete !')
                this.props.history.push('/')
            })
            .catch((err) => alert(err))
    }

    handelOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="card" style={{ backgroundColor: 'lightgrey' }}>
                <div style={{ margin: 10, marginTop: 25, marginBottom: 25 }}>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <h3>Create Post</h3>
                            <div style={{ marginTop: 15 }}>
                                <div class="form-group">
                                    <label>Title</label>
                                    <input onChange={this.handelOnChange} value={this.state.title} name="title" type="text" class="form-control" placeholder="Title" />
                                </div>
                                <div class="form-group">
                                    <label>Categories</label>
                                    <input onChange={this.handelOnChange} value={this.state.categories} name="categories" type="text" class="form-control" placeholder="Categories" />
                                </div>
                                <div class="form-group">
                                    <label>Content</label>
                                    <textarea onChange={this.handelOnChange} value={this.state.content} name="content" class="form-control" rows="4" placeholder="Content goes here..."></textarea>
                                </div>
                                <button class="btn btn-light" onClick={() => this.props.history.push('/')}>Cancel</button>
                                <button style={{ marginLeft: 10 }} type="submit" class="btn btn-primary" onClick={this.createPost}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePost;