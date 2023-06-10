import "./SubscribeAsside.scss"

export const SubscribeAsside = () => {
    return <>
        <aside className="subscribe-aside">
            <div className="container">
                <div className="subscribe-inner">
                    <div className="subscribe-box">
                        <div className="subscribe-textbox">
                            <h2 className="subscribe-title">
                                Subscribe Newsletter
                            </h2>
                            <p className="subscribe-desc">
                                I will update good news and promotion service not spam
                            </p>
                        </div>

                        <form className="subscribe-form" onSubmit={evt => {
                            evt.preventDefault()
                            console.log("Submit");
                        }}>
                            <label className="subscribe-label">
                                <input className="subscribe-input" type="text" aria-label="Enter your email address" placeholder="Enter your email address.." />
                                <button className="subscribe-btn" type="submit" onClick={evt => {
                                    evt.target.blur()
                                }}>
                                    Contact Now
                                </button>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </aside>
    </>
}
