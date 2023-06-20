navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Текущие координаты: Широта ${latitude}, Долгота ${longitude}`);
  }, (error) => {
    console.log('Не удалось получить местоположение:', error.message);
  });
  