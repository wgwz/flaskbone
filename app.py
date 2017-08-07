from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/books', methods=['GET', 'POST'])
def books():
    return jsonify({
        'books': [{
            'title': 'clockwork orange',
            'author': 'whoisthis?',
            'extra':'data'
        }, {
            'title': 'building the commune',
            'author': 'author2'
        }, {
            'title': 'hello',
            'author': 'me'
        }, {
            'title': 'catcher',
            'author': 'who'
        }]
    })
