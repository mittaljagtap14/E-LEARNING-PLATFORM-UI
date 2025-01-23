// Example: Displaying an alert when the user clicks a button
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#myButton');
    if (button) {
      button.addEventListener('click', () => {
        alert('Button clicked!');
      });
    }
  });
  