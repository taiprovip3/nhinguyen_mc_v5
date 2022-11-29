import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "./assets/logo-header.png";

export default function Homepage() {
  return (
    <div className='border border-danger'>
        <div>
            <img src={logo} alt="logo-header" />
        </div>
    </div>
  );
}
