from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Sample quiz data 
quiz_data = {
    "questions": [
        {
            "text": "What is the capital of France?",
            "options": ["Berlin", "Paris", "Madrid", "Rome"],
            "answer": "Paris"
        }
    ]
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html', quiz_data=quiz_data)

@app.route('/result', methods=['POST'])
def result():
    score = 0
    for i, question in enumerate(quiz_data["questions"]):
        if request.form.get(f"q{i+1}") == question["answer"]:
            score += 1
    return render_template('result.html', score=score, total=len(quiz_data["questions"]))

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__': 
    app.run(debug=True)