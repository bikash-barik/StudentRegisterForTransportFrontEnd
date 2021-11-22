import React, { Component } from 'react'

export default class HelpDesk extends Component {
    render() {
        return (
            <div>
                <div class="container">
  <div style={{textAlign:"center"}}>
    <h2>Contact Us</h2>
  </div>
  <div class="row">
    <div class="column">
      <img src="/images/contactus.svg" style={{width:"100%"}}/>
    </div>
    <div class="column">
      <form action="/action_page.php">
        <label for="fname">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.."/>
        <label for="email">Email Id</label>
        <input type="text" id="email" name="lastname" placeholder="Your email id.."/>
        
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}}></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>

            </div>
        )
    }
}
