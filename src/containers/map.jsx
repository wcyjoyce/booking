import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { connect } from "react-redux";

class Map extends Component {
  render() {
    const style = {
      height: "100vh"
    };

    const markerStyle = {
      width: "20px",
      height: "20px",
      backgroundColor: "red",
      borderRadius: "50%"
    }

    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };

    if (this.props.selectedFlat) {
      marker = <div style={markerStyle} lat={this.props.selectedFlat.lat} lng={this.props.selectedFlat.lng} />;
      center = { lat: this.props.selectedFlat.lat, lng: this.props.selectedFlat };
    }

    return (
      <div className="col-sm-5" style={style}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAn1QSQh4R1KK-pt_mcoQHAZ1NAXBc7N68" }}
          center={center}
          defaultZoom={12}
        >
          {marker}
        </GoogleMapReact>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    selectedFlat: reduxState.selectedFlat
  }
}

export default connect(mapStateToProps)(Map);
