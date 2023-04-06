const orderForm = document.getElementById('order-form');

orderForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form data
  const formData = new FormData(orderForm);

  // Build the message to send to Telegram
  const message = `
    New order ( the white shirt) from ${formData.get('name')}\n
    Email: ${formData.get('email')}\n
    Phone number: ${formData.get('phone')}\n
    Address: ${formData.get('address')}\n
    Size: ${formData.get('size')}\n
    Quantity: ${formData.get('quantity')}
  `;

  // Send the message to Telegram
  const botToken = '5928613510:AAH9Er-8Yr8hySQi9EbRJiAXssqxONQ48PM';
  const chatId = '-1001686478977';

  axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message
  })
  .then(response => {
      console.log('Message sent:', response.data.result.text);
      // Optionally, display a message to the user indicating the order was successful
  })
  .catch(error => {
      console.error('Error sending message:', error);
      // Optionally, display a message to the user indicating the order failed
  });
});
