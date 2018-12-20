import React, { Component } from 'react';
import { Dialog, Table } from '@icedesign/base';
import IceIcon from '@icedesign/icon';
import Operation from '../../../../api/api';
import CreateActivityForm from './CreateActivityForm';

const { tasklist, Userinformation } = Operation;

export default class Home extends Component {
  static displayName = 'Home';
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      dialog: false,
      message: {},
      id: null,
    };
    this.showtasklist = this.showtasklist.bind(this);
  }

  componentWillMount = async () => {
    const result = await tasklist();
    this.setState({
      dataSource: result,
    });
  }
  hideDialog = () => {
    this.setState({
      dialog: false,
    });
  };

  showtasklist = async (index) => {
    const id = this.state.dataSource[index].id.toString();
    const result = await Userinformation(id);
    this.setState({
      dialog: true,
      message: result,
      id,
    });
  }
  renderOper = (record, index) => {
    return (
      <div style={styles.oper}>
        <IceIcon size="small" type="eye" style={styles.editIcon} onClick={() => { this.showtasklist(index); }} />
      </div>
    );
  };

  render() {
    return (
      <div style={styles.tableContainer}>
        <Table
          dataSource={this.state.dataSource}
          hasBorder={false}
          className="custom-table"
        >
          <Table.Column width={200} title="编号" dataIndex="id" />
          <Table.Column width={100} title="查看" cell={this.renderOper} align="center" />
        </Table>
        <Dialog
          className="simple-form-dialog"
          style={{ width: '1000px' }}
          autoFocus
          footerAlign="center"
          title="用户信息"
          onClose={this.hideDialog}
          isFullScreen
          visible={this.state.dialog}
        >
          <CreateActivityForm value={this.state.message} id={this.state.id} />
        </Dialog>
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
