import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser,toggleStatus } from "../../actions/authActions";
import SideNavbar from "./SideNavbar";


class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
        num:""
    };
  }
  componentDidMount(){
    // console.log(this.props.auth.user)
  }

  // componentWillReceiveProps(nextProps) {
    // console.log("kartik")
      // this.props.history.push("/kharidaardashboard")
    // }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  toggle = async e =>{
    e.preventDefault();
    const info = {
      email: this.props.auth.user.email
    }
    await this.props.toggleStatus(info,this.props.auth.user);
    await this.setState({num:1})
  }
  faltu = e => {
    e.preventDefault();
    return
  }
  render() {
    const { user } = this.props.auth;
    var active = this.props.auth.user.active;
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "16%", padding: "0" }}>
          <SideNavbar></SideNavbar>
        </div>
        <div style={{ width: "84%" }}>
          <div style={{ height: "75vh" }} className="container valign-wrapper">
            <div className="row">
              <div className="col s12 center-align">
                <h4>
                  <b>Welcome,</b> {user.name.split(" ")[0]}
                  <p className="flow-text grey-text text-darken-1">
                    You Are necessary for us to grow, keep using our software. Lets Grow together.
              </p>
                </h4>
                <div style={{display:"flex",flexDirection:"row"}}>
                {(
                  active == 1
                ) ? (
                    <button
                      style={{
                        width: "45%",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem",
                        marginRight:"5%"
                      }}
                      onClick={this.toggle}
                      className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                      DeActivate Subsription
                    </button>
                  ) : (
                    <button
                      style={{
                        width: "45%",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem",
                        marginRight:"5%"
                      }}
                      onClick={this.toggle}
                      className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                      Activate Subcription
                    </button>
                  )}
                <button
                  style={{
                    width: "45%",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginLeft:"5%"
                  }}
                  onClick={this.onLogoutClick}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Logout
            </button>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  toggleStatus: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser,toggleStatus }
)(Dashboard);