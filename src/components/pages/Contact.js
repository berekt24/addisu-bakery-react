import React from 'react';
import '../Header.css';

export default function Contact() {
  return (
    <div >
      <h1 class="contact-header">Contact</h1>
      <div class="contact-form">
      <div class="mb-3 col-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
</div>
<div class="contact-form">
<div class="mb-3 col-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</div>
    </div>
  );
}