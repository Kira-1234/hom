from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS

app = Flask(__name__,
            static_folder='.',  # Корневая папка для статических файлов
            template_folder='html')  # Папка с HTML-файлами
CORS(app)

@app.route('/api/request', methods=['POST'])
def request_form():
    data = request.json
    print("Заявка:", data)
    return jsonify({"message": "Заявка отправлена!"})

@app.route('/api/feedback', methods=['POST'])
def feedback():
    data = request.json
    print("Отзыв:", data)
    return jsonify({"message": "Спасибо за отзыв!"})

@app.route('/api/contact', methods=['GET'])
def contact():
    return jsonify({
        "phone": "+7-900-123-45-67",
        "telegram": "https://t.me/your_username"
    })

if __name__ == '__main__':
    app.run(debug=True)
