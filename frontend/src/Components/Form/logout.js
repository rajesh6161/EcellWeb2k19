import React, { Component } from 'react'
import Modal from './modal'
import faxios from '../../axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/authActions'

const user_type = {
    GST: 'Guest',
    VLT: 'Voluteer',
    EXE: 'Executive',
    MNG: 'Manager',
    HCO: 'Head Co-ordinator',
    OCO: 'Overall Co-ordinator',
    CAB: 'Campus Ambassador',
}

class logout extends Component {
    axios = faxios()
    state = {}

    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateUser : PropTypes.func.isRequired
    }
    
    componentDidMount() {
        
        faxios().get('/users/get_user_details/').then(d=>{
            let data = d.data
            const user = this.props.auth
            console.log(data)
            sessionStorage['ecell_user'] = JSON.stringify({
                token: user.token,
                ...data
            })
            this.setState(data)
        })
    }

    _request_approval = e => {
        e.preventDefault()

        faxios().get('/users/request_ca_approval/').then(d=>{
            alert('You have successfully applied for CA! You can confirm it by clicking on your name on top right corner')
            let user = this.props.auth
            user.applied = true
            sessionStorage['ecell_user'] = JSON.stringify(user)
            window.location = '/'
        }).catch(err=>{
            console.error(err)
        })
    }
    
    _logout = e => {
        this.props.updateUser({loggedin:false})
        this.close_btn.click()
    }
    
    render() {
        const apply_for_ca =
        <div>
            <hr/>
                <button onClick={this._request_approval} className="btn text-white btn-success login-button">Apply for CA</button>
            <hr/>
        </div>

        const applied_for_ca =                     
        <div>
            <hr/>
                <button disabled className="btn btn-warning login-button">Applied for CA</button>
            <hr/>
        </div> 

        let button_to_show = this.state.applied ? applied_for_ca:apply_for_ca 
        if(this.state.user_type !== 'GST'){
            button_to_show=null
        }

        return (
            <Modal id='logoutModal'>
                <div className="modal-body text-center mb-1">
                    <div className="details">
                        <div><span className="font-weight-bold">User: </span>{this.state.first_name} {this.state.last_name}</div>
                        <div><span className="font-weight-bold">Email: </span>{this.state.email}</div>
                        <div><span className="font-weight-bold">Member Type: </span>{user_type[this.state.user_type]}</div>
                    </div>
                    {button_to_show}
                    <div className="my-3 text-center">Are your sure want to logout?</div>
                    <div className="text-center mt-2">
                        <button onClick={this._logout} className="btn text-white btn-info login-button">Logout</button>
                        <button ref={ele=>this.close_btn=ele} type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </Modal>
        )
    }
}



const mapStateToProps = (state) => state

export default connect(mapStateToProps, actions)(logout)