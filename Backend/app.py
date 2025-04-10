import sqlite3
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Función para verificar si el usuario existe en la base de datos
def verificar_usuario(username, password):
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users WHERE username = ? AND password = ?', (username, password))
    user = cursor.fetchone()
    conn.close()
    return user

# Función para insertar un nuevo usuario
def insertar_usuario(username, email, password):
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO users (username, email, password)
        VALUES (?, ?, ?)
    ''', (username, email, password))
    conn.commit()
    conn.close()

@app.route('/')
def index():
    return render_template('index.html')  # Página de inicio (donde se escanea el QR)

@app.route('/home')
def home():
    return render_template('home.html')  # Página principal después de iniciar sesión

@app.route('/video')
def video():
    # Aquí iría el video y la lógica para ganar monedas
    # Se otorgan monedas cuando se ve el video
    monedas = 10  # Ejemplo de monedas ganadas
    return render_template('video.html', monedas=monedas)  # Mostrar el video y las monedas ganadas

@app.route('/rewards')
def rewards():
    return render_template('rewards.html')  # Página para canjear las monedas

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # Verificar usuario en la base de datos
        user = verificar_usuario(username, password)

        if user:
            return redirect(url_for('home'))  # Redirigir a la página de inicio si el usuario existe
        else:
            return "Credenciales incorrectas, intente de nuevo."  # Mensaje de error

    return render_template('login.html')  # Página de login

@app.route('/registro', methods=['GET', 'POST'])
def registro():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']

        # Insertar usuario en la base de datos
        insertar_usuario(username, email, password)

        # Redirigir a la página de login después de registrarse
        return redirect(url_for('login'))

    return render_template('registro.html')  # Página de registro

if __name__ == '__main__':
    app.run(debug=True)

