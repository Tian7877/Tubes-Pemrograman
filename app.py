import requests
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

API_KEY = 'USE API KEY'

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    if city:
        url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            weather_data = {
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
            return jsonify(weather_data)
        return jsonify({"error": "City not found"}), 404
    return jsonify({"error": "No city provided"}), 400

@app.route('/favorites')
def get_favorites():
    favorite_cities = ["Jakarta", "Bali", "Bandung", "Medan"]
    favorite_weather = []

    for city in favorite_cities:
        url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            weather_data = {
                "city": data['name'],
                "country": data['sys']['country'],
                "temperature": data['main']['temp'],
                "description": data['weather'][0]['description'],
                "icon": data['weather'][0]['icon']
            }
            favorite_weather.append(weather_data)

    return jsonify(favorite_weather)

if __name__ == '__main__':
    app.run(debug=True)
