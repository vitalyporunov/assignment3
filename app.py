from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Sample quiz data 
quiz_data = {
    "questions": [
        {
            "text": "What is the capital of France?",
            "options": ["Berlin", "Paris", "Madrid", "Rome"],
            "answer": "Paris"
        },
        {
            "text": "What is the highest mountain in the world?",
            "options": ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
            "answer": "Mount Everest"
        },
{
            "text": "What is the smallest country in the world?",
            "options": ["Monaco", "Vatican City", "Nauru", "Tuvalu"],
            "answer": "Vatican City"
        },
        {
            "text": "Who painted the Mona Lisa?",
            "options": ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
            "answer": "Leonardo da Vinci"
        },
        {
            "text": "What is the largest planet in our solar system?",
            "options": ["Mars", "Jupiter", "Saturn", "Uranus"],
            "answer": "Jupiter"
        },
        {
            "text": "What is the chemical symbol for gold?",
            "options": ["Ag", "Au", "Fe", "Hg"],
            "answer": "Au"
        },
        {
            "text": "Who wrote the Harry Potter book series?",
            "options": ["J.R.R. Tolkien", "Stephen King", "J.K. Rowling", "George R.R. Martin"],
            "answer": "J.K. Rowling"
        },
        {
            "text": "What is the capital of Japan?",
            "options": ["Beijing", "Seoul", "Tokyo", "Shanghai"],
            "answer": "Tokyo"
        },
        {
            "text": "Who invented the telephone?",
            "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
            "answer": "Alexander Graham Bell"
        },
        {
            "text": "What is the largest ocean on Earth?",
            "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            "answer": "Pacific Ocean"
        },
        {
            "text": "What is the currency of the United States?",
            "options": ["Euro", "Pound Sterling", "US Dollar", "Japanese Yen"],
            "answer": "US Dollar"
        },
        {
            "text": "Who is the author of 'Pride and Prejudice'?",
            "options": ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Virginia Woolf"],
            "answer": "Jane Austen"
        },
        {
            "text": "What is the name of the highest waterfall in the world?",
            "options": ["Niagara Falls", "Angel Falls", "Victoria Falls", "Iguazu Falls"],
            "answer": "Angel Falls"
        },
        {
            "text": "What is the chemical symbol for water?",
            "options": ["CO2", "H2O", "NaCl", "O2"],
            "answer": "H2O"
        },
        {
            "text": "Who directed the movie 'Jaws'?",
            "options": ["Steven Spielberg", "George Lucas", "Quentin Tarantino", "Martin Scorsese"],
            "answer": "Steven Spielberg"
        },
        {
            "text": "What is the capital of Australia?",
            "options": ["Sydney", "Melbourne", "Canberra", "Perth"],
            "answer": "Canberra"
        },
        {
            "text": "Who painted the ceiling of the Sistine Chapel?",
            "options": ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
            "answer": "Michelangelo"
        },
        {
            "text": "What is the name of the largest desert in the world?",
            "options": ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Kalahari Desert"],
            "answer": "Sahara Desert"
        },
        {
            "text": "What is the smallest planet in our solar system?",
            "options": ["Mercury", "Venus", "Mars", "Pluto"],
            "answer": "Mercury"
        },
        {
            "text": "Who wrote the play 'Hamlet'?",
            "options": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
            "answer": "William Shakespeare"
        },
        {
            "text": "What is the name of the longest river in the world?",
            "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
            "answer": "Nile River"
        },
        {
            "text": "What is the capital of Brazil?",
            "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
            "answer": "Brasília"
        },
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