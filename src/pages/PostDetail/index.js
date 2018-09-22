import React from 'react';
import axios from 'axios';


class CreatePost extends React.Component {
    state = {
        title: '',
        categories: '',
        content: ''
    }
    componentDidMount() {
        this.fetchPost()
    }

    fetchPost = () => {
        const { match } = this.props
        const postUrl = `http://reduxblog.herokuapp.com/api/posts/${match.params.postId}`
        axios.get(postUrl)
            .then((res) => {
                if (res.data !== undefined) {
                    let item = res.data
                    this.setState({ title: item.title, categories: item.categories, content: item.content })
                }
            }).catch((err) => {
                alert(err)
            })
    }

    render() {
        let { title, categories, content } = this.state
        return (
            <div className="card" style={{ backgroundColor: 'lightgrey' }}>
                <div style={{ margin: 10, marginTop: 25, marginBottom: 25 }}>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <h3>Post Detail</h3>
                            <div class="card" >
                                <div class="card-body">
                                    <h5 class="card-title">{title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">{categories}</h6>
                                    <p class="card-text">{content}</p>
                                </div>
                            </div>
                            <button style={{ marginTop: 10 }} class="btn btn-light" onClick={() => this.props.history.push('/')}>Back</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePost;