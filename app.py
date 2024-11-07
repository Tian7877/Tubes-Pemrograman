from flask import Flask, render_template, request, jsonify
import requests
from datetime import datetime

class WeatherApp:
    def __init__(self, api_key):
        self.api_key = api_key
        self.favorite_cities = ["Jakarta", "Bali", "Bandung", "Medan"]

    def get_weather_data(self, city):
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

    def get_favorite_weather(self):
        favorite_weather = []
        for city in self.favorite_cities:
            weather_data = self.get_weather_data(city)
            if weather_data:
                favorite_weather.append(weather_data)
        return favorite_weather

    def get_forecast_data(self, city):
        url = f"http://api.openweathermap.org/data/2.5/forecast?q={city}&appid={self.api_key}&units=metric"
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            forecast_data = []
            forecast_5days = []
            added_days = set()
            next_4_hours = []

            # Process forecast data for next 4 hours and daily data for 5 days
            for forecast in data['list']:
                forecast_date = datetime.strptime(forecast['dt_txt'], "%Y-%m-%d %H:%M:%S")
                
                # Get data for next 4 hours
                if len(next_4_hours) < 4 and forecast_date > datetime.now():
                    next_4_hours.append({
                        "date": forecast['dt_txt'],
                        "temperature": forecast['main']['temp'],
                        "description": forecast['weather'][0]['description'],
                        "icon": forecast['weather'][0]['icon']
                    })
                
                # Get data for daily forecast (choose one point per day around noon)
                if forecast_date.date() not in added_days and forecast_date.hour == 12:
                    forecast_5days.append({
                        "date": forecast['dt_txt'],
                        "temperature": forecast['main']['temp'],
                        "description": forecast['weather'][0]['description'],
                        "icon": forecast['weather'][0]['icon']
                    })
                    added_days.add(forecast_date.date())
                    
            return {
                "city": data['city']['name'],
                "country": data['city']['country'],
                "forecast": next_4_hours,        # Per hour forecasts for 4-hour cards
                "forecast_5days": forecast_5days[:5]  # Daily forecasts for 5-day chart
            }
        else:
            return None

app = Flask(__name__)
weather_app = WeatherApp(api_key='OWN API KEY')

# Tambahkan filter datetimeformat untuk format tanggal di Jinja
def datetimeformat(value):
    date = datetime.strptime(value, "%Y-%m-%d %H:%M:%S")
    return date.strftime("%d-%m-%Y %H:%M")

# Daftarkan filter ke lingkungan Jinja Flask
app.jinja_env.filters['datetimeformat'] = datetimeformat


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    if city:
        weather_data = weather_app.get_weather_data(city)
        if weather_data:
            return jsonify(weather_data)
        return jsonify({"error": "City not found"}), 404
    return jsonify({"error": "No city provided"}), 400

@app.route('/favorites')
def get_favorites():
    favorite_weather = weather_app.get_favorite_weather()
    return jsonify(favorite_weather)

@app.route('/api/forecast/<city_slug>')
def api_forecast(city_slug):
    forecast_data = weather_app.get_forecast_data(city_slug)
    if forecast_data:
        return jsonify(forecast_data)
    return jsonify({"error": "City not found"}), 404

@app.route('/forecast/<city_slug>')
def forecast(city_slug):
    weather_data = weather_app.get_forecast_data(city_slug)
    if weather_data:
        return render_template('forecast.html', weather=weather_data)
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)



