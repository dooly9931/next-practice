import React from "react";
import axios from 'axios';
import Layout from "../Components/Layout";

class SSRTest extends React.Component {
  static async getInitialProps({req}) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return { users: response.data };
  }

  render() {
    const { users } = this.props;

    const userList = users.map((user) => {
      return <li key={user.id}>{user.username}</li>;
    });

    return (
      <Layout>
        <ul>
          {userList}
        </ul>
      </Layout>
    );
  }
};

export default SSRTest;
