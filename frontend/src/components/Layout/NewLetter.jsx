import React from 'react'

const NewLetter = () => {
  return (
    <div>
  
  {/*News*/}
  <section className="container-fluid container-xl mt-5 news_ccc" style={{width:"96%", margin:"auto"}}>
    <div className="row align-items-center">
      <div className="col-12 col-lg-7 pe-0 pe-lg-5">
        <div className="d-flex gap-3 gap-sm-4 align-items-center news_c_contt">
          <div className="email_ic">
            <img src="https://www.farecation.com/imgs/mail-i.png" />
          </div>
          <div>
            <h6>Join our newsletter</h6>
            <h5 className="mt-2">Stay up to date with flight
              discounts and deals.</h5>
            <p className="mt-2 font_15">Sign up for our email
              newsletter and you'll be the first to get the
              best deals and discounts.
              Get the Updates.</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-5 mt-3 mt-lg-0">
        <form action="#" className="mail_in w-100">
          <div className="form_news w-100">
            <input type="email" placeholder="Enter Your Email" className="form-control" />
          </div>
          <button type="submit">Subscribe</button>
        </form>
        <p className="mt-3 font_13 d-none d-sm-block">If you are willing
          to book your flight with Farecation. We recommend that
          you read our privacy policy so that you do not encounter
          any kind of inconvenience..</p>
      </div>
    </div>
  </section>
</div>

  )
}

export default NewLetter