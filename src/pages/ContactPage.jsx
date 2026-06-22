export default function ContactPage() {
    return (
        <>
            <div className="about-page-img-wrapper">
                <img className="about-page-img" src="/images/about-header-3.jpg" alt="" />
            </div>

            <div className="contact-page">
                <div className="contact-container">
                    <h1 className="contact-title">Contact</h1>
                    <form className="contact-form">
                        <div className="form-section">
                            <p>* required field</p>
                            <div className="name-row">
                                <div className="field-group">
                                    <span>First Name *</span>
                                    <input type="text" maxLength={50} required />
                                </div>

                                <div className="field-group">
                                    <span>Last Name *</span>
                                    <input type="text" maxLength={50} required />
                                </div>
                            </div>
                        </div>

                        <div className="field-group">
                            <span>Email *</span>
                            <input type="email" maxLength={50} required />
                        </div>

                        <div className="field-group">
                            <span>Subject *</span>
                            <input type="text" maxLength={125} required />
                        </div>

                        <div className="field-group">
                            <span>Message *</span>
                            <textarea rows="6" maxLength={500} required />
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
        </>
    );
}