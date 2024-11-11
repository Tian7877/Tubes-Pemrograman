from flask import Flask, render_template, request, jsonify, redirect, url_for, session
import requests
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from models import User
from extensions import db
from config import Config

class WeatherApp:
    def __init__(self, api_key):
        self.api_key = api_key
        self.favorite_cities = ["Jakarta", "Bali", "Bandung", "Medan"]

    def get_forecast_data_by_coordinates(self, lat, lon):
        url = f"http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={self.api_key}&units=metric"
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            next_4_hours = []
            for forecast in data['list']:
                forecast_date = datetime.strptime(forecast['dt_txt'], "%Y-%m-%d %H:%M:%S")
                
                if len(next_4_hours) < 4 and forecast_date > datetime.now():
                    next_4_hours.append({
                        "time": forecast['dt_txt'],
                        "temperature": forecast['main']['temp'],
                        "description": forecast['weather'][0]['description'],
                        "icon": forecast['weather'][0]['icon'],
                        "humidity": forecast['main']['humidity']
                    })

            return {
                "forecast": next_4_hours
            }
        else:
            return None
        
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
    
    def get_weather_by_coordinates(self, lat, lon):
        url = f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={self.api_key}&units=metric"
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
        
    def get_forecast_data(self, city):
        url = f"http://api.openweathermap.org/data/2.5/forecast?q={city}&appid={self.api_key}&units=metric"
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            forecast_data = []
            forecast_5days = []
            added_days = set()
            next_4_hours = []

            for forecast in data['list']:
                forecast_date = datetime.strptime(forecast['dt_txt'], "%Y-%m-%d %H:%M:%S")
                
                if len(next_4_hours) < 4 and forecast_date > datetime.now():
                    next_4_hours.append({
                        "date": forecast['dt_txt'],
                        "temperature": forecast['main']['temp'],
                        "description": forecast['weather'][0]['description'],
                        "icon": forecast['weather'][0]['icon']
                    })
                
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
                "forecast": next_4_hours,       
                "forecast_5days": forecast_5days[:5] 
            }
        else:
            return None

app = Flask(__name__)
weather_app = WeatherApp(api_key='07b4a31aed282295051bedd62e9ebb99')
app.config.from_object(Config)
db.init_app(app)


def datetimeformat(value):
    date = datetime.strptime(value, "%Y-%m-%d %H:%M:%S")
    return date.strftime("%d-%m-%Y %H:%M")


app.jinja_env.filters['datetimeformat'] = datetimeformat


@app.route('/')
def home():
    return redirect(url_for('login')) 

@app.route('/logout')
def logout():
    return render_template('logout.html')

@app.route('/dashboard')
def dashboard():
    if 'username' in session:
        return render_template('dashboard.html')
    else:
        return render_template('login.html')

@app.route('/back')
def back():
        return render_template('back.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()
        
        if user and check_password_hash(user.password, password):
            session['username'] = user.username
            return redirect(url_for('dashboard'))  
        else:
            return redirect(url_for('back'))
    
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        
        existing_user = User.query.filter_by(username=username).first()
        if existing_user:
            return "Username already exists. Please choose another one."

        
        hashed_password = generate_password_hash(password)
        new_user = User(username=username, password=hashed_password)
        
        
        db.session.add(new_user)
        db.session.commit()
        
        return redirect(url_for('login'))  

    return render_template('register.html')


@app.route('/index')
def index():
    if 'username' in session:
        
        favorite_weather = weather_app.get_favorite_weather()
        return render_template('index.html', weather=favorite_weather)
    else:
        return redirect(url_for('login'))

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
    if 'username' in session:
        weather_data = weather_app.get_forecast_data(city_slug)
        if weather_data:
            return render_template('forecast.html', weather=weather_data)
    else:
        return render_template('login.html')
    return render_template('404.html'), 404

@app.route('/set_location', methods=['GET'])
def set_location():
    lat = request.args.get('lat')
    lon = request.args.get('lon')
    if lat and lon:
        
        weather_data = weather_app.get_weather_by_coordinates(lat, lon)
        
        
        forecast_data = weather_app.get_forecast_data_by_coordinates(lat, lon)
        if weather_data and forecast_data:
            weather_data['forecast'] = forecast_data['forecast'][:4]  
            return jsonify(weather_data)
        
        return jsonify({"error": "Weather data not available"}), 404
    return jsonify({"error": "Invalid location data"}), 400


if __name__ == '__main__':
    app.run(debug=True)
