import requests
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

API_KEY = 'OWN API'

# Buat kelas untuk layanan cuaca
class WeatherService:
    def __init__(self, api_key):
        self.api_key = api_key

    def get_weather_by_city(self, city):
        url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={self.api_key}&units=metric"
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            return {
                "city": data['name'],
                "country": data['sys']['country'],
                "temperature": data['main']['temp'],
                "feelsLike": data['main']['feels_like'],
                "description": data['weather'][0]['description'],
                "icon": data['weather'][0]['icon'],
                "humidity": data['main']['humidity'],
                "windSpeed": data['wind']['speed'],
                "pressure": data['main']['pressure']
            }
        else:
            return None

    def get_multiple_cities_weather(self, cities):
        weather_data = []
        for city in cities:
            city_weather = self.get_weather_by_city(city)
            if city_weather:
                weather_data.append(city_weather)
        return weather_data

# Buat instance dari kelas WeatherService
weather_service = WeatherService(API_KEY)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    if city:
        data = weather_service.get_weather_by_city(city)
        if data:
            return jsonify(data)
        return jsonify({"error": "City not found"}), 404
    return jsonify({"error": "No city provided"}), 400

@app.route('/favorites')
def get_favorites():
    favorite_cities = ["Jakarta", "Bali", "Bandung", "Medan"]
    favorite_weather = weather_service.get_multiple_cities_weather(favorite_cities)
    return jsonify(favorite_weather)

if __name__ == '__main__':
    app.run(debug=True)

