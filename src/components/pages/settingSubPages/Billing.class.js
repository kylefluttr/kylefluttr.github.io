import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';


class MyAccount extends Component {
  render() {
    return(
    <div className="commonSectionsProfile">
        <div className="settingsSections">
            <h4>Payment Information</h4>
            <div>
                <div class="payment-info">
                    <div className="paymentMethodContainer"><i className="pf pf-paypal"/></div>
                    <div class="card-info">
                        <div class="card-description"><strong>jonny384@gmail.com</strong></div>
                        <div class="card-details">Added on Nov 2018</div>
                    </div>
                    <div class="card-tools"><a class="badBtn">Remove PayPal</a></div>
                </div>
            </div>
        </div>
        <div className="settingsSections">
            <h4>Billing History</h4>
            <div>
                <ol className="billing-history-list">
                    <li className="header-row">
                        <h5 className="date">Date</h5>
                        <h5 className="description">Description</h5>
                        <h5 className="payment-details">Amount</h5>
                    </li>
                    <li className="completed">
                        <div>2/25/2018</div>
                        <div>Subscribed to Jay305</div>
                        <div className="payment-details">
                            <div>$4.99</div>
                        </div>
                    </li>
                    <li className="completed">
                        <div>2/25/2018</div>
                        <div>Subscribed to Jay305</div>
                        <div className="payment-details">
                            <div>$4.99</div>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(MyAccount)
