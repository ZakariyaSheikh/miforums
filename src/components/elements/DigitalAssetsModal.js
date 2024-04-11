

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const DigitalAssetsModal = ({ isShowing, hide }) => {
    useEffect(() => {
        if (isShowing) {
          // Disable scrolling on the body when the modal is open
          document.body.style.overflow = 'hidden';
        } else {
          // Enable scrolling on the body when the modal is closed
          document.body.style.overflow = 'unset';
        }
    
        // Cleanup the style when the component unmounts
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, [isShowing]);
    

  return isShowing
    ? ReactDOM.createPortal(
        // Your modal JSX remains unchanged
        <React.Fragment>
        <div className='modal-overlay' id="modaloverlay" />
        <div
            className='modal-wrapper'
            aria-modal
            aria-hidden
            tabIndex={-1}
            role='dialog'
        >
            <div className='modal digitalAssetsModal' id="modal2">
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
                            <h2 style={{fontSize:'36px', paddingBottom:'5px'}}>Share your assets below.</h2>
                            
                        </div>
                    </div>
                </div>
                <div className="assetsForm">
                          <script type="text/javascript" src="https://d3v0iqf1i1i9dg.cloudfront.net/embed/v1/ftautosize.js" data-ftguid="ft02d1acdc8d6e45a39d3ace936f48a6e9"></script>
<iframe className="digitalassetsform" onload="window.parent.scrollTo(0,0)" id="JotFormIFrame-240023088897058" allowtransparency="true" src="https://form.jotform.com/240023088897058" frameborder="0" width="1000" height="700" ></iframe>


                          </div>
            </div>
        </div>
    </React.Fragment>,
        document.body
      )
    : null;
};

export default DigitalAssetsModal;


