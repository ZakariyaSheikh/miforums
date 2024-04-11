import React from 'react';
import ReactDOM from 'react-dom';

const BuyerPopup = ({ isShowing, hide }) => isShowing
        ? ReactDOM.createPortal(
              <React.Fragment>
                  <div className='modal-overlay' id="modaloverlay" />
                  <div
                      className='modal-wrapper'
                      aria-modal
                      aria-hidden
                      tabIndex={-1}
                      role='dialog'
                  >
                      <div className='modal buyerpopup' id="modal2">
                          <div className='modal-header'>
                              <button
                                  type='button'
                                  className='modal-close-button'
                                  data-dismiss='modal'
                                  aria-label='Close'
                                  onClick={hide}
                              >
                                  <span aria-hidden='true'>&times;</span>
                              </button>
                          </div>
                          <div className='modal-title'>
                              <div className='row no-gutters center-content'>
                                  <div className='col-lg-12 mr-lg-auto py-5'>
                                      <h2>attended an m&i before? <a href="https://mi-forums.com/buyer-profile"><span className='blue-underlined' style={{fontSize:'36px', paddingBottom:'5px'}}>register here!</span></a></h2>
                                      <p>
                                      If you're new to m&i, please close this pop-up and complete the form.
                                      </p>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              </React.Fragment>,
              document.body
          )
        : null;

export default BuyerPopup;
