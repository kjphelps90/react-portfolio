import React from "react";


export default function Contact() {
    return (
        <div className="container my-5">
        <form className="form">
        <div className = "my-4">
        <input
          name="userName"
          type="text"
          placeholder="name"
        />
        </div>
        <div className="my-4">
        <input
          name="email"
          type="email"
          placeholder="email"
        />
        </div>
        <div className="my-4">
        <input
          className="textarea"
          name="textarea"
          type="textarea"
          placeholder="Please enter your question"
        />
        </div>
        <div>
            <button type="button">Submit</button>
        </div>
        </form>
        </div>
        
    );
}