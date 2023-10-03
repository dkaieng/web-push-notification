self.addEventListener('push', () => {
  const options = {
    // Định nghĩa các tùy chọn cho thông báo
    body: 'Hello sir!',
    // Các tùy chọn khác...
  };
  self.registration.showNotification('Hello world!', options);
});
