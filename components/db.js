import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} from "mongodb-stitch-browser-sdk";
import React from "react";
import getConfig from "next/config";

class StitchConnect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { successMsg: "", errorMsg: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const key = getConfig().publicRuntimeConfig.STITCH_APP_KEY;
    let client, db;
    if (key) {
      client = Stitch.initializeDefaultAppClient(key);
      db = client
        .getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
        .db("spark-2020");
      client.auth
        .loginWithCredential(new AnonymousCredential())
        .then(user => {
          this.setState({
            client,
            db
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  handleSubmit(values, { resetForm }) {
    const formData = {
      ...values,
      owner_id: this.state.client.auth.user.id
    };
    console.log(formData);
    resetForm();
    this.state.db
      .collection("participants")
      .insertOne(formData)
      .then(() => {
        console.log("done");
        this.setState(prevState => ({
          ...prevState,
          successMsg: "Registered Successfully"
        }));
      })
      .catch(err => {
        console.log("some error in inserting: ", err);
        this.setState(prevState => ({
          ...prevState,
          errorMsg: "Unable to Register"
        }));
      });
    document.querySelectorAll("input__field").forEach(elem => {
      elem.focus();
      elem.blur();
    });
  }

  render() {
    const ChildrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        onSubmit: this.handleSubmit
      })
    );
    return (
      <div>
        <div>{ChildrenWithProps}</div>
        <div>
          {this.state.successMsg && (
            <p className="style1 success">{this.state.successMsg}</p>
          )}
          {this.state.errorMsg && (
            <p className="style1 error">{this.state.errorMsg}</p>
          )}
        </div>
      </div>
    );
  }
}

export default StitchConnect;
