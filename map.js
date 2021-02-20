const script = document.createElement('script');
script.defer = true;
script.async = true;
script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=initMap`;
document.getElementsByTagName('head')[0].appendChild(script);