import cookie from 'react-cookies';
import { Table } from '@icedesign/base';
import React from 'react';
// import { get, post } from './request.js';
// mock
const login = (value) => {
  cookie.save('account', value.account);
  return ({
    message: 'success',
  });
};

// Admin代办任务列表
const tasklist = () => {
  const result = [
    {
      id: 0,
    }, {
      id: 1,
    },
  ];
  return result;
};

// 用户信息展示
const Userinformation = (id) => {
  const result = {
    name: 'Jim',
    age: '12',
    address: 'dgbfyreu',
  };
  return result;
};

// Admin登记

const register = (id) => {
  console.log(id);
};
// 用户信息列表
const userlist = (account) => {
  const result = [
    {
      id: '0',
      status: '0',
      password: '',
    }, {
      id: '1',
      status: '1',
      password: 'NCUIDSKJC ',
    },
  ];
  return result;
};
export default {
  login,
  tasklist,
  Userinformation,
  register,
  userlist,
};
