import React from 'react'

const Hotnews = (props) => {
    return (
              <div className="news">
              <h2>Tin tức học tập</h2>
              <div className="row">
                <div className="col-4">
                  <div class="card">
                    <img
                      src="http://picsum.photos/400/200"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div class="card">
                    <img
                      src="http://picsum.photos/400/200"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div class="card">
                    <img
                      src="http://picsum.photos/400/200"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default Hotnews
