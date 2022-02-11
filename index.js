const tokenizationSpecification = {
    type: 'PAYMENT_GATEWAY',
    parameters: {
        gateway:'example',
        gatewayMerchantId: 'gatewayMerchantId'
    }
}
const cardPaymentMethod = {
    type: 'CARD',
    tokenizationSpecification: tokenizationSpecification,
    parameters: {
        allowedCardNetworks: ['VISA', 'MASTERCARD'],
        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
    }
};
const googlePayConfiguration = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [cardPaymentMethod]
};
let googlePayClient;
function onGooglePayLoaded() {
    googlePayClient = new googlePayClient.payments.api.PaymentsClient({
        environment: 'TEST',
    })

    googlePayClient.isReadyToPay(googlePayConfiguration)
      .then(response => {
          if (response.result) {
              createAndAddButton();
          } else {
              //the current user cannot pay using google pay. offer another
              //payment method
          }
      })
      .catch(error => console.error('isReadyToPay error: ', error))
}

function createAndAddButton() {
    const googlePayButton = googlePayClient.createButton({
     onclick: onGooglePayButtonClicked,
    });

    document.getElementById('buy-now').appendChild(googlePayButton);
}

function onGooglePayButtonClicked() {

    const paymentDataRequest = { ...googlePayConfiguration };
    paymentDataRequest.merchantInfo = {
        merchantId: 'BCR2DN4T7DB5X33M',
        merchantName: 'Chicken Shop',
    };

    paymentDataRequest.transactionInfo = {
        totalPriceStatus: 'FINAL',
        totalPrice: selectedItem.price,
        currencyCode: 'INR',
        countryCode: 'IN'
    };

    googlePayClient.loadPaymentData(paymentDataRequest)
      .then(paymentData => processPaymentData(paymentData))
      .catch(error => console.error('loadPaymentData error: ', error));
}

function processPaymentData(paymentData) {
    fetch(ordersEndpointUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: paymentData
    })
}
