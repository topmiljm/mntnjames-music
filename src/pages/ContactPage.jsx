export default function ContactPage() {
    return (
        <div className="contact-page">
            <div className="contact-container">
                <h1 className="contact-title">CONTACT</h1>

                {/* <div className="contact-page-img-wrapper">
                    <img className="contact-page-img" src="/images/mntn-peak.jpg" alt="" />
                </div> */}

                <form className="contact-form">
                    <div className="form-section">

                        <div className="name-row">
                            <div className="field-group">
                                <span>First Name (required)</span>
                                <input type="text" maxLength={50}required />
                            </div>

                            <div className="field-group">
                                <span>Last Name (required)</span>
                                <input type="text" maxLength={50} required />
                            </div>
                        </div>
                    </div>

                    <div className="field-group">
                        <span>Email (required)</span>
                        <input type="email" maxLength={50} required />
                    </div>

                    <div className="field-group">
                        <span>Subject (required)</span>
                        <input type="text" maxLength={125} required />
                    </div>

                    <div className="field-group">
                        <span>Message (required)</span>
                        <textarea rows="6" required />
                    </div>

                    <button type="submit" className="contact-submit">
                        Submit
                    </button>
                </form>

                <div className="section-divider" />
                <p className="shows-text">
                    <i>'lorem ipsum'</i>
                </p>
            </div>
        </div>
    );
}