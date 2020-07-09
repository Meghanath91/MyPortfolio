import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Please send me message</h1>
      <form
            id="contactForm"
            name="contactForm"
            onSubmit=""
          >
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  value=""
                  onChange=""
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  value="{this.state.contactEmail}"
                    onChange="{this.handleChange}"
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  value="{this.state.contactSubject}"
                    onChange="{this.handleChange}"
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  value="{this.state.contactMessage}"
                  onChange="{this.handleChange}"
                  name="contactMessage"
                ></textarea>
              </div>   
                <button
                id="button"
                onClick="{this.handleClick}"
                className="form-button"
                type="submit"
              >
                Send Message
              </button>
             

            </fieldset>
          </form>

    </div>
  );
};
export default Contact;
