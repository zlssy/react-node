/**
 * Created by shady on 15/7/7.
 */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './PrivacyPolicy.less';

@withStyles(styles)
class PrivacyPolicy {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Privacy Policy - Anker';
    this.context.onSetTitle(title);
    return (
      <div className="PrivacyPolicy">
        <div className="title">
          <h2>Privacy Policy</h2>
          <center>Learn about how we value your privacy.</center>
        </div>
        <div className="content">
            <h3>What information do we collect?</h3>
            <p>We collect information from you when you register on our site, place an order or subscribe to our newsletter.  </p>
            <p>When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address or phone number. You may, however, visit our site anonymously.</p>
            <h3>What do we use your information for?</h3>
            <p>Any of the information we collect from you may be used in one of the following ways: </p>
            <p><strong>To process transactions</strong></p>
            <p>Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</p>
            <p><strong>To send periodic emails</strong></p>
            <p>The email address you provide for order processing, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.</p>
            <p>Note: If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.</p>
            <h3>How do we protect your information?</h3>
            <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
            <p>We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment Gateway Providers Database only to be accessible by those authorized with special access rights to such systems, who are required to keep the information confidential.</p>
            <p>After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be stored on our servers.</p>
            <h3>Do we use cookies?</h3>
            <p>Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow it to) that enables the site’s or service provider’s systems to recognize your browser and capture and remember certain information. </p>
            <p>We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, keep track of advertisements and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>
            <h3>Do we disclose any information to outside parties?</h3>
            <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>
            <h3>Third Party Links</h3>
            <p>Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. </p>
            <p>Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>
            <h3>California Online Privacy Protection Act Compliance</h3>
            <p>Because we value your privacy we have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties without your consent. </p>
            <p>As part of the California Online Privacy Protection Act, all users of our site may make any changes to their information at anytime by logging into their account and going to 'Edit User Profile'.</p>
            <h3>Children’s Online Privacy Protection Act Compliance</h3>
            <p>We are in compliance with the requirements of COPPA (Childrens Online Privacy Protection Act), and we do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older.</p>
            <h3>Online Privacy Policy Only</h3>
            <p>This online Privacy Policy applies only to information collected through our website and not to any information collected offline.</p>
            <h3>Terms of Use</h3>
            <p>Please also read our Terms of Use, which explains proper use of our website at <a href="http://www.anker.com" target="_bank">www.anker.com</a></p>
            <h3>Your Consent</h3>
            <p>By using our site, you consent to our website Privacy Policy.</p>
            <h3>Changes to Our Privacy Policy</h3>
            <p>If we decide to change our Privacy Policy, we will update the Privacy Policy modification date below.</p>
            <p>Last modified: 9/24/2015</p>
            <h3>Contact Us</h3>
            <p>If you have any questions about our Privacy Policy, please contact us at <a href="Mailto:support@anker.com">support@anker.com</a></p>
        </div>
      </div>
    );
  }
}

export default PrivacyPolicy;
