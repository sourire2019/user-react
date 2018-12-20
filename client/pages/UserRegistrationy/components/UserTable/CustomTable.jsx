import React, { Component } from 'react';
import { Table } from '@icedesign/base';
import Operation from '../../../../api/api';
import cookie from 'react-cookies';

const { userlist } = Operation;

export default class Home extends Component {
  static displayName = 'Home';
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      account: cookie.load('account'),
    };
  }

  componentWillMount = async () => {
    const result = await userlist();
    this.setState({
      dataSource: result,
    });
  }

  render() {
    return (
      <div style={styles.tableContainer}>
        <Table
          dataSource={this.state.dataSource}
          hasBorder={false}
          className="custom-table"
        >
          <Table.Column width={200} title="编号" dataIndex="id" />
          <Table.Column width={200} title="状态" dataIndex="status" cell = {row => ( row == '0' ? ("等待管理员登记") : ('登记成功'))}/>
          <Table.Column width={200} title="密码" dataIndex="password" />
        </Table>
      </div>
    );
  }
}

const styles = {
  tableContainer: {
    background: '#fff',
    paddingBottom: '10px',
  },
  pagination: {
    margin: '20px 0',
    textAlign: 'center',
  },
  editIcon: {
    color: '#999',
    cursor: 'pointer',
  },
  circle: {
    display: 'inline-block',
    background: '#28a745',
    width: '8px',
    height: '8px',
    borderRadius: '50px',
    marginRight: '4px',
  },
  stateText: {
    color: '#28a745',
  },
};
