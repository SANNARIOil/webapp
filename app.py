from flask import Flask, render_template, request, redirect
import mysql.connector

app = Flask(__name__)

# Reuse your existing connection function
def create_connection():
    return mysql.connector.connect(
        host='localhost',
        user='root',
        password='',
        database='sannari'
    )

@app.route('/')
def index():
    return render_template('register.html')


@app.route('/register', methods=['POST'])

def register():
    name = request.form['name']
    contact_info = request.form['contact_info']
    address = request.form['address']
    item = request.form['item']
    quantity = request.form['quantity']

    conn = create_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO orders (name, contact_info, address, item, quantity) VALUES (%s, %s, %s, %s, %s)",
        (name, contact_info, address, item, quantity)
    )
    conn.commit()
    cursor.close()
    conn.close()

    return "order registered successfully!"
@app.route('/orders')
def view_orders():
    conn = create_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM orders")
    orders = cursor.fetchall()
    cursor.close()
    conn.close()

    return render_template('orders.html', orders=orders)


if __name__ == '__main__':
    app.run(debug=True)

    
